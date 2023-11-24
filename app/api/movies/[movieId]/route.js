import client from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  try {
    await serverAuth();

    const {movieId } = params;

    if (typeof movieId !== 'string') {
      throw new Error('Invalid ID')
    };

    if (!movieId) {
      throw new Error('Invalid ID')
    }

    const movie = await client.movie.findUnique({
      where: {
        id: movieId
      }
    });

    return NextResponse.json(movie);

  } catch (error) {
    console.log(error);
    return NextResponse.json("MOVIE_ERROR", { message: error.message });
  }
}