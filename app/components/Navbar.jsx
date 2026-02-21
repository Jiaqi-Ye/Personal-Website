import React, { useRef, useEffect, useState } from 'react';
import './Navbar.css'
import Image from 'next/image';
import { assets } from '@/assets/assets'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-center z-50 ${isScroll ? "bg-white/50 backdrop-blur-md shadow-sm" : ""}`}>
      {/*<a href="">
        <Image src={assets.logo} className='w-20 alt="cursor-pointer mr-14" '/>
      </a>*/}
      <ul className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 lg:gap-8 px-12 py-3 ${isScroll ? "" : "bg-white rounded-full bg-white/50"} `}>
        <li>
          <Link href="/" onClick={closeMenu} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/research#research" onClick={closeMenu} className="nav-link">
            Research
          </Link>
        </li>
        <li>
          <Link href="/project#project" onClick={closeMenu} className="nav-link">
            Project
          </Link>
        </li>
        <li>
          <Link href="/#about" className="nav-link">About</Link>
        </li>
       <li>
  <Link href={pathname === '/' ? '/#news' : '/News'} className="nav-link">News</Link>
</li>
      </ul>

      <div className='ml-auto flex items-center gap-4 pl-[7.5rem]'>
  <button>
    <Image src={assets.moon_icon} alt="moon icon" width={24} height={24} />
  </button>

  <Link
    href="/#contact"
    className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
  >
    Contact
    <Image src={assets.arrow_icon} alt="arrow icon" className='w-3' />
  </Link>

  <button className='block md:hidden' onClick={openMenu}>
    <Image src={assets.menu_black} alt="menu icon" width={24} height={24} />
  </button>
</div>

      {/*-----------mobile menu-----------*/}

      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500'>

        <div className="flex justify-end" onClick={closeMenu}>
          <Image src={assets.close_black} alt="close icon" className="w-5 cursor-pointer" />
        </div>

        <li>
          <Link href="/" onClick={closeMenu} className='nav-link'>Home</Link>
        </li>
        <li>
          <Link href="/research#research" onClick={closeMenu} className='nav-link'>Research</Link>
        </li>
        <li>
          <Link href="/project#project" onClick={closeMenu} className='nav-link'>Project</Link>
        </li>
        <li>
          <Link href="/#about" onClick={closeMenu} className='nav-link'>About</Link>
        </li>
        <li>
          <Link href="/#news" onClick={closeMenu} className='nav-link'>News</Link>
        </li>
        <li>
          <Link href="/#contact" onClick={closeMenu} className='nav-link'>Contact</Link>
        </li>

      </ul>


    </nav>

  )
}

export default Navbar
