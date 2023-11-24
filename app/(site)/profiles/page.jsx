'use client'

import useCurrentUser from "@/hooks/useCurrentUser";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";


const ProfilesPage = () => {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <section className="fixed inset-0 h-screen w-screen flex items-center justify-center">
        <p className="text-white text-2xl">Loading....</p>
      </section>
    )
  }
  
  if (!user) {
    redirect('/auth')
  }

  return (
    <main className="flex items-center justify-center h-full" >
      <section className="flex flex-col gap-10">
        <h1 className="text-3xl md:text-6xl text-white text-center" >Who is watching?</h1>
        <div className="flex items-center justify-center gap-8">

          <div onClick={() => router.push('/')} className="flex flex-col gap-4 items-center group">
            <span className="relative flex items-center justify-center w-44 h-44 rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
              <Image src="/images/default-blue.png" alt="Avatar" fill className="absolute object-cover"/>
            </span>
            <p className="text-2xl text-gray-400 text-center group-hover:text-white" >{user?.name}</p>
          </div>

        </div>
      </section>
    </main>
  )
};

export default ProfilesPage;
