'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/back1.jpg-Z8qWovJ2JloczSBxV7EbDctxi9KoWO.jpeg"
          alt="Celestial background" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content Overlay */}
      {/* <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-4 animate-fade-in-up">
          WE CREATE YOUR MEMORIES
        </h2>
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-8 animate-fade-in-up animation-delay-300">
          CELESTIA
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up animation-delay-600">
          From ethereal celebrations to magical moments, we transform your dreams into reality
        </p>
        <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in-up animation-delay-900">
          Begin Your Journey
        </Button>
      </div> */}

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 pointer-events-none" />
    </section>
  )
}

// Add these styles to your global CSS file or a new CSS module
`
@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-900 {
  animation-delay: 900ms;
}
`

