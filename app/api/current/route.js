import serverAuth from "@/app/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { currentUser } = await serverAuth();

    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
