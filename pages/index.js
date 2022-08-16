import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="One stop solution for all your pet needs! | Best Pet Care Application Worldwide" />
        <meta name="author" content="Prince" />

        <title>My Petslife - One stop solution for all your pet needs</title>
        <meta name="keywords" content="mypetslife,track family Activity, family pets,PET DIGITAL PLATFORM,PET, PET CARE, PET REMINDERS, PET MANAGEMENT, DOG FINDER, PET FINDER, PET SERVICES, PET TRACKER, PET TRACK, PET CARING, PET INSTA, PET STORIES, PET REELS, PET POSTS, CUTE PETS, CUTE DOG, CUTE VIDEOS OF PET, Earn Rewards, Pet Reward, Pet Coins, Pet Community, Pet Group, Pet Caretakers, reminders, vaccination reminders" />

        <meta property="og:title" content="My Petslife" />
        <meta property="og:description" content="Never Miss Your Pet's Schedule and Activity" />
        <meta property="og:image" content="https://d2m3ee76kdhdjs.cloudfront.net/static_assets/1200*630.png" />
        <meta property="og:url" content="https://mypetslifeus.page.link/join" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="MY PETS LIFE" />
        <meta name="twitter:description" content="Never Miss Your Pet's Schedule and Activity" />
        <meta name="twitter:image" content="https://d2m3ee76kdhdjs.cloudfront.net/static_assets/1200*630.png" />

      </Head>

      <Navbar />
      <div className='snap-y snap-mandatory max-h-screen overflow-y-scroll sm:max-h-[none] sm:overflow-y-auto'>
        <div className='snap-start snap-always'>
          <Hero />
        </div>
        {/* Offers component have individual sections using snap-start and snap-slaways */}
        <Offers />
        <div className='snap-start snap-always'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
