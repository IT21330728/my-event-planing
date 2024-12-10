import Header from '@/components/Header.tsx'
import Hero from '@/components/Hero.tsx'
import Services from '@/components/Services.tsx'
import FeaturedProducts from '@/components/FeaturedProducts.tsx'
import Testimonials from '@/components/Testimonials.tsx'
import Contact from '@/components/Contact.tsx'
import Footer from '@/components/Footer.tsx'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <FeaturedProducts />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

