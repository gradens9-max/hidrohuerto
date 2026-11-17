import { NextResponse } from "next/server";
import { sistemas } from "@/data/sistemas";

export async function GET() {
  return NextResponse.json(sistemas);
}