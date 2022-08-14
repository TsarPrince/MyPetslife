import React from 'react'

const Lick = () => {
  return (
    <div className='grid grid-cols-2'>

      <div className='col-span-1 bg-[#DDE9FF] flex justify-center'>
        <div className='max-w-xl px-24 py-32 space-y-16'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-3xl font-bold text-blue-600'>Share your pet&apos;s precious moments!!</p>
            <p className='text-lg font-semibold text-blue-500'>Post videos and photos of your pet. Share the cute moments of your pet and celebrate them around the globe.</p>
          </div>
          <div className='bg-[#B7D0FF] inline-block'>
            <img src='/licking.gif'></img>
          </div>
        </div>
      </div>

      <div className='col-span-1 bg-[#D6FEFF] flex justify-center'>
        <div className='max-w-xl px-24 py-32 space-y-16'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-3xl font-bold text-teal-600'>Understand your dog&apos;s emotion!</p>
            <p className='text-lg font-semibold text-teal-500'>Wanna know when your pet&apos;s bark means they  love you? Recognise  your pets emotions and understand them.</p>
          </div>
          <div className='inline-block'>
            <img src='/emotions.gif'></img>
          </div>
        </div>
      </div>

      <div className='col-span-1 bg-[#fff] flex justify-center'>
        <div className='max-w-xl px-24 py-32 space-y-16'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-3xl font-bold text-purple-600'>Join community of pet lovers!</p>
            <p className='text-lg font-semibold text-purple-500'>With one of the largest Pet community, we have answers to all your problems. These people are same as you, animal lovers</p>
          </div>
          <div className='inline-block'>
            <img src='/community.gif'></img>
          </div>
        </div>
      </div>

      <div className='col-span-1 bg-[#FFF5C5] flex justify-center'>
        <div className='max-w-xl px-24 py-32 space-y-16'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-3xl font-bold text-purple-600'>Manage multiple pets with multiple caretaker&apos;s !</p>
            <p className='text-lg font-semibold text-purple-500'>Manage multiple pets along with multiple family members.</p>
          </div>
          <div className='inline-block'>
            <img src='/desktop_management.gif'></img>
          </div>
        </div>
      </div>

      <div className='col-span-1 bg-[#E6FDFF] flex justify-center'>
        <div className='max-w-xl px-24 py-32 space-y-16'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-3xl font-bold text-teal-600'>Earn Gift Cards</p>
            <p className='text-lg font-semibold text-teal-500'>Participate in various weekly challenges and win gift cards. </p>
          </div>
          <div className='inline-block'>
            <img src='/gift_card.gif'></img>
          </div>
        </div>
      </div>

      <div className='col-span-1 bg-purple-50 flex justify-center'>
        <div className='px-24 py-32 space-y-16'>

          <div className='flex flex-col items-center text-center space-y-4'>
            <p className='text-3xl font-bold text-purple-600'>Reviews from our Pet Parent&apos;s</p>
          </div>

          <div className='flex flex-col items-center space-y-16'>
            <div className='flex space-x-8'>
              {/* Review card 1 */}
              <div className='relative max-w-[22rem] flex-grow-0 bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
                <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                  <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                    <img className='w-16 h-16' src='/reviewer1.png'></img>
                  </div>
                  <p className='text-3xl font-bold text-slate-600'>Sonia</p>
                  <p className='text-lg font-semibold text-slate-500 leading-tight'>I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it</p>
                </div>
              </div>
              {/* Review card 2 */}
              <div className='relative max-w-[22rem] bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
                <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                  <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                    <img className='w-16 h-16' src='/reviewer2.png'></img>
                  </div>
                  <p className='text-3xl font-bold text-slate-600'>Rocky</p>
                  <p className='text-lg font-semibold text-slate-500 leading-tight'>I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it</p>
                </div>
              </div>
            </div>

            <div className='flex space-x-8'>
              {/* Review card 3 */}
              <div className='relative max-w-[22rem] bg-white p-8 rounded-[4rem] shadow-[0_10px_0_0] shadow-purple-300'>
                <div className='flex flex-col justify-center items-center pt-2 space-y-4'>
                  <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-lg'>
                    <img className='w-16 h-16' src='/reviewer3.png'></img>
                  </div>
                  <p className='text-3xl font-bold text-slate-600'>Sofia</p>
                  <p className='text-lg font-semibold text-slate-500 leading-tight'>I have tried a lot of apps with a similar purpose but this by far the best. Easy to use, highly informative, and beautiful graphics. The pro version is definitely worth it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Lick