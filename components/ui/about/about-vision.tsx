export function AboutVision() {
  return (
    <section className="relative w-full h-[420px] md:h-[768px] flex items-center justify-center overflow-hidden">
      {/* 背景圖片 */}
      <img 
        src="/about/A-1/Ａ-05.png" 
        alt="異象背景" 
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-black/30" />
      {/* 浮在上層的手寫字圖片 */}
      <img
        src="/about/A-1/Ａ-01.png"
        alt="我們的異象手寫字"
        className="relative z-20 pointer-events-none select-none max-w-[500px] w-full h-auto"
      />
    </section>
  )
} 