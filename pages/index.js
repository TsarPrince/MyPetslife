import { useEffect } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import CTA from '../components/CTA'

export default function Home() {
  useEffect(() => {
    // +1px so that we always scroll in #main
    // to prevent whole document scrolling
    // to prevent address bar collapsing for smoother experience
    document.querySelector('#main').style.height = window.innerHeight + 1 +'px';

    // alert(window.innerHeight);                                     // 772, 640
    // alert(document.documentElement.clientHeight);                  // 772, 640
    // alert(document.getElementsByTagName('body')[0].clientHeight);  // 828, 696 --> h-screen (100vh)
    // alert(screen.height);                                          // 876, 720
  }, [])
  
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="One stop solution for all your pet needs! | Best Pet Care Application Worldwide" />
        <meta name="author" content="Prince Singh" />

        <title>My Petslife - One stop solution for all your pet needs</title>
        <meta name="keywords" content="mypetslife,track family Activity, family pets,PET DIGITAL PLATFORM,PET, PET CARE, PET REMINDERS, PET MANAGEMENT, DOG FINDER, PET FINDER, PET SERVICES, PET TRACKER, PET TRACK, PET CARING, PET INSTA, PET STORIES, PET REELS, PET POSTS, CUTE PETS, CUTE DOG, CUTE VIDEOS OF PET, Earn Rewards, Pet Reward, Pet Coins, Pet Community, Pet Group, Pet Caretakers, reminders, vaccination reminders" />

        <meta property="og:title" content="My Petslife" />
        <meta property="og:description" content="Never Miss Your Pet's Schedule and Activity" />
        <meta property="og:image" content="https://d3vtczj1cfkpaj.cloudfront.net/assets/ogimage.jpg" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="My Pets Life" />
        <meta name="twitter:description" content="Never Miss Your Pet's Schedule and Activity" />
        <meta name="twitter:image" content="https://d3vtczj1cfkpaj.cloudfront.net/assets/ogimage.jpg" />

      </Head>

      {/* Scroll snapping on mobile devices */}
      <div id='main' className={`snap-y snap-mandatory h-screen overflow-y-scroll sm:max-h-[none] sm:overflow-y-visible`}>
        <Hero />
        <Offers />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
