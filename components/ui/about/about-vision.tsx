import Image from 'next/image'

export function AboutVision() {
  return (
    <section className="relative w-full h-[420px] md:h-[768px] flex items-center justify-center overflow-hidden">
      <Image src="/about/A-1/Ａ-05.png" alt="異象背景" fill className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/30" />
      {/* 浮在上層的手寫字圖片 */}
      <Image
        src="/about/A-1/Ａ-01.png"
        alt="我們的異象手寫字"
        width={500}
        height={120}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none"
        priority
      />

    </section>
  )
} 