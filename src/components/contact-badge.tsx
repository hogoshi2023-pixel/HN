/** Solid circular badge for contact-channel icons (SPA footer, contact page,
 *  static landing CTA). WhatsApp uses its official green + logo glyph so it is
 *  instantly recognizable; other channels use the brand orange. No hooks —
 *  safe to import from both client and server components. */

const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";
const MAIL_PATH = "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7";
const PIN_PATH = "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z";
const CHAT_PATH = "M7.9 20A9 9 0 1 0 4 16.1L2 22Z";
const WHATSAPP_FILL =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a11.645 11.645 0 0 1-8.213-3.224c-.947-.946-1.69-2.07-2.19-3.318-.504-1.255-.762-2.583-.759-3.928.004-3.396 1.329-6.59 3.745-8.986a12.42 12.42 0 0 1 8.873-3.66c3.396 0 6.59 1.329 8.986 3.745a12.42 12.42 0 0 1 3.66 8.873c0 3.396-1.329 6.59-3.745 8.986a12.42 12.42 0 0 1-8.873 3.66Z";

export type ContactKind = "phone" | "mail" | "whatsapp" | "pin" | "wechat";

export function ContactBadge({ kind }: { kind: ContactKind }) {
  const bg =
    kind === "whatsapp"
      ? "#25D366"
      : kind === "pin" || kind === "wechat"
        ? "#5b7490"
        : "var(--brand)";
  return (
    <span
      aria-hidden="true"
      style={{
        background: bg,
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        flex: "none",
      }}
    >
      {kind === "whatsapp" ? (
        <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="#fff" aria-hidden="true">
          <path d={WHATSAPP_FILL} />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          style={{ width: 21, height: 21 }}
          fill="none"
          stroke="#fff"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {kind === "phone" && <path d={PHONE_PATH} />}
          {kind === "mail" && (
            <>
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d={MAIL_PATH} />
            </>
          )}
          {kind === "pin" && (
            <>
              <path d={PIN_PATH} />
              <circle cx="12" cy="10" r="3" />
            </>
          )}
          {kind === "wechat" && <path d={CHAT_PATH} />}
        </svg>
      )}
    </span>
  );
}
