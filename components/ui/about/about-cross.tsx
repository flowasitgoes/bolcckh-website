import Image from 'next/image'

export function AboutCross() {
  return (
    <section className="cross-container relative w-full py-36 flex items-center justify-center overflow-hidden bg-[#0b9a97]">
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <div className="bg-white rounded-xl shadow-lg px-16 py-24 mt-12 mb-12 max-w-xl w-full text-center">
          <div className="text-2xl md:text-3xl font-bold text-center mb-2">崇拜介紹</div>
          <div className="w-32 h-1 bg-[#21807a] mx-auto mb-6" />
          <div className="text-lg md:text-xl text-center text-[#22403a] leading-relaxed">
            每週主日我們以喜樂歡慶的心敬拜，並且提供生動活潑的信息，使來到當中的家人得著智慧，在家庭、職場及個人的生命中重新得力，這裡也有一群年輕的學子及孩童在追尋夢想，想要明白上帝在他們生命中的計劃！讓我們一同領受從上帝而來的祝福。
          </div>
        </div>
      </div>
    </section>
  )
} 