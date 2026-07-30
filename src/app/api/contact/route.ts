import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export async function GET() {
  try {
    const recent = await db.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: {
        id: true,
        name: true,
        company: true,
        country: true,
        product: true,
        createdAt: true,
        status: true,
      },
    });
    return NextResponse.json({ ok: true, data: recent });
  } catch (err) {
    console.error("[api/contact GET] error", err);
    return NextResponse.json(
      { ok: false, error: "Unable to load inquiries." },
      { status: 500 }
    );
  }
}
