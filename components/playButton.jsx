'use client'

import { useRouter } from "next/navigation"
import { BsFillPlayFill } from "react-icons/bs";

const PlayButton = ({ movieId }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`/watch/${movieId}`)} className="flex items-center justify-center gap-1 bg-white hover:bg-neutral-300 cursor-pointer transition font-semibold rounded-md px-2 md:px-4 py-1 md:py-2 text-xs lg:text-lg text-black" >
      <BsFillPlayFill size={25} />
      <p>Play</p>
    </button>
  )
}

export default PlayButton