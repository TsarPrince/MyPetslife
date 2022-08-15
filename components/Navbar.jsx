import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed bottom-0 w-full z-50 bg-white shadow-[0_-5px_10px_0] shadow-[#40404018] flex justify-center items-center space-x-8 py-4 rounded-t-3xl'>
      <Link href='/'>
        <a><img className='h-12' src='/google_playstore.png'></img></a>
      </Link>
      <Link href='/'>
        <a><img className='h-12' src='/appstore.png'></img></a>
      </Link>
    </div>
  )
}

export default Navbar