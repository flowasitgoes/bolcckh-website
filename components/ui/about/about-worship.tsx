import Image from 'next/image'

export function AboutWorship() {
  return (
    <section className="bg-[#21867a] py-24 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg px-6 py-8 max-w-xl w-full text-center">
        <div className="text-lg md:text-xl font-bold mb-2">崇拜介紹</div>
        <div className="text-base md:text-lg leading-relaxed">
          每週主日我們以主樂隊的心敬拜，並且提升生命渴望的情懷，<br />
          使來到教會的弟兄姊妹都能享受在主裡安息。<br />
          這是一個充滿信仰與盼望在追夢夢想，想要明白主，活在他心意中的行動！<br />
          讓我們一同領受從上帝而來的祝福。
        </div>
      </div>
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
        <Image src="/about/06-normal-bakcgroundImage.png" alt="崇拜介紹" fill className="object-cover object-center" />
      </div>
    </section>
  )
} 