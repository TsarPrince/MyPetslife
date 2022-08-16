import React from 'react'

const Reviews = () => {
  return (
    <div className='bg-purple-50 flex justify-center items-center h-full'>
      <div className='p-8 sm:px-12 sm:py-28 space-y-8 sm:space-y-16'>

        <div className='flex flex-col items-center text-center space-y-4'>
          <p className='font-josefin-sans text-3xl sm:text-4xl font-bold tracking-tight text-purple-600'>Reviews from our Pet Parent&apos;s</p>
        </div>

        {/* <div className='flex flex-col items-center space-y-16'>
          <div className='space-y-16 lg:flex lg:space-y-0 lg:space-x-8'>
            
            <div className='relative max-w-[22rem] flex-grow-0 bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
              <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                  <img className='w-16 h-16' src='/reviewer1.png'></img>
                </div>
                <p className='text-2xl sm:text-3xl font-bold text-slate-600'>
                  Sonia
                </p>
                <p className='sm:text-lg font-semibold text-slate-500 sm:tracking-tight leading-tight'>
                  I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it
                </p>
              </div>
            </div>

            <div className='relative max-w-[22rem] bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
              <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                  <img className='w-16 h-16' src='/reviewer2.png'></img>
                </div>
                <p className='text-2xl sm:text-3xl font-bold text-slate-600'>
                  Rocky
                </p>
                <p className='sm:text-lg font-semibold text-slate-500 sm:tracking-tight leading-tight'>
                  It makes pet parenting easy with all the activities and reminder. I am very busy with my job and this app helps me alot to keep track of dog. Also the dog to emotion feature is the best
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-16 lg:flex lg:space-y-0 lg:space-x-8'>

            <div className='relative max-w-[22rem] bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
              <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                  <img className='w-16 h-16' src='/reviewer3.png'></img>
                </div>
                <p className='text-2xl sm:text-3xl font-bold text-slate-600'>
                  Sofia
                </p>
                <p className='sm:text-lg font-semibold text-slate-500 sm:tracking-tight leading-tight'>
                  I am a new pet parent there are many things I&apos;m unaware of but this community in this app is so helpful and amazing. They are always there to answer my queries. I&apos;d recommend everyone to buy this app
                </p>
              </div>
            </div>
          </div>

          <div className='sm:hidden py-12'></div>
        </div> */}

        <div>
          <img className='hidden sm:block' src='/reviews_desktop.png'></img>
          <img className='sm:hidden' src='/reviews_mobile.png'></img>
          <div className='sm:hidden py-20'></div>
        </div>

      </div>
    </div>
  )
}

export default Reviews