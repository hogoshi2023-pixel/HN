import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdmin } from "@/app/api/contact/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_STATUS = ["new", "contacted", "closed"];

export async function PATCH(req: NextRequest) {
  try {
    if (!isAdmin(req)) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized." },
        { status: 401 }
      );
    }
    const id = req.nextUrl.pathname.split("/").pop() as string;
    const body = await req.json();
    const status = String(body?.status ?? "").trim();

    if (!VALID_STATUS.includes(status)) {
      return NextResponse.json(
        { ok: false, error: `Invalid status. Allowed: ${VALID_STATUS.join(", ")}` },
        { status: 400 }
      );
    }

    const updated = await db.contactInquiry.update({
      where: { id },
      data: { status },
      select: { id: true, status: true },
    });

    return NextResponse.json({ ok: true, data: updated });
  } catch (err) {
    console.error("[api/contact PATCH] error", err);
    return NextResponse.json(
      { ok: false, error: "Update failed." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!isAdmin(req)) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized." },
        { status: 401 }
      );
    }
    const id = req.nextUrl.pathname.split("/").pop() as string;
    await db.contactInquiry.delete({ where: { id } });
    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error("[api/contact DELETE] error", err);
    return NextResponse.json(
      { ok: false, error: "Delete failed." },
      { status: 500 }
    );
  }
}
