import React, { useEffect } from 'react'
import Phone from './Phone'
import Reviews from './Reviews'

const Offers = () => {
  useEffect(() => {
    const offset = 64;
    const height = document.querySelector('#calculateHeight').offsetHeight + offset;
    document.querySelector('#phoneOverlay').style.height = height + 'px';
  }, [])
  
  return (
    <div>
      <div className='sm:grid sm:grid-cols-2'>

        {/* Height of the phone overlay is decided by this section's #grow div */}
        <div className='snap-start snap-always bg-[#DDE9FF] h-screen sm:h-auto flex justify-center'>
          <div className='max-w-xl p-6 px-0 sm:py-28 space-y-16 flex flex-col'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <p className='font-josefin-sans text-2xl sm:text-4xl font-bold text-blue-600 px-4'>Share your pet&apos;s precious moments!!</p>
              <p className='sm:text-xl font-semibold text-blue-500 px-4'>Post videos and photos of your pet. Share the cute moments of your pet and celebrate them around the globe.</p>
            </div>
            <div id='calculateHeight' className='grow flex items-center justify-center'>
              <img className='bg-[#B7D0FF]' src='/licking.gif'></img>
            </div>
          </div>
        </div>

        <div className='snap-start snap-always bg-[#D6FEFF] h-screen sm:h-auto flex justify-center'>
          <div className='max-w-xl p-6 sm:py-28 space-y-16 flex flex-col'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <p className='font-josefin-sans tracking-tight leading-tight text-2xl sm:text-4xl font-bold text-teal-600'>Understand your dog&apos;s emotion!</p>
              <p className='sm:text-xl font-semibold text-teal-500'>Wanna know when your pet&apos;s bark means they  love you? Recognise  your pets emotions and understand them.</p>
            </div>
            <div className='grow'>
              <img src='/emotions.gif'></img>
            </div>
          </div>
        </div>

        <div className='snap-start snap-always bg-[#fff] h-screen sm:h-auto flex justify-center'>
          <div className='max-w-xl p-6 px-0 sm:py-28 space-y-16 flex flex-col'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <p className='font-josefin-sans tracking-tight leading-tight text-2xl sm:text-4xl font-bold text-purple-600 px-4'>Join community of pet lovers!</p>
              <p className='sm:text-xl font-semibold text-purple-500 px-4'>With one of the largest Pet community, we have answers to all your problems. These people are same as you, animal lovers</p>
            </div>
            <div className='grow'>
              <img src='/community.gif'></img>
            </div>
          </div>
        </div>

        <div className='snap-start snap-always bg-[#FFF5C5] h-screen sm:h-auto flex justify-center'>
          <div className='max-w-xl p-6 sm:py-28 space-y-16 flex flex-col'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <p className='font-josefin-sans tracking-tight leading-tight text-2xl sm:text-4xl font-bold text-purple-600'>Manage multiple pets with multiple caretaker&apos;s !</p>
              <p className='sm:text-xl font-semibold text-purple-500'>Manage multiple pets along with multiple family members.</p>
            </div>
            <div className='grow'>
              <img src='/desktop_management.gif'></img>
            </div>
          </div>
        </div>

        <div className='snap-start snap-always bg-[#E6FDFF] h-screen sm:h-auto flex justify-center'>
          <div className='max-w-xl p-6 sm:py-28 space-y-16 flex flex-col'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <p className='font-josefin-sans tracking-tight leading-tight text-2xl sm:text-4xl font-bold text-teal-600'>Earn Gift Cards</p>
              <p className='sm:text-xl font-semibold text-teal-500'>Participate in various weekly challenges and win gift cards. </p>
            </div>
            <div className='grow'>
              <img src='/gift_card.gif'></img>
            </div>
          </div>
        </div>

        {/* Phone overlay */}
        <div id='phoneOverlay' className='flex justify-center sticky w-full bottom-0 sm:hidden overflow-y-hidden'>
          <Phone />
        </div>

        {/* Reviews */}
        <div className='snap-start snap-always'>
          <Reviews />
        </div>

      </div>
    </div>
  )
}

export default Offers