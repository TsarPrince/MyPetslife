import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
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
