import Image from 'next/image'

export function AboutWelcome() {
  return (
    <section className="about-welcome-container flex flex-col md:flex-row w-full">
      <div className="about-welcome-left flex-1 bg-[#ff8552] text-white flex flex-col justify-center p-8 md:p-12">
        <div className="text-lg md:text-2xl mb-2">高雄靈糧堂，歡迎你們回家。</div>
        <div className="text-3xl md:text-5xl font-bold mb-6 text-black">Welcome home!</div>
        <div className="about-welcome-description text-lg md:text-2xl leading-relaxed">
          上帝的家教會就是我們的家，今天你們來到教會，就是回到上帝的家。<br />
          高雄靈糧堂是一個被神揀選建立在台灣南部的教會，祂的恩典一直在我們當中。<br />
          這是一間活出上帝愛的教會，歡迎您與家人一同享受上帝的平安與喜樂。
        </div>
      </div>
      <div className="about-welcome-right flex-1 min-h-[220px] md:min-h-[320px] relative">
        <Image src="/about/03-image-right.png" alt="Welcome" fill className="object-cover object-center" />
      </div>
    </section>
  )
} 