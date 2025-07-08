"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "2F榮耀廳－母親的祕密武器",
      subtitle: "",
      date: "2024.05.11",
      image: "/home/news-section/Home-05.png",
      category: "主日講員：柯芳圓",
      author: "Qrowd",
      comments: 2,
    },
    {
      id: 2,
      title: "兒童美術館－1樓圖書室－一頁書博物館",
      subtitle: "",
      date: "2024.05.18",
      image: "/home/news-section/Home-06.png",
      category: "活動資訊",
      author: "Qrowd",
      comments: 2,
    },
    {
      id: 3,
      title: "2F榮耀廳 今年母親節幸福電影院特選 導暖心之作，片名《BIG》",
      subtitle: "",
      date: "2024.05.18",
      image: "/home/news-section/Home-07.png",
      category: "電影欣賞",
      author: "Qrowd",
      comments: 2,
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl text-teal-600 font-bold tracking-widest mb-2">最新消息</h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-800">Latest News</h3>
        </div>
        {/* Carousel 區塊 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex news-section-container gap-8">
            {news.map((item) => (
              <div className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2" key={item.id}>
                <Card className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 justify-end">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mt-4 justify-end">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {item.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10 0V6a4 4 0 00-8 0v2m8 0H7" /></svg>
                        {item.comments} Comments
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800 leading-snug mt-4">{item.title}</h4>
                    {item.subtitle && <p className="text-gray-600 text-sm leading-relaxed">{item.subtitle}</p>}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <button className="text-xs text-gray-500 hover:text-teal-600 font-semibold flex items-center gap-1 group">
                        READ MORE
                        <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* 分頁圓點 */}
        <div className="flex justify-center mt-6 gap-2">
          {news.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 border-teal-400 ${selectedIndex === idx ? 'bg-teal-400' : 'bg-white'}`}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
