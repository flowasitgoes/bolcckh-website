import Image from 'next/image'

export function AboutVision() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
      <Image src="/about/03-image-right.png" alt="我們的異象" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-white text-center">
        <div className="text-2xl md:text-4xl font-bold mb-2 font-handwriting">我們的異象</div>
        <div className="text-lg md:text-2xl tracking-wider">建造榮耀的教會 迎接神國的降臨</div>
      </div>
    </section>
  )
} 