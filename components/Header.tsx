"use client"

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { MdMenu } from 'react-icons/md'

export default function Header() {
  const [headerActive, setHeaderActive]= useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(()=>{
    
    const handleScroll=()=>{
      //detect scroll event
      setHeaderActive(window.scrollY>50)
    }
      //add scroll event
      window.addEventListener('scroll', handleScroll)
      //clear scroll event
      return()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    
  },[])
  

  return (
    <header className={`${headerActive? 'h-[100px]':'h-[124px]'} fixed max-w-[1920px] top-0 h-[100px] w-full bg-primary-200  z-50 transition-all`}>
    <div className='container mx-auto h-full flex items-center justify-between'>
      {/* logo */}
      <Link href=''>
      <Image src={'/assets/img/dfa.png'} width={117} height={55} alt=''/>
      </Link>
      {/* mobile navigation */}
      <MobileNav containerStyles={`${headerActive? 'top-[90px]':'top-[124px]'} ${toggleNav?'max-h-max pt-8 pb-10 border-t border-white/10':'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 transition-all text-base uppercase font-medium text-white xl:hidden md:hidden`}/>
    {/* Desktop nav-hidden on small screens */}
      <Navbar containerStyles='flex gap-4 md:gap-2 text-white text-base uppercase font-medium transition-all hidden xl:flex md:flex' />
      {/* toggle menu button  */}
      <div className='flex items-center gap-4 md:gap-2'>
        {/* login and register buttons  */}
        <div className='text-white flex items-center gap-4 '>
          <button className='hover:text-accent transition-all text-base uppercase font-medium'>Login</button>
          <button className='hover:text-accent transition-all text-base uppercase font-medium'>Register</button>
        </div>
        <button onClick={()=>setToggleNav(!toggleNav)} className='text-white md:hidden xl:hidden'>
          <MdMenu className='text-4xl'/>
        </button>
      </div>
    </div>
    </header>
  )
}
