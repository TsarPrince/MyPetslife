import Link from 'next/link'
import React from 'react'

const Hero = () => {
  const onClick = () => {
    document.querySelector('#overlay').classList.toggle('hidden');
    document.querySelector('#hamburger-menu').classList.toggle('hidden');
  }
  return (
    <div>
      {/* Top Navbar - Phone */}
      <div className='sm:hidden bg-[#F7F3FF] flex justify-between items-center p-4'>
        <div className='flex items-center space-x-4'>
          <img className='w-12' src='/logo.svg'></img>
          <p className='text-xl font-bold text-slate-700'>MyPetslife</p>
        </div>
        <button id='hamburger-menu' className='p-2' onClick={onClick}>
          <img src='/hamburger.svg' alt='hamburger-menu'></img>
        </button>
      </div>

      {/* Background image */}
      <div className='sm:absolute bg-[#F7F3FF] flex items-center justify-center sm:space-x-4 sm:h-screen w-full p-8 xl:pl-56'>
        <img className='hidden lg:block sm:h-5/6' src='/home.gif' alt='home gif'></img>
        <img className='sm:h-5/6' src='/home.gif' alt='home gif'></img>
      </div>

      {/* Main section */}
      <div className='hero-bg-gradient sm:h-screen px-8 pb-8 sm:pt-32 sm:px-48 relative'>
        <div className='flex flex-col text-[#6E41E2] sm:text-white max-w-lg space-y-4 sm:space-y-16'>
          {/* Top Navbar - Desktop */}
          <div className='hidden sm:block'>
            <div className='flex items-center space-x-8 mt-12'>
              <img className='w-16 rounded-full shadow-lg' src='/logo.png'></img>
              <p className='text-4xl font-bold'>MyPetslife</p>
            </div>
          </div>
          <div>
            <p className='text-2xl sm:text-4xl font-bold'>One stop solution for all your pet need!</p>
          </div>
          <div>
            <ul className='sm:text-lg text-violet-500 sm:text-white font-semibold'>
              <li><span className='text-rose-400 font-bold mr-2'>+</span> Share your pet&apos;s precious moments!!</li>
              <li><span className='text-rose-400 font-bold mr-2'>+</span> Understand your dog&apos;s emotion!</li>
              <li><span className='text-rose-400 font-bold mr-2'>+</span> Connect with community</li>
              <li><span className='text-rose-400 font-bold mr-2'>+</span> Manage multiple pets</li>
              <li><span className='text-rose-400 font-bold mr-2'>+</span> Earn Gift Cards</li>
            </ul>
          </div>
        </div>

        {/* Extra spacing for y-overflow on mobile */}
        <div className='py-20 sm:hidden'></div>
      </div>

      {/* Hamburger menu overlay */}
      <div id='overlay' className='hidden transition-colors bg-black/80 absolute h-screen w-full top-0'>
        <div className='flex justify-between items-center p-4'>
          <div className='flex items-center space-x-4'>
            <img className='w-12' src='/logo.svg'></img>
            <p className='text-xl font-bold text-white'>MyPetslife</p>
          </div>
          <button className='p-2' onClick={onClick}>
            <img src='/close.svg' alt='close'></img>
          </button>
        </div>

        <div className='flex flex-col items-center justify-center -my-28 space-y-8 h-full text-white'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <p className='text-lg font-semibold'>Contact us at -</p>
            <Link href="mailto:Feedback@petslife.us"><a className='text-lg sm:text-xl font-semibold'>Feedback@petslife.us</a></Link>
          </div>
          <div className='flex space-x-4'>
            <Link href='https://www.instagram.com/mypetslife_pets/'>
              <a target='_blank' rel='noopener' className='text-white hover:text-white/75'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z" />
                </svg>
              </a>
            </Link>
            <Link href='https://www.facebook.com/mypetslife.petslife'>
              <a target='_blank' rel='noopener' className='text-white hover:text-white/75'>
                <svg width="15" height="24" viewBox="0 0 15 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6618 0.674329C14.6618 0.497576 14.5916 0.328063 14.4667 0.203079C14.3417 0.0780962 14.1722 0.00788117 13.9954 0.00788117H10.6632C8.98521 -0.0757035 7.34239 0.508239 6.09363 1.63212C4.84487 2.756 4.0917 4.32846 3.99869 6.00591V9.60473H0.666448C0.489695 9.60473 0.320181 9.67494 0.195198 9.79993C0.070215 9.92491 0 10.0944 0 10.2712V13.7367C0 13.9135 0.070215 14.083 0.195198 14.208C0.320181 14.3329 0.489695 14.4032 0.666448 14.4032H3.99869V23.3336C3.99869 23.5103 4.0689 23.6798 4.19388 23.8048C4.31887 23.9298 4.48838 24 4.66513 24H8.66382C8.84057 24 9.01009 23.9298 9.13507 23.8048C9.26005 23.6798 9.33027 23.5103 9.33027 23.3336V14.4032H12.8225C12.9707 14.4053 13.1153 14.3579 13.2336 14.2686C13.3519 14.1793 13.4371 14.0531 13.4756 13.91L14.4353 10.4445C14.4618 10.346 14.4653 10.2427 14.4457 10.1427C14.426 10.0426 14.3836 9.94839 14.3218 9.86727C14.26 9.78615 14.1804 9.7203 14.0892 9.67478C13.9979 9.62927 13.8974 9.6053 13.7955 9.60473H9.33027V6.00591C9.36342 5.67599 9.51836 5.37027 9.76482 5.14845C10.0113 4.92663 10.3316 4.80464 10.6632 4.8063H13.9954C14.1722 4.8063 14.3417 4.73609 14.4667 4.61111C14.5916 4.48612 14.6618 4.31661 14.6618 4.13986V0.674329Z" />
                </svg>
              </a>
            </Link>
            <Link href='https://www.youtube.com/channel/UCBdJKYJGjr_kWDNK6oQiVbA'>
              <a target='_blank' rel='noopener' className='text-white hover:text-white/75'>
                <svg width="28" height="24" viewBox="0 0 28 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2488 0H14.399C15.7862 0.00640626 22.8151 0.0704692 24.7102 0.715366C25.2832 0.912185 25.8052 1.29582 26.2243 1.82794C26.6433 2.36005 26.9447 3.02201 27.0982 3.74766C27.2687 4.55912 27.3885 5.63324 27.4695 6.74152L27.4864 6.96361L27.5235 7.51882L27.537 7.7409C27.6467 9.69268 27.6602 11.5206 27.6619 11.9199V12.0801C27.6602 12.4944 27.645 14.4461 27.5235 16.479L27.51 16.7033L27.4948 16.9253C27.4104 18.1468 27.2855 19.3597 27.0982 20.2523C26.9452 20.9783 26.644 21.6406 26.2248 22.1728C25.8057 22.705 25.2834 23.0884 24.7102 23.2846C22.7526 23.9509 15.312 23.9979 14.2808 24H14.0412C13.5197 24 11.363 23.9872 9.10158 23.889L8.81469 23.8761L8.66787 23.8676L8.37928 23.8527L8.0907 23.8377C6.21746 23.7331 4.43366 23.5644 3.6118 23.2825C3.03884 23.0865 2.51665 22.7033 2.09755 22.1715C1.67845 21.6397 1.37715 20.9779 1.22384 20.2523C1.03651 19.3619 0.911631 18.1468 0.827251 16.9253L0.81375 16.7011L0.800249 16.479C0.716962 15.0321 0.670809 13.5821 0.661865 12.1313L0.661865 11.8687C0.66524 11.4096 0.678741 9.82294 0.769872 8.07189L0.781685 7.85194L0.786748 7.7409L0.800249 7.51882L0.837376 6.96361L0.854252 6.74152C0.935257 5.63324 1.05508 4.55699 1.22553 3.74766C1.37858 3.02172 1.67977 2.35945 2.09888 1.82724C2.518 1.29503 3.04032 0.911595 3.61349 0.715366C4.43535 0.437762 6.21915 0.266928 8.09239 0.160156L8.37928 0.145209L8.66955 0.132396L8.81469 0.12599L9.10327 0.111042C10.7094 0.045644 12.3161 0.00933791 13.9231 0.00213552H14.2488V0ZM9.66187 6V18L21.6619 12.0801L9.66187 6Z" />
                </svg>
              </a>
            </Link>
            <Link href='https://twitter.com/MyPetsLife1'>
              <a target='_blank' rel='noopener' className='text-white hover:text-white/75'>
                <svg width="31" height="24" viewBox="0 0 31 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.1845 2.84684C29.0988 3.32792 27.9325 3.65297 26.7064 3.79989C27.9715 3.0429 28.918 1.85148 29.3692 0.447947C28.1807 1.15395 26.8798 1.6509 25.5232 1.91719C24.611 0.943152 23.4027 0.297546 22.0859 0.0806033C20.7691 -0.13634 19.4176 0.0875171 18.241 0.71742C17.0645 1.34732 16.1289 2.34803 15.5794 3.56417C15.0299 4.78031 14.8973 6.14385 15.2021 7.44309C12.7937 7.32216 10.4377 6.69618 8.28686 5.60576C6.13605 4.51535 4.23854 2.98487 2.7175 1.11366C2.19742 2.0108 1.89837 3.05097 1.89837 4.15875C1.89779 5.15601 2.14337 6.13799 2.61333 7.01757C3.08328 7.89715 3.76308 8.64713 4.59241 9.20098C3.63061 9.17037 2.69003 8.91049 1.84896 8.44295V8.52096C1.84886 9.91965 2.33268 11.2753 3.21832 12.3579C4.10396 13.4405 5.33687 14.1833 6.70785 14.4603C5.81562 14.7018 4.88019 14.7374 3.97221 14.5644C4.35901 15.7678 5.11249 16.8203 6.12713 17.5742C7.14178 18.3282 8.36681 18.7461 9.63073 18.7692C7.48516 20.4535 4.8354 21.3672 2.1077 21.3632C1.62452 21.3633 1.14174 21.3351 0.661865 21.2786C3.43064 23.0589 6.65369 24.0037 9.94538 24C21.0882 24 27.1797 14.7711 27.1797 6.76698C27.1797 6.50694 27.1732 6.24429 27.1615 5.98425C28.3464 5.12738 29.3691 4.0663 30.1819 2.85074L30.1845 2.84684Z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero