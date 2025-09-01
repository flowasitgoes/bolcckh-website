"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

export function CommunitySection() {
  const news = [
    {
      id: 1,
      title: "超推~不只是歌唱班的歌唱班，歡迎愛唱歌的你，隨時加入!",
      subtitle: "",
      date: "2024.05.11",
      image: "/home/news-section/01.jpg",
      category: "主日講員：柯芳圓",
      author: "Qrowd",
      comments: 2,
      link: "/news/art-exhibition",
    },
    {
      id: 2,
      title: "一支氣球捲出一朵花，一雙巧手變出幸福感",
      subtitle: "",
      date: "2024.05.18",
      image: "/home/news-section/02.jpg",
      category: "活動資訊",
      author: "Qrowd",
      comments: 2,
      link: "/news/parenting-lecture",
    },
    {
      id: 3,
      title: "姐妹特會『蒙福之鑰』",
      subtitle: "",
      date: "2024.05.18",
      image: "/home/news-section/03.jpg",
      category: "電影欣賞",
      author: "Qrowd",
      comments: 2,
      link: "/news/baptism-ceremony",
    },
    {
      id: 4,
      title: "《長青學苑》秋季班 點我線上報名",
      subtitle: "每週三晚上7:30，邀請您一起為教會、家庭、城市禱告",
      date: "2024.05.25",
      image: "/home/news-section/04.jpg",
      category: "禱告會",
      author: "Qrowd",
      comments: 5,
      link: "/news/children-summer-camp",
    },
    {
      id: 5,
      title: "雙律師專業諮詢：為幫助大家在生活中遇到的法律相關問題",
      subtitle: "週五晚上6:30，歡迎年輕人一起分享生活、討論信仰",
      date: "2024.05.26",
      image: "/home/news-section/05.jpg",
      category: "青年事工",
      author: "Qrowd",
      comments: 3,
      link: "/news/youth-retreat",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', slidesToScroll: 1 })
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
          <h2 className="text-2xl lg:text-4xl text-teal-600 font-bold tracking-widest mb-2">社區關懷</h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-[#444]">Community Care</h3>
        </div>
        {/* Carousel 區塊 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex news-section-container gap-8">
            {news.map((item) => (
              <div className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2" key={item.id}>
                <Card className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0">
                  <a href={item.link} className="block">
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

                      <h4 className="font-bold text-lg mb-2 text-[#444] leading-snug mt-4 hover:text-teal-600 transition-colors">{item.title}</h4>
                      {item.subtitle && <p className="text-gray-600 text-sm leading-relaxed">{item.subtitle}</p>}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-500 hover:text-teal-600 font-semibold flex items-center gap-1 group">
                          READ MORE
                          <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* 左右箭頭按鈕 */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={selectedIndex === 0}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
              selectedIndex === 0 
                ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'border-teal-400 bg-white hover:bg-teal-400 hover:text-white'
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={selectedIndex === news.length - 1}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
              selectedIndex === news.length - 1 
                ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'border-teal-400 bg-white hover:bg-teal-400 hover:text-white'
            }`}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
