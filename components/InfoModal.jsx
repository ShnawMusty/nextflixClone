'use client';

import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./playButton";
import FavoriteButton from "./FavoriteButton";

const InfoModal = () => {

  const { movieId, closeModal, isOpen } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      closeModal(movieId)
    }, 300)
  }, [closeModal, movieId]);

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center transition duration-300 bg-opacity-80 bg-black overflow-x-hidden overflow-y-auto">
      <div className="relative w-auto mx-auto max-w-3xl overflow-hidden rounded-md">
        <section className={`${isOpen ? 'scale-100' : 'scale-0'} flex-auto transform transition duration-300 relative bg-zinc-900 drop-shadow-md`}>

          <div className="relative h-96">
            <video poster={data?.thumbnailUrl} src={data?.videoUrl} autoPlay muted loop className="w-full h-full object-cover brightness-[60%]" />

            <button onClick={handleClose} className="absolute top-3 right-3 flex items-center justify-center h-10 w-10 rounded-full bg-black hover:bg-neutral-300 bg-opacity-70 text-white">
            <AiOutlineClose size={20} />
            </button>

            <div className="absolute bottom-[10%] left-10 flex flex-col justify-center gap-4">
              <p className="text-white text-3xl md:text-4xl lg:text-5xl h-full">{data?.title}</p>
              <div className="flex items-center gap-4">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>

            </div>

          </div>

          <div className="px-5 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{data?.duration}</p>
            <p className="text-white text-lg">{data?.genre}</p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default InfoModal