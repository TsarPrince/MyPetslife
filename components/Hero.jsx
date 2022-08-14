import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='absolute flex items-center justify-center space-x-4 h-screen w-full pl-56 pr-8 py-8'>
        <img className='h-5/6' src='/home.gif' alt='home gif'></img>
        <img className='h-5/6' src='/home.gif' alt='home gif'></img>
      </div>
      <div className='hero-bg-gradient h-screen p-16 sm:pt-32 sm:px-48 relative'>
        <div className='flex flex-col text-white max-w-lg space-y-16'>
          <div className='flex items-center space-x-8 mt-12'>
            <img className='w-16 rounded-full shadow-lg' src='/logo.png'></img>
            <p className='text-4xl font-bold'>MyPetslife</p>
          </div>
          <div>
            <p className='text-4xl font-bold'>One stop solution for all your pet need!</p>
          </div>
          <div>
            <ul className='text-lg font-semibold'>
              <li><span className='text-rose-300 font-bold mr-2'>+</span> Share your pet&apos;s precious moments!!  </li>
              <li><span className='text-rose-300 font-bold mr-2'>+</span> Understand your dog&apos;s emotion! </li>
              <li><span className='text-rose-300 font-bold mr-2'>+</span> Connect with community   </li>
              <li><span className='text-rose-300 font-bold mr-2'>+</span> Manage multiple pets</li>
              <li><span className='text-rose-300 font-bold mr-2'>+</span> Earn Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero