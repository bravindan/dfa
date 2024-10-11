import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white w-full z-50'>
    <div className='container mx-auto'>
      <Navbar containerStyles=' py-12 flex gap-4' />
    </div>
    </header>
  )
}
