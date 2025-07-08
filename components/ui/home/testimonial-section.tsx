import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="py-0 lg:py-0">
      <div className="testimonial-section-item grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-2 w-full h-full">
        {/* 左上：橘色區塊 */}
        <div className="bg-orange-500 flex flex-col items-center justify-center text-center p-8 lg:p-12 min-h-[70vh]">
          <h2 className="text-white text-lg mb-4 tracking-widest">見證故事</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-neutral-900">Testimonial<br />Stories</h3>
          <p className="text-white text-base md:text-lg mb-10 leading-relaxed">神的恩典：生活中的奇蹟與轉變</p>
            <Button
            variant="default"
            className="bg-teal-700 text-white px-10 py-3 text-lg font-bold rounded-none hover:bg-teal-800 flex items-center gap-2 mx-auto"
            >
            更多消息
            <span className="ml-2 text-2xl">→</span>
            </Button>
          </div>
        {/* 右上：圖片 */}
        <div className="overflow-hidden">
          <img src="/home/testimonial-section/Home-03.png" alt="Testimonial" className="w-full h-full object-cover" />
        </div>
        {/* 左下：圖片 */}
        <div className="overflow-hidden">
          <img src="/home/testimonial-section/Home-04.png" alt="Archive" className="w-full h-full object-cover" />
          </div>
        {/* 右下：橘色區塊 */}
        <div className="bg-orange-500 flex flex-col items-center justify-center text-center p-8 lg:p-12 min-h-[70vh]">
          <h2 className="text-white text-lg mb-4 tracking-widest">檔案專區</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-neutral-900">Archive<br />Section</h3>
          <p className="text-white text-base md:text-lg mb-10 leading-relaxed">信仰之旅：我們的團契活動影像集</p>
          <Button
            variant="default"
            className="bg-teal-700 text-white px-10 py-3 text-lg font-bold rounded-none hover:bg-teal-800 flex items-center gap-2 mx-auto"
          >
            更多消息
            <span className="ml-2 text-2xl">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
