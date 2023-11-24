'use client'

import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const AccountMenu = ({visible}) => {

  const { data } = useCurrentUser()

  if (!visible) {
    return null
  };

  return (
    <section className="absolute top-10 right-0 bg-black w-56 border-2 border-gray-800 flex flex-col rounded-xl overflow-hidden">
      <div className='p-4 px-6 flex items-center  gap-4 hover:bg-gray-700'>
        <span className='relative h-8 w-8'>
          <Image src="/images/default-blue.png" alt='Avatar' fill className='rounded-full'/>
        </span>
        <h3>{data?.name}</h3>
      </div>
      <hr className='h-px  bg-gray-600 border-0' />
      <div onClick={() => signOut()} className='p-4 text-center text-white hover:bg-gray-700'>
        <p>Sign out</p>
      </div>
    </section>
  )
}

export default AccountMenu