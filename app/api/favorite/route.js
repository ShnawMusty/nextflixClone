import client from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/serverAuth";
import { without } from "lodash";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { currentUser } = await serverAuth();

    const body = await req.json();
    const { movieId } = body

    const existingMovie = await client.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!existingMovie) {
      throw new Error('Invalid ID')
    };

    const user = await client.user.update({
      where: {
        email: currentUser.email
      },
      data: {
        favoriteIds: {
          push: movieId
        }
      }
    })

    return NextResponse.json(user);

  } catch (error) {

    console.log(error);
    return NextResponse.json('FAVORITE_POST_ERROR', {error: error.message})
  }
}

export async function DELETE(req) {

  try {

    const { currentUser } = await serverAuth();
    const body = await req.json();
    const { movieId } = body;

    const existingMovie = await client.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updatedUser = await client.user.update({
      where: {
        email: currentUser.email
      },
      data: {
        favoriteIds: updatedFavoriteIds
      }
    })

    return NextResponse.json(updatedUser);

  } catch (error) {
    console.log(error);
    return NextResponse.json('FAVORITE_DELETE_ERROR', {error: error.message})
  }
}