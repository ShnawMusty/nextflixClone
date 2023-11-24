import client from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await serverAuth();

    const movieCount = await client.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovies = await client.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    return NextResponse.json(randomMovies[0]);

  } catch (error) {
    console.log(error);
    return NextResponse.error()
  }
}