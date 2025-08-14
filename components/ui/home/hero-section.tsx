"use client"

import { useState, useEffect } from 'react'

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const backgroundImages = [
    '/home/Home_bgBackground.png',
    '/home/Home_bn02.png' // 假设这是第二张图片，您可以根据实际图片路径调整
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 每5秒切换一次

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image Carousel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay Image */}
      <div className="relative z-[2] container mx-auto px-4 h-full flex items-center justify-center">
        <img 
          src="/home/Home-02.png" 
          alt="Home overlay" 
          className="max-w-full max-h-full object-contain w-80 lg:w-[480px] h-auto"
        />
      </div>
    </section>
  )
}
