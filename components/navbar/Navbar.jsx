'use client'

import Image from "next/image"
import NavbarItem from "./NavbarItem"
import { BsBell, BsChevronDown, BsChevronUp, BsSearch } from "react-icons/bs"
import MobileMenu from "./MobileMenu"
import { useCallback, useEffect, useState } from "react"
import AccountMenu from "./AccountMenu"

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const TOP_OFFSET = 66

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
    setShowAccountMenu(false);
  }, []);

  const toggleAccountMenu =  useCallback(() => {
    setShowAccountMenu((current) => !current);
    setShowMobileMenu(false)
  }, []);


  return (
    <nav className="w-full fixed z-40">
      <section className={`flex items-center md:justify-evenly gap-10 py-6 p-8 md:px-16 transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <span className="h-4 lg:h-7 flex items-center justify-center mr-auto">
          <Image src="/images/logo.png" alt="Logo" height={16} width={100} />
        </span>

        <div className="hidden lg:flex items-center gap-7">
          <NavbarItem label="Home" href="/" />
          <NavbarItem label="Series" href="/series" />
          <NavbarItem label="Films" href="/films" />
          <NavbarItem label="New & Popular" href="/new-popular" />
          <NavbarItem label="My list" href="/my-list" />
          <NavbarItem label="Browse by languages" href="/browse-by-languages" />
        </div>

        <div onClick={toggleMobileMenu}  className="relative lg:hidden flex items-center justify-center gap-3 cursor-pointer text-white">
          <p className="text-xl">Browse</p>
          <BsChevronDown className={`transition text-white ${showMobileMenu ? 'rotate-180' : 'rotate-0'} `} />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex items-center gap-5">
          <BsSearch className="text-gray-200 hover:text-gray-300 cursor-pointer h-5 w-5"/>
          <BsBell  className="text-gray-200 hover:text-gray-300 cursor-pointer h-5 w-5"/>
        </div>

        <div onClick={toggleAccountMenu}  className="flex items-center gap-2 cursor-pointer relative text-white">
          <AccountMenu visible={showAccountMenu} />
          <span className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden relative">
            <Image src="/images/default-blue.png" alt="Avatar" fill/>
          </span>
          <BsChevronDown className={`transition text-white ${showAccountMenu ? 'rotate-180' : 'rotate-0'} `} />
        </div>
      </section>
    </nav>
  )
}

export default Navbar