'use client'

import useCurrentUser from "@/hooks/useCurrentUser"
import useFavorites from "@/hooks/useFavorites"
import axios from "axios"
import { useCallback, useMemo } from "react"
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai"

const FavoriteButton = ({movieId}) => {

  const { mutate: mutateFavorite } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const favoriteList = currentUser?.favoriteIds || [];

    return favoriteList.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorite = useCallback(async() => {
    let response;

    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId }});

    } else {
      response = await axios.post('/api/favorite', {movieId});
    };

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds
    });

    mutateFavorite();
  }, [currentUser, isFavorite, movieId, mutate, mutateFavorite])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <button onClick={toggleFavorite} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full border-2 border-white flex items-center justify-center transition hover:bg-neutral-300 text-white">
      <Icon size={14} />
    </button>
  )
}

export default FavoriteButton