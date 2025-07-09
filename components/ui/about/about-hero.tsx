import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative w-full h-[260px] md:h-[400px] lg:h-[480px] overflow-hidden">
      <div className="relative w-full h-full" style={{height: '100%'}}>
        {/* 背景全寬圖 z-index 1 */}
        <Image
          src="/about/02-overlay-1-background-zindex-1.png"
          alt="背景"
          fill
          className="object-cover object-center"
          style={{zIndex: 1}}
          priority
        />
        {/* 左側 overlay 圖 z-index 2 */}
        <div className="overlayLeft">
          <Image
            src="/about/01-overlay-1-left-zindex2.png"
            alt="左側裝飾"
            fill
            className="object-contain object-left"
            style={{zIndex: 2, pointerEvents: 'none'}}
            priority
          />
        </div>
      </div>
    </section>
  )
} 