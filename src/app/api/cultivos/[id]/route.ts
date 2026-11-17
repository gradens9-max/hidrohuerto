import { NextResponse } from "next/server";
import { cultivos } from "@/data/cultivos";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cultivo = cultivos.find((c) => c.id === id);

  if (!cultivo) {
    return NextResponse.json(
      { error: "Cultivo no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(cultivo);
}