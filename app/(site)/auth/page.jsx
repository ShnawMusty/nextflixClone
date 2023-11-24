'use client'
import axios from 'axios';
import Input from '../../../components/Input';
import Image from 'next/image';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { signIn, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { redirect, useRouter } from 'next/navigation';

const Auth = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const router = useRouter();
  const { data: session } = useSession();

  useMemo(() => {
    if (session) {
      redirect('/profiles')
    }
  }, [session]);
  
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'Register' : 'login')
  }, []);

  const login = useCallback(async () => {
    try {
        await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      router.push('/profiles')

    } catch (error) {
      console.log(error.message)
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email, name, password
      })
      await login();
    } catch (error) {
      console.log(error.message);
    }
  }, [email, password, name, login]);


  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover ">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <Image src="/images/logo.png" alt='logo' width={200} height={200} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:h-2/5 lg:max-w-md rounded-md w-full">
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sig in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'Register' && (
                <Input label="Username" type="text" value={name} onChange={(e) => setName(e.target.value)}/> 
              )}

              <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 

              <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
            </div>
            <button onClick={ variant === 'login' ? login : register } className='w-full py-3 mt-10 bg-red-500 text-white hover:bg-red-700 rounded-md transition'>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>

            <div className='flex items-center justify-center gap-4 mt-8 '>
              <button onClick={ () => signIn('google', {callbackUrl: '/profiles'}) } className='flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-80 transition'>
              <FcGoogle size={30}/>
              </button>

              <button onClick={() => signIn('github', { callbackUrl: '/profiles'})} className='flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-80 transition'>
              <FaGithub size={30}/>
              </button>
            </div>

              <p className='text-neutral-500 mt-10 text-center'>
                {variant === 'login' ? 'First time using Netflix?' : 'Already Registered?' }
                <span onClick={toggleVariant} className='text-white hover:underline ml-2 cursor-pointer '>
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </p>
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth