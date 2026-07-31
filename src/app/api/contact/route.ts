import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

// NOTE: On static export (GitHub Pages) this route is inert.
// Inquiries are handled client-side via mailto: + WhatsApp (see contact-page.tsx).
// On a server deployment (Vercel/Netlify), replace with real db logic.

export async function POST() {
  return NextResponse.json(
    { ok: false, error: "Static deployment — please use the contact form (email/WhatsApp)." },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    data: [],
    stats: { total: 0, new: 0, contacted: 0, closed: 0 },
  });
}
