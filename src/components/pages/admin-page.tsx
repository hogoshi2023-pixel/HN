"use client";

import * as React from "react";
import {
  ArrowLeft,
  Lock,
  RefreshCw,
  Search,
  Eye,
  Trash2,
  LogOut,
  Download,
  Mail,
  Phone,
  Globe,
  Building2,
  Loader2,
  ShieldAlert,
  CheckCircle2,
  X,
  ChevronRight,
} from "lucide-react";
import { BrandButton } from "@/components/brand-button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useNav } from "@/lib/nav-store";
import { useT, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ADMIN_KEY = "HN_ADMIN_2026";
const SESSION_KEY = "hn-admin-auth";

type Status = "new" | "contacted" | "closed";

type Inquiry = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  product: string | null;
  substrate: string | null;
  environment: string | null;
  quantity: string | null;
  message: string;
  createdAt: string;
  status: string;
};

type Stats = { total: number; new: number; contacted: number; closed: number };

const DATE_LOCALE: Record<Locale, string> = {
  en: "en-US",
  zh: "zh-CN",
  vi: "vi-VN",
};

function fmtDate(iso: string, locale: Locale) {
  const d = new Date(iso);
  return d.toLocaleString(DATE_LOCALE[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AdminPage() {
  const { navigate } = useNav();
  const { t, loc, locale } = useT();
  const [authed, setAuthed] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthed(window.sessionStorage.getItem(SESSION_KEY) === "1");
    }
  }, []);

  if (!authed) {
    return (
      <LockScreen
        onUnlock={() => setAuthed(true)}
        t={t}
        navigate={navigate}
      />
    );
  }

  return (
    <Dashboard
      onLogout={() => {
        window.sessionStorage.removeItem(SESSION_KEY);
        setAuthed(false);
      }}
      t={t}
      loc={loc}
      locale={locale}
      navigate={navigate}
    />
  );
}

// ─── Lock screen ────────────────────────────────────────────────────────────

function LockScreen({
  onUnlock,
  t,
  navigate,
}: {
  onUnlock: () => void;
  t: (k: string) => string;
  navigate: (p: "home") => void;
}) {
  const [pass, setPass] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(false);
    // small delay for UX
    setTimeout(() => {
      if (pass.trim() === ADMIN_KEY) {
        window.sessionStorage.setItem(SESSION_KEY, "1");
        onUnlock();
      } else {
        setErr(true);
        setLoading(false);
      }
    }, 250);
  }

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden dark bg-ink px-6 py-16">
      <div className="absolute inset-0 grid-bg text-foreground/20 opacity-50" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative w-full max-w-md">
        <button
          onClick={() => navigate("home")}
          className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4" /> {t("admin.backToSite")}
        </button>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl">
          <div className="grid size-12 place-items-center rounded-lg border border-brand/30 bg-brand-muted text-brand">
            <Lock className="size-6" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
            {t("admin.lockTitle")}
          </h1>
          <p className="mt-2 text-[14px] text-muted-foreground">
            {t("admin.lockDesc")}
          </p>
          <form onSubmit={submit} className="mt-6 space-y-3">
            <input
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                setErr(false);
              }}
              placeholder={t("admin.passphrasePlaceholder")}
              autoFocus
              className="h-11 w-full rounded-md border border-border bg-background px-3.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            {err && (
              <p className="flex items-center gap-1.5 text-[12px] text-destructive">
                <ShieldAlert className="size-3.5" /> {t("admin.lockError")}
              </p>
            )}
            <BrandButton type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Lock className="size-4" />}
              {t("admin.unlock")}
            </BrandButton>
          </form>
          <div className="mt-5 rounded-md border border-border/60 bg-background/50 p-3">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
              {t("admin.lockout").toUpperCase()}
            </p>
            <p className="mt-1 font-mono text-[13px] text-brand">{ADMIN_KEY}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>
    </section>
  );
}

// ─── Dashboard ──────────────────────────────────────────────────────────────

function Dashboard({
  onLogout,
  t,
  loc: _loc,
  locale,
  navigate,
}: {
  onLogout: () => void;
  t: (k: string) => string;
  loc: (v: unknown) => string;
  locale: Locale;
  navigate: (p: "home") => void;
}) {
  const [inquiries, setInquiries] = React.useState<Inquiry[]>([]);
  const [stats, setStats] = React.useState<Stats>({ total: 0, new: 0, contacted: 0, closed: 0 });
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<"all" | Status>("all");
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<Inquiry | null>(null);
  const [lastUpdated, setLastUpdated] = React.useState<Date | null>(null);
  const [staticNotice, setStaticNotice] = React.useState(false);

  async function load() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter !== "all") params.set("status", filter);
      if (search.trim()) params.set("q", search.trim());
      const res = await fetch(`/api/contact?${params.toString()}`, {
        headers: { "x-admin-key": ADMIN_KEY },
      });
      if (!res.ok) throw new Error("no-api");
      const data = await res.json();
      if (data.ok) {
        setInquiries(data.data as Inquiry[]);
        setStats(data.stats as Stats);
        setLastUpdated(new Date());
      }
    } catch {
      // Static deployment (GitHub Pages) has no API — show notice
      setStaticNotice(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, [filter]);

  // debounce search
  React.useEffect(() => {
    const id = setTimeout(load, 350);
    return () => clearTimeout(id);
  }, [search]);

  async function updateStatus(id: string, status: Status) {
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-key": ADMIN_KEY },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.ok) {
        setInquiries((prev) =>
          prev.map((i) => (i.id === id ? { ...i, status } : i))
        );
        setStats((prev) => {
          const old = prev;
          const next = { ...old };
          const item = inquiries.find((i) => i.id === id);
          if (item) {
            // decrement old status
            if (item.status === "new") next.new = Math.max(0, old.new - 1);
            if (item.status === "contacted") next.contacted = Math.max(0, old.contacted - 1);
            if (item.status === "closed") next.closed = Math.max(0, old.closed - 1);
            // increment new status
            if (status === "new") next.new += 1;
            if (status === "contacted") next.contacted += 1;
            if (status === "closed") next.closed += 1;
          }
          return next;
        });
        if (selected?.id === id) setSelected((s) => (s ? { ...s, status } : s));
        toast("✓", "ok");
      }
    } catch {
      toast(t("err.generic"), "err");
    }
  }

  async function remove(id: string) {
    if (!window.confirm(t("admin.deleteConfirm"))) return;
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
        headers: { "x-admin-key": ADMIN_KEY },
      });
      const data = await res.json();
      if (data.ok) {
        setInquiries((prev) => prev.filter((i) => i.id !== id));
        setStats((prev) => {
          const item = inquiries.find((i) => i.id === id);
          const next = { ...prev, total: prev.total - 1 };
          if (item) {
            if (item.status === "new") next.new = Math.max(0, prev.new - 1);
            if (item.status === "contacted") next.contacted = Math.max(0, prev.contacted - 1);
            if (item.status === "closed") next.closed = Math.max(0, prev.closed - 1);
          }
          return next;
        });
        if (selected?.id === id) setSelected(null);
      }
    } catch {
      toast(t("err.generic"), "err");
    }
  }

  function exportCsv() {
    const rows = [
      [
        "id",
        "name",
        "company",
        "email",
        "phone",
        "country",
        "product",
        "substrate",
        "environment",
        "quantity",
        "message",
        "status",
        "createdAt",
      ],
      ...inquiries.map((i) => [
        i.id,
        i.name,
        i.company ?? "",
        i.email,
        i.phone ?? "",
        i.country ?? "",
        i.product ?? "",
        i.substrate ?? "",
        i.environment ?? "",
        i.quantity ?? "",
        i.message.replace(/\n/g, " "),
        i.status,
        i.createdAt,
      ]),
    ];
    const csv = rows
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hong-nguyen-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // tiny inline toasty
  const [toastMsg, setToastMsg] = React.useState<{ m: string; k: "ok" | "err" } | null>(null);
  function toast(m: string, k: "ok" | "err") {
    setToastMsg({ m, k });
    setTimeout(() => setToastMsg(null), 1800);
  }

  const statCards: { key: "total" | "new" | "contacted" | "closed"; color: string }[] = [
    { key: "total", color: "text-foreground" },
    { key: "new", color: "text-brand" },
    { key: "contacted", color: "text-sky-300" },
    { key: "closed", color: "text-muted-foreground" },
  ];

  return (
    <section className="relative min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("home")}
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" /> {t("admin.backToSite")}
            </button>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-md bg-brand text-brand-foreground font-mono font-bold text-sm">
                HN
              </span>
              <span className="text-[14px] font-bold text-foreground">{t("admin.title")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={load}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <RefreshCw className={cn("size-3.5", loading && "animate-spin")} /> {t("admin.refresh")}
            </button>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
            >
              <LogOut className="size-3.5" /> {t("admin.logout")}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-brand tracking-widest">[ ADM ]</span>
          <span className="h-px w-8 bg-brand/50" />
          <span className="eyebrow text-brand text-[11px]">{t("admin.eyebrow")}</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t("admin.title")}
        </h1>

        {staticNotice && (
          <div className="mt-6 rounded-xl border border-brand/30 bg-brand-muted p-5">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <p className="text-[14px] font-semibold text-foreground">
                  {loc({ en: "Inquiry management is disabled on this static deployment", zh: "当前静态部署不支持询盘管理", vi: "Quản lý yêu cầu không khả dụng trên triển khai tĩnh" })}
                </p>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  {loc({
                    en: "Inquiries are sent directly to your email and WhatsApp. To enable the admin panel, deploy to a server platform (Vercel / Netlify).",
                    zh: "询盘会直接发送到您的邮箱和 WhatsApp。如需启用后台管理,请部署到支持服务端的平台(Vercel / Netlify)。",
                    vi: "Yêu cầu được gửi trực tiếp đến email và WhatsApp. Để bật bảng quản trị, hãy triển khai lên nền tảng máy chủ (Vercel / Netlify).",
                  })}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statCards.map((s) => (
            <div key={s.key} className="rounded-xl border border-border bg-card p-5">
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
                {t(`admin.stat${s.key.charAt(0).toUpperCase()}${s.key.slice(1)}`).toUpperCase()}
              </div>
              <div className={cn("mt-2 text-3xl font-bold tracking-tight", s.color)}>
                {stats[s.key]}
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {(["all", "new", "contacted", "closed"] as const).map((f) => {
              const label =
                f === "all" ? t("admin.filterAll") : t(`admin.stat${f.charAt(0).toUpperCase()}${f.slice(1)}`);
              const count = f === "all" ? stats.total : stats[f];
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                    filter === f
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[10px] font-mono",
                      filter === f ? "bg-brand-foreground/20" : "bg-border"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("admin.searchPlaceholder")}
                className="h-9 w-full rounded-md border border-border bg-card pl-9 pr-3 text-[13px] text-foreground placeholder:text-muted-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 sm:w-72"
              />
            </div>
            <button
              onClick={exportCsv}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-[12px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <Download className="size-3.5" /> {t("admin.export")}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-[13px]">
              <thead className="border-b border-border bg-background/50">
                <tr className="text-muted-foreground">
                  <th className="px-4 py-3 font-mono text-[10px] tracking-widest">{t("admin.colInquiry")}</th>
                  <th className="px-4 py-3 font-mono text-[10px] tracking-widest">{t("admin.colContact")}</th>
                  <th className="px-4 py-3 font-mono text-[10px] tracking-widest">{t("admin.colProduct")}</th>
                  <th className="px-4 py-3 font-mono text-[10px] tracking-widest">{t("admin.colStatus")}</th>
                  <th className="px-4 py-3 font-mono text-[10px] tracking-widest">{t("admin.colDate")}</th>
                  <th className="px-4 py-3 text-right font-mono text-[10px] tracking-widest">{t("admin.colActions")}</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-16 text-center text-muted-foreground">
                      <Loader2 className="mx-auto size-6 animate-spin text-brand" />
                      <p className="mt-3 text-[13px]">{t("admin.loading")}</p>
                    </td>
                  </tr>
                ) : inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-16 text-center text-muted-foreground">
                      {search || filter !== "all"
                        ? t("admin.noResults")
                        : t("admin.empty")}
                    </td>
                  </tr>
                ) : (
                  inquiries.map((i) => (
                    <tr
                      key={i.id}
                      className="border-b border-border/60 transition-colors last:border-0 hover:bg-background/40"
                    >
                      <td className="px-4 py-3 align-top">
                        <div className="font-semibold text-foreground">{i.name}</div>
                        {i.company && (
                          <div className="mt-0.5 flex items-center gap-1 text-[12px] text-muted-foreground">
                            <Building2 className="size-3" /> {i.company}
                          </div>
                        )}
                        <div className="mt-1.5 max-w-xs truncate text-[12px] text-muted-foreground">
                          {i.message}
                        </div>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div className="flex items-center gap-1.5 text-[12px] text-foreground">
                          <Mail className="size-3 text-brand" /> {i.email}
                        </div>
                        {i.phone && (
                          <div className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                            <Phone className="size-3" /> {i.phone}
                          </div>
                        )}
                        {i.country && (
                          <div className="mt-1 flex items-center gap-1.5 text-[12px] text-muted-foreground">
                            <Globe className="size-3" /> {i.country}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top">
                        {i.product ? (
                          <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-foreground">
                            {i.product}
                          </span>
                        ) : (
                          <span className="text-[12px] text-muted-foreground">—</span>
                        )}
                        {(i.substrate || i.quantity) && (
                          <div className="mt-1 text-[11px] text-muted-foreground">
                            {i.substrate && <div>{i.substrate}</div>}
                            {i.quantity && <div>{i.quantity} kg</div>}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top">
                        <StatusBadge status={i.status} t={t} />
                      </td>
                      <td className="px-4 py-3 align-top font-mono text-[11px] text-muted-foreground">
                        {fmtDate(i.createdAt, locale)}
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => setSelected(i)}
                            title={t("admin.view")}
                            className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                          >
                            <Eye className="size-4" />
                          </button>
                          <button
                            onClick={() => remove(i.id)}
                            title={t("admin.delete")}
                            className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* footer note */}
        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-[11px] text-muted-foreground sm:flex-row sm:items-center">
          <p className="flex items-center gap-1.5">
            <ShieldAlert className="size-3.5 text-brand/70" /> {t("admin.note")}
          </p>
          {lastUpdated && (
            <p className="font-mono">
              {t("admin.lastUpdated")}: {fmtDate(lastUpdated.toISOString(), locale)}
            </p>
          )}
        </div>
      </div>

      {/* Detail dialog */}
      {selected && (
        <DetailDialog
          inquiry={selected}
          onClose={() => setSelected(null)}
          onUpdate={updateStatus}
          onDelete={remove}
          t={t}
          locale={locale}
        />
      )}

      {/* toast */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md border border-border dark bg-ink px-4 py-2 text-[13px] text-foreground shadow-xl">
          {toastMsg.k === "ok" ? (
            <CheckCircle2 className="inline size-4 text-brand" />
          ) : (
            <ShieldAlert className="inline size-4 text-destructive" />
          )}{" "}
          {toastMsg.m}
        </div>
      )}
    </section>
  );
}

function StatusBadge({ status, t }: { status: string; t: (k: string) => string }) {
  const map: Record<string, { cls: string; label: string }> = {
    new: { cls: "border-brand/40 bg-brand-muted text-brand", label: t("admin.statNew") },
    contacted: { cls: "border-sky-400/40 bg-sky-400/10 text-sky-300", label: t("admin.statContacted") },
    closed: { cls: "border-border bg-muted text-muted-foreground", label: t("admin.statClosed") },
  };
  const s = map[status] ?? map.new;
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium", s.cls)}>
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {s.label}
    </span>
  );
}

function DetailDialog({
  inquiry,
  onClose,
  onUpdate,
  onDelete,
  t,
  locale,
}: {
  inquiry: Inquiry;
  onClose: () => void;
  onUpdate: (id: string, s: Status) => void;
  onDelete: (id: string) => void;
  t: (k: string) => string;
  locale: Locale;
}) {
  const fields: { label: string; value: string | null; icon?: React.ElementType }[] = [
    { label: t("form.email"), value: inquiry.email, icon: Mail },
    { label: t("form.phone"), value: inquiry.phone, icon: Phone },
    { label: t("form.country"), value: inquiry.country, icon: Globe },
    { label: t("form.company"), value: inquiry.company, icon: Building2 },
    { label: t("form.product"), value: inquiry.product },
    { label: t("admin.fieldSubstrate"), value: inquiry.substrate },
    { label: t("admin.fieldEnvironment"), value: inquiry.environment },
    { label: t("admin.fieldQuantity"), value: inquiry.quantity ? `${inquiry.quantity} kg` : null },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto scroll-thin rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-card/95 p-6 backdrop-blur">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-brand tracking-widest">
                {inquiry.id.slice(-8).toUpperCase()}
              </span>
              <StatusBadge status={inquiry.status} t={t} />
            </div>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground">{inquiry.name}</h2>
            <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              {fmtDate(inquiry.createdAt, locale)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* body */}
        <div className="p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.label} className="rounded-lg border border-border bg-background p-3">
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {f.label.toUpperCase()}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[13px] text-foreground">
                  {f.icon && <f.icon className="size-3.5 text-brand" />}
                  {f.value || <span className="text-muted-foreground">—</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-border bg-background p-4">
            <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
              {t("admin.fieldMessage").toUpperCase()}
            </div>
            <p className="mt-2 whitespace-pre-wrap text-[14px] leading-relaxed text-foreground">
              {inquiry.message}
            </p>
          </div>

          {/* actions */}
          <div className="mt-6 flex flex-wrap gap-2">
            {inquiry.status !== "new" && (
              <BrandButton variant="outline" size="sm" onClick={() => onUpdate(inquiry.id, "new")}>
                {t("admin.reopen")}
              </BrandButton>
            )}
            {inquiry.status !== "contacted" && (
              <BrandButton variant="outline" size="sm" onClick={() => onUpdate(inquiry.id, "contacted")}>
                {t("admin.markContacted")}
              </BrandButton>
            )}
            {inquiry.status !== "closed" && (
              <BrandButton variant="outline" size="sm" onClick={() => onUpdate(inquiry.id, "closed")}>
                {t("admin.markClosed")}
              </BrandButton>
            )}
            <a
              href={`mailto:${inquiry.email}`}
              className="inline-flex h-8 items-center gap-1.5 rounded-md bg-brand px-3 text-[13px] font-semibold text-brand-foreground"
            >
              <Mail className="size-3.5" /> {t("form.email")} <ChevronRight className="size-3.5" />
            </a>
            <button
              onClick={() => onDelete(inquiry.id)}
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-destructive/40 px-3 text-[13px] font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              <Trash2 className="size-3.5" /> {t("admin.delete")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
