import client from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await serverAuth();

    const movies = await client.movie.findMany();

    return NextResponse.json(movies);
    
  } catch (error) {
    console.log(error);
    return NextResponse.json('MOVIES_ERROR', {message: error.message})
  }
}