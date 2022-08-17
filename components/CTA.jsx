import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <div className='sticky bottom-0 w-full bg-white shadow-[0_-5px_10px_0] shadow-[#40404018] flex justify-center items-center space-x-4 p-4 rounded-t-3xl'>
      <Link href='https://play.google.com/store/apps/details?id=com.app.mypetslife&hl=en&gl=US'>
        <a target='_blank' rel='noopener'><img className='h-12' src='/google_playstore.png'></img></a>
      </Link>
      <Link href='https://apps.apple.com/in/app/my-pets-life-us/id1548068737'>
        <a target='_blank' rel='noopener'><img className='h-12' src='/appstore.png'></img></a>
      </Link>
    </div>
  )
}

export default CTA