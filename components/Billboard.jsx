'use client'

import useBillboard from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from "./playButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {

  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  return (
    <section className="relative h-[56.25vh]">
      <video 
      src={data?.videoUrl}
      poster={data?.thumbnailUrl}
      muted
      autoPlay
      loop
      className="w-full h-[56.25vh] object-cover brightness-[50%]"
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 text-white">
        <h2 className="h-full w-[50%] text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-xl" >
          {data?.title}
        </h2>
        <p className="w-[90%] md:w-[80%] lg:w-[50%] text-[16px] md:text-lg mt-3 md:mt-6 drop-shadow-xl" >
          {data?.description}
        </p>

        <div className="flex items-end gap-4">
          <PlayButton movieId={data?.id} />
          <div onClick={() => openModal(data?.id)} className="flex items-center gap-1 w-fit text-white bg-white bg-opacity-30 hover:bg-opacity-20 rounded-md mt-3 md:mt-4 px-2 md:px-4 py-1 md:py-2 text-md lg:text-lg font-semibold transition">
            <AiOutlineInfoCircle />
            <button>More Info</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Billboard