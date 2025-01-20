import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Badges from '../components/Badges'
import Service from '../components/Service'
import About from '../components/About'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
import Newsletter from '../components/Newsletter'
import Reviews from '../components/Reviews'

function Home() {

  return (
    <>
      <Navbar /> 
      <Hero /> 
      <Badges /> 
      <Service /> 
      <About />
      <Reviews />
      <Faqs />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
