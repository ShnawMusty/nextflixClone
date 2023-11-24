import client from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await client.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds
        }
      }
    });

    return NextResponse.json(favoriteMovies);
    
  } catch (error) {
    console.log(error);
    return NextResponse.json('FAVORITES_ERROR', {error: error.message})
  }
}