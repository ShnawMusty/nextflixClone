'use client'; 

import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from 'react-icons/bi';
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal";

const MovieCard = ({data}) => {
  const { openModal } = useInfoModal()
  const router = useRouter();

  if (data.length === 0) {
    return null;
  }

  return (
    <>
      {data.map((movie) => (
        <section key={movie.id} className="flex flex-col justify-center transition  hover:scale-110 hover:translate-x-3 hover:-translate-y-3 hover:z-10">
          <span className="relative h-[12vh] w-full  cursor-pointer">
            <Image src={movie.thumbnailUrl} alt="thumbnail" fill className="rounded-t-md object-cover"/>
          </span>
          <div className="flex flex-col items-start gap-1 p-2 pl-2 bg-black/20 rounded-b-md">
            <div className="flex items-center gap-2 w-full">

              <button onClick={() => router.push(`/watch/${movie.id}`)} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center bg-white hover:bg-neutral-300 cursor-pointer transition">
                <BsFillPlayFill size={30} />
              </button>

              <FavoriteButton movieId={movie.id} />

              <span onClick={() => openModal(movie?.id)} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white border-2 border-white hover:bg-neutral-300 cursor-pointer transition ml-auto">
              <BiChevronDown size={30} />
              </span>

            </div>

            <p className="text-green-400 font-medium flex flex-wrap">
              New
              <span className="text-white ml-[2px]">2023</span>
            </p>
            <p className="text-white text-[10px] lg:text-sm">{movie.duration}</p>
            <p className="text-white text-[10px] lg:text-sm">{movie.genre}</p>
          </div>
        </section>
        
        
      ))}

    </>
  )
}

export default MovieCard