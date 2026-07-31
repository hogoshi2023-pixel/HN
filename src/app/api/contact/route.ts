import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared admin secret (demo-level). In production use NextAuth + env vars. */
export const ADMIN_KEY = "HN_ADMIN_2026";

export function isAdmin(req: NextRequest): boolean {
  const key = req.headers.get("x-admin-key");
  return key === ADMIN_KEY;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { ok: false, error: "Please describe your project." },
        { status: 400 }
      );
    }

    const inquiry = await db.contactInquiry.create({
      data: {
        name,
        email,
        message,
        company: body?.company ? String(body.company).trim() : null,
        phone: body?.phone ? String(body.phone).trim() : null,
        country: body?.country ? String(body.country).trim() : null,
        product: body?.product ? String(body.product) : null,
        substrate: body?.substrate ? String(body.substrate).trim() : null,
        environment: body?.environment ? String(body.environment).trim() : null,
        quantity: body?.quantity ? String(body.quantity).trim() : null,
      },
    });

    return NextResponse.json({
      ok: true,
      id: inquiry.id,
      message:
        "Thanks — our coating engineers will respond within one business day.",
    });
  } catch (err) {
    console.error("[api/contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const admin = isAdmin(req);
    const url = new URL(req.url);
    const status = url.searchParams.get("status") || undefined; // new|contacted|closed
    const search = url.searchParams.get("q") || undefined;

    const limit = admin ? 200 : 20;

    const where: { status?: string; OR?: { OR: { contains: string }[] }[] } = {};
    if (status && status !== "all") where.status = status;
    if (search) {
      const s = search;
      where.OR = [
        { OR: [{ name: { contains: s } }] },
        { OR: [{ company: { contains: s } }] },
        { OR: [{ email: { contains: s } }] },
        { OR: [{ country: { contains: s } }] },
        { OR: [{ message: { contains: s } }] },
      ];
    }

    const inquiries = await db.contactInquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      select: admin
        ? {
            id: true,
            name: true,
            company: true,
            email: true,
            phone: true,
            country: true,
            product: true,
            substrate: true,
            environment: true,
            quantity: true,
            message: true,
            createdAt: true,
            status: true,
          }
        : {
            id: true,
            name: true,
            company: true,
            country: true,
            product: true,
            createdAt: true,
            status: true,
          },
    });

    // Summary stats (always available)
    const total = await db.contactInquiry.count();
    const newCount = await db.contactInquiry.count({ where: { status: "new" } });
    const contacted = await db.contactInquiry.count({
      where: { status: "contacted" },
    });
    const closed = await db.contactInquiry.count({
      where: { status: "closed" },
    });

    return NextResponse.json({
      ok: true,
      data: inquiries,
      stats: { total, new: newCount, contacted, closed },
    });
  } catch (err) {
    console.error("[api/contact GET] error", err);
    return NextResponse.json(
      { ok: false, error: "Unable to load inquiries." },
      { status: 500 }
    );
  }
}
