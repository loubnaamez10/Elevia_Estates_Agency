import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import FeaturedProperties from '../sections/FeaturedProperties'
import AboutPreview from '../sections/AboutPreview'
import Testimonials from '../sections/Testimonials'
import ContactShowcase from '../sections/ContactShowcase'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <AboutPreview />
        <Testimonials />
        <ContactShowcase />
      </main>
      <Footer />
    </>
  )
}

export default Home