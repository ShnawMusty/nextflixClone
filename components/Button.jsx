'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const Button = () => {
  return (
    <button onClick={() => signOut()} className="h-10 w-full bg-white text-xl">Sign out</button>
  )
}

export default Button