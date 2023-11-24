'use client'

import useMovieList from '@/hooks/useMovieList';
import MovieCard from './MovieCard'
import useFavorites from '@/hooks/useFavorites';

const MovieList = () => {
  const { data: movies = []} = useMovieList();

  const { data: favorites = [] } = useFavorites();

  return (
    <>
    <section className='mt-4 px-4 md:px-12 space-y-4'>
      <h2 className='text-md md:text-xl lg:text-2xl font-semibold text-white' >Trending Now</h2>
      <div className='grid grid-cols-4 gap-4'>
      <MovieCard data={movies} />
      </div>
    </section>

    <section className='mt-4 px-4 md:px-12 space-y-4'>
      <h2 className='text-md md:text-xl lg:text-2xl font-semibold text-white' >My List</h2>
      <div className='grid grid-cols-4 gap-4'>
      <MovieCard data={favorites} />
      </div>
    </section>
    </>
  )
}

export default MovieList