export function NewsHero() {
  return (
    <section className="relative w-full h-[260px] md:h-[400px] lg:h-[480px] overflow-hidden">
      <div className="relative w-full h-full" style={{height: '100%'}}>
        {/* 背景全寬圖 z-index 1 */}
        <img
          src="/news/hero-banner-bgImage.png"
          alt="背景"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{zIndex: 1}}
        />
        {/* 左側 overlay 圖 z-index 2 */}
        <div className="overlayLeft">
          <img
            src="/news/hero-image-overlay.png"
            alt="左側裝飾"
            className="absolute inset-0 w-full h-full object-contain object-left"
            style={{zIndex: 2, pointerEvents: 'none', width: '50%', filter: 'invert(1)', left: '100px'}}
          />
        </div>
      </div>
    </section>
  )
} 