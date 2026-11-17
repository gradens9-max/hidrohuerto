import { NextResponse } from "next/server";
import { cultivos } from "@/data/cultivos";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoria = searchParams.get("categoria");

  const resultado = categoria
    ? cultivos.filter((c) => c.categoria === categoria)
    : cultivos;

  return NextResponse.json(resultado);
}