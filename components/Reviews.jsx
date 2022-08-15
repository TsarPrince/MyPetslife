import React from 'react'

const Reviews = () => {
  return (
    <div className='bg-purple-50 flex justify-center'>
      <div className='p-8 md:px-12 md:py-32 space-y-16'>

        <div className='flex flex-col items-center text-center space-y-4'>
          <p className='text-2xl sm:text-3xl font-bold text-purple-600'>Reviews from our Pet Parent&apos;s</p>
        </div>

        <div className='flex flex-col items-center space-y-16'>
          <div className='space-y-16 lg:flex lg:space-y-0 lg:space-x-8'>
            {/* Review card 1 */}
            <div className='relative max-w-[22rem] flex-grow-0 bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
              <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                  <img className='w-16 h-16' src='/reviewer1.png'></img>
                </div>
                <p className='text-2xl sm:text-3xl font-bold text-slate-600'>Sonia</p>
                <p className='sm:text-lg font-semibold text-slate-500 leading-tight'>I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it</p>
              </div>
            </div>
            {/* Review card 2 */}
            <div className='relative max-w-[22rem] bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
              <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                  <img className='w-16 h-16' src='/reviewer2.png'></img>
                </div>
                <p className='text-2xl sm:text-3xl font-bold text-slate-600'>Rocky</p>
                <p className='sm:text-lg font-semibold text-slate-500 leading-tight'>I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it</p>
              </div>
            </div>
          </div>

          <div className='space-y-16 lg:flex lg:space-y-0 lg:space-x-8'>
            {/* Review card 3 */}
            <div className='relative max-w-[22rem] bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
              <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                  <img className='w-16 h-16' src='/reviewer3.png'></img>
                </div>
                <p className='text-2xl sm:text-3xl font-bold text-slate-600'>Sofia</p>
                <p className='sm:text-lg font-semibold text-slate-500 leading-tight'>I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it</p>
              </div>
            </div>
          </div>

          {/* To handle overflown sections and forced snappings on phone */}
          <div className='sm:hidden py-24'></div>
        </div>
      </div>
    </div>
  )
}

export default Reviews