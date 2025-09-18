"use client"

import { useState } from 'react'

export function NewsMain() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const newsItems = [
    {
      id: 1,
      title: "「她的名字寫在日常裡」影畫展",
      date: "5/11 (日) - 5/25 (日)",
      description: "透過藝術作品展現女性在日常生活中的美好與價值，邀請您一同欣賞這場溫馨感人的影畫展覽。",
      image: "/home/news-section/01.jpg",
      category: "主日直撥",
      dayMonth: { month: "2025/03", day: "28" }
    },
    {
      id: 2, 
      title: "親職講座",
      date: "6/1 (日) - 6/7 (日)",
      description: "專業講師將分享現代親子教育的智慧與技巧，幫助父母建立更和諧的親子關係，共同成長。",
      image: "/home/news-section/02.jpg",
      category: "重溫信息",
      dayMonth: { month: "2025/06", day: "07" }
    },
    {
      id: 3,
      title: "受洗典禮",
      date: "6/22 (日) - 6/28 (日)",
      description: "見證弟兄姊妹們在信仰路上的重要里程碑，一同為他們的決志與委身獻上感恩與祝福。",
      image: "/home/news-section/03.jpg",
      category: "禱告會直播",
      dayMonth: { month: "2025/06", day: "28" }
    },
    {
      id: 4,
      title: "兒童夏令營",
      date: "7/15 (二) - 7/19 (六)",
      description: "為孩子們精心規劃的夏日活動，結合遊戲、學習與品格教育，讓孩子們度過充實快樂的假期。",
      image: "/home/news-section/04.jpg",
      category: "好文分享",
      dayMonth: { month: "2025/07", day: "15" }
    },
    {
      id: 5,
      title: "青年退修會",
      date: "8/10 (日) - 8/12 (二)",
      description: "青年朋友們的靈性充電時光，透過敬拜、分享與團契，一同在信仰中成長，建立深厚友誼。",
      image: "/home/news-section/05.jpg",
      category: "主日直撥",
      dayMonth: { month: "2025/08", day: "10" }
    }
  ]

  // 計算分頁
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = newsItems.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className="bg-gray-50">
      <div className="w-full">
        <div className="news-layout">
          {/* Left Sidebar Navigation */}
          <div className="news-sidebar bg-[#21807a]">
            <div className="p-6">
              {/* <div className="mb-8">
                <h2 className="text-white text-lg font-bold mb-4 relative">
                  <span className="absolute left-0 top-0 w-1 h-6 bg-[#fe7f4c]"></span>
                  <span className="ml-4">教會消息</span>
                </h2>
                <div className="border-b border-white/30"></div>
              </div> */}
              <nav className="space-y-0">
                <a 
                  href="/news"
                  className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  教會消息
                </a>
                <a 
                  href="/news/sunday-live"
                  className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  <span>主日直播</span>
                  <span className="text-[#fe7f4c] text-lg">›</span>
                </a>
                <a 
                  href="/news/prayer-meeting"
                  className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  <span>禱告會直播</span>
                  <span className="text-[#fe7f4c] text-lg">›</span>
                </a>
                <a 
                  href="/news/message-review"
                  className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  <span>重溫信息</span>
                  <span className="text-[#fe7f4c] text-lg">›</span>
                </a>
                <a 
                  href="/news/good-articles"
                  className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  <span>好文分享</span>
                  <span className="text-[#fe7f4c] text-lg">›</span>
                </a>
                <a 
                  href="/news/community-care"
                  className="flex justify-between items-center text-white px-4 py-3 hover:bg-[#1a6860] transition-colors"
                >
                  <span>社區關懷</span>
                  <span className="text-[#fe7f4c] text-lg">›</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="news-content">
            {/* Breadcrumb */}
            <nav className="news-breadcrumb text-sm text-gray-600 p-12">
              <a href="/" className="hover:text-[#21807a]">首頁</a>
              <span className="mx-2">{'>'}</span>
              <span className="text-[#21807a]">教會消息</span>
            </nav>

            {/* News Content */}
            <div className="bg-white shadow-sm">
              <div className="news-content-wrapper p-12">
                {/* News List */}
                <div className="space-y-8">
                  {currentItems.map((item) => (
                    <div key={item.id} className="flex gap-8 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                      {/* Image */}
                      <div className="w-48 h-32 flex-shrink-0">
                        <a 
                          href={item.id === 1 ? "/news/art-exhibition" :
                                item.id === 2 ? "/news/parenting-lecture" :
                                item.id === 3 ? "/news/baptism-ceremony" :
                                item.id === 4 ? "/news/children-summer-camp" :
                                "/news/youth-retreat"}
                          className="block w-full h-full hover:opacity-80 transition-opacity"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </a>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#444] mb-2">
                              <a 
                                href={item.id === 1 ? "/news/art-exhibition" :
                                      item.id === 2 ? "/news/parenting-lecture" :
                                      item.id === 3 ? "/news/baptism-ceremony" :
                                      item.id === 4 ? "/news/children-summer-camp" :
                                      "/news/youth-retreat"}
                                className="hover:text-[#21807a] transition-colors"
                              >
                                {item.title}
                              </a>
                            </h3>
                            <p className="text-gray-600 mb-3">{item.date}</p>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                          </div>
                          <div className="bg-[#fe7f4c] text-white p-3 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center items-center flex-shrink-0">
                            <div className="text-xs font-medium leading-tight">{item.dayMonth.month}</div>
                            <div className="text-2xl font-bold leading-tight mt-1">{item.dayMonth.day}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="pagination-container flex justify-center items-center gap-2 mt-8">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                        currentPage === page
                          ? 'bg-[#fe7f4c] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 