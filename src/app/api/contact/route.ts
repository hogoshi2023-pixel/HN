import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

// NOTE: On the GitHub Pages static export this route is inert.
// Inquiries are handled client-side via WhatsApp / mailto (see contact-page.tsx).
// The full server implementation (Prisma + SQLite, used on Netlify/Vercel) is
// preserved in netlify-api-backup/contact-route.ts.server — copy it back here
// when deploying to a server platform.

export async function POST() {
  return NextResponse.json(
    { ok: false, error: "Static deployment — please use WhatsApp or email to reach us." },
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
