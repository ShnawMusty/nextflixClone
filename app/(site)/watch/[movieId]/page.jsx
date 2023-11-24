'use client'

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";


const Page = ({params}) => {
  const { movieId } = params;
  const router = useRouter();
  const { data } = useMovie(movieId);

  return (
    <section className="h-screen w-screen bg-black">
      <nav className="fixed w-full flex items-center  gap-8 z-10 p-4">
        <button onClick={() => router.push('/')} className="text-white cursor-pointer rounded-full bg-black hover:bg-neutral-300">
          <AiOutlineArrowLeft size={40} />
        </button>
          <p className="text-white text-xl md:text-3xl font-bold">
            <span className="font-light mr-1">Watching:</span>
            {data?.title}
          </p>
      </nav>
      <video src={data?.videoUrl} controls autoPlay className="h-full w-full" />
    </section>
  )
}

export default Page