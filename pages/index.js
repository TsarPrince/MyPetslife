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
        {/* <meta property="og:image" content="https://d2m3ee76kdhdjs.cloudfront.net/static_assets/1200*630.png" /> */}
        <meta property="og:image" content="https://doc-08-0s-docs.googleusercontent.com/docs/securesc/qvt23su17oksq5vdmjdcmj047f4gerj3/e2jnjp35n4644nea0peubamg0i362k61/1660921125000/01125117961720439919/02901308740921166755/1Ank9LsD6g6KxAOhGGWWF1gmGGDnO-OJD?ax=AI9vYm4rdk2Q-kiGdkGCLjPDUMvwBDJB9gKjGvZkw4neP5ZYfjPMyvCg0hj-gXoIj9Dhszn9QQHfW6klfRqDwoIb1WO945jaVf2lC7oQZhoLDxhbDQkCs2fL2YVx_thtcVWlqFsf3ZoLXigiSakMdcKUwsngnKm-_qkVSmx8mwrfL9jHKXNBFjN_KGYpYgPYmutQRM0gfETN5Uch14DfsfayHqzMZrUWpwhejBSWbr0pVXsSpGyA5kXwjjci7Wl_Wn9wLHTfIz3dP4kaDEnyE80hxGPNtolOio6nHCRFAvXd7aHFyQs3f8sk1oWamPejncKnccNT2NqTiMp_mJgXKGce2TxL0PAp6-mlqtsacdYblFAfZlvrtGEOHXgsMakZQvvQEbb91RqI-CivxG5Bcp9xCUbYbudnK8AMYs7fxPlZEpOzx2ANNZktEHkiveXo6ChyYvt7GrSD06X2GIzy2PdZOBuBngaJ9J4OOv74fVL8TmbVQIDBHMEE2rsx1S802RXRlaG1s-Fz8eTEleZo1JwMWcJuE1Ou16YPAOOUpzUcgmS184cbvpF2wF_mnMWk9xKfRwpdP8sV9ahQz2LCGDzlm5FfuJAjcNi_N8ntY2hfuG0ky2aDgqWb_9DswmElzMLxL58YApunx8L4dCtl8Bwenfwf3LisPsZF4P9J5yBq4zmCsjFS6WgdV-r_br_7hbrZlxYgbcus6lWPWlHiNrOiydDBpzL2BvwJ0gMCjZnrDHQiwCP4-m3j73aI0uxaHyGX6Mzaeffuf97Epel8VJqoaRPJOA0pRWPIblO1Ygjkc7Lnzn5H0J4YBX0Is0M6Op1sIW8ntODgHi-wLboCrdlJ09w0iPCCrKM&uuid=8c8c234f-ac7c-430d-bebb-86bc98695cd3&authuser=0&nonce=3t6utu9c7i6qm&user=02901308740921166755&hash=4jkfqllogko90pnqj8vt32i6bhotrqt3" />
        <meta property="og:url" content="https://mypetslifeus.page.link/join" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="My Pets Life" />
        <meta name="twitter:description" content="Never Miss Your Pet's Schedule and Activity" />
        {/* <meta name="twitter:image" content="https://d2m3ee76kdhdjs.cloudfront.net/static_assets/1200*630.png" /> */}
        <meta name="twitter:image" content="https://doc-08-0s-docs.googleusercontent.com/docs/securesc/qvt23su17oksq5vdmjdcmj047f4gerj3/e2jnjp35n4644nea0peubamg0i362k61/1660921125000/01125117961720439919/02901308740921166755/1Ank9LsD6g6KxAOhGGWWF1gmGGDnO-OJD?ax=AI9vYm4rdk2Q-kiGdkGCLjPDUMvwBDJB9gKjGvZkw4neP5ZYfjPMyvCg0hj-gXoIj9Dhszn9QQHfW6klfRqDwoIb1WO945jaVf2lC7oQZhoLDxhbDQkCs2fL2YVx_thtcVWlqFsf3ZoLXigiSakMdcKUwsngnKm-_qkVSmx8mwrfL9jHKXNBFjN_KGYpYgPYmutQRM0gfETN5Uch14DfsfayHqzMZrUWpwhejBSWbr0pVXsSpGyA5kXwjjci7Wl_Wn9wLHTfIz3dP4kaDEnyE80hxGPNtolOio6nHCRFAvXd7aHFyQs3f8sk1oWamPejncKnccNT2NqTiMp_mJgXKGce2TxL0PAp6-mlqtsacdYblFAfZlvrtGEOHXgsMakZQvvQEbb91RqI-CivxG5Bcp9xCUbYbudnK8AMYs7fxPlZEpOzx2ANNZktEHkiveXo6ChyYvt7GrSD06X2GIzy2PdZOBuBngaJ9J4OOv74fVL8TmbVQIDBHMEE2rsx1S802RXRlaG1s-Fz8eTEleZo1JwMWcJuE1Ou16YPAOOUpzUcgmS184cbvpF2wF_mnMWk9xKfRwpdP8sV9ahQz2LCGDzlm5FfuJAjcNi_N8ntY2hfuG0ky2aDgqWb_9DswmElzMLxL58YApunx8L4dCtl8Bwenfwf3LisPsZF4P9J5yBq4zmCsjFS6WgdV-r_br_7hbrZlxYgbcus6lWPWlHiNrOiydDBpzL2BvwJ0gMCjZnrDHQiwCP4-m3j73aI0uxaHyGX6Mzaeffuf97Epel8VJqoaRPJOA0pRWPIblO1Ygjkc7Lnzn5H0J4YBX0Is0M6Op1sIW8ntODgHi-wLboCrdlJ09w0iPCCrKM&uuid=8c8c234f-ac7c-430d-bebb-86bc98695cd3&authuser=0&nonce=3t6utu9c7i6qm&user=02901308740921166755&hash=4jkfqllogko90pnqj8vt32i6bhotrqt3" />

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
