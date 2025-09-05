"use client"

import { useState } from 'react'

export function MessageReviewMain() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const messageItems = [
    {
      id: 1,
      title: "8/17 主崇聚會直播",
      date: "2025/08/17",
      image: "https://img.youtube.com/vi/8jYcZ4C_SbQ/maxresdefault.jpg",
      videoId: "8jYcZ4C_SbQ",
      dayMonth: { month: "2025/08", day: "17" }
    },
    {
      id: 2,
      title: "重新得力的父親ing~效法天父脫離崩耗",
      date: "2025/08/10",
      image: "https://img.youtube.com/vi/GzTEvcTx-CI/maxresdefault.jpg",
      videoId: "GzTEvcTx-CI",
      dayMonth: { month: "2025/08", day: "10" }
    },
    {
      id: 3,
      title: "成為有「影響⼒」的⼈",
      date: "2025/08/03",
      image: "https://img.youtube.com/vi/95TZoyxVr7c/maxresdefault.jpg",
      videoId: "95TZoyxVr7c",
      dayMonth: { month: "2025/08", day: "03" }
    },
    {
      id: 4,
      title: "末世神兒女的豐盛-從⼤戰爭到⼤活⽔",
      date: "2025/07/27",
      image: "https://img.youtube.com/vi/dFXOwxQ6yfg/maxresdefault.jpg",
      videoId: "dFXOwxQ6yfg",
      dayMonth: { month: "2025/07", day: "27" }
    },
    {
      id: 5,
      title: "詩篇頌禱～健康靈命的保養",
      date: "2025/07/20",
      image: "https://img.youtube.com/vi/CDN0DzCuXuE/maxresdefault.jpg",
      videoId: "CDN0DzCuXuE",
      dayMonth: { month: "2025/07", day: "20" }
    },
    {
      id: 6,
      title: "關鍵時刻",
      date: "2025/07/13",
      image: "https://img.youtube.com/vi/HojMZ3tDOhU/maxresdefault.jpg",
      videoId: "HojMZ3tDOhU",
      dayMonth: { month: "2025/07", day: "13" }
    },
    {
      id: 7,
      title: "仰望神，免除羞愧",
      date: "2025/07/06",
      image: "https://img.youtube.com/vi/4VlJxYRWLeA/maxresdefault.jpg",
      videoId: "4VlJxYRWLeA",
      dayMonth: { month: "2025/07", day: "06" }
    },
    {
      id: 8,
      title: "價錢與價值-⼈⽣意義觀",
      date: "2025/06/29",
      image: "https://img.youtube.com/vi/ovGToBd1kh4/maxresdefault.jpg",
      videoId: "ovGToBd1kh4",
      dayMonth: { month: "2025/06", day: "29" }
    },
    {
      id: 9,
      title: "真福⾳的⼤能",
      date: "2025/06/22",
      image: "https://img.youtube.com/vi/Efzv0FSckEQ/maxresdefault.jpg",
      videoId: "Efzv0FSckEQ",
      dayMonth: { month: "2025/06", day: "22" }
    },
    {
      id: 10,
      title: "⼀顆⽯頭改變了世界",
      date: "2025/06/15",
      image: "https://img.youtube.com/vi/qIDOuB9UTH4/maxresdefault.jpg",
      videoId: "qIDOuB9UTH4",
      dayMonth: { month: "2025/06", day: "15" }
    },
    {
      id: 11,
      title: "讓家成為⽣命彼此祝福的窩",
      date: "2025/06/08",
      image: "https://img.youtube.com/vi/Pm5BH286p-g/maxresdefault.jpg",
      videoId: "Pm5BH286p-g",
      dayMonth: { month: "2025/06", day: "08" }
    },
    {
      id: 12,
      title: "教會～敬拜禱告的⼤軍",
      date: "2025/06/01",
      image: "https://img.youtube.com/vi/MyrtHyc0ZaA/maxresdefault.jpg",
      videoId: "MyrtHyc0ZaA",
      dayMonth: { month: "2025/06", day: "01" }
    },
    {
      id: 13,
      title: "不要怕，主與我們同在",
      date: "2025/05/25",
      image: "https://img.youtube.com/vi/ndXcRFLBiwo/maxresdefault.jpg",
      videoId: "ndXcRFLBiwo",
      dayMonth: { month: "2025/05", day: "25" }
    },
    {
      id: 14,
      title: "經歷與神同在",
      date: "2025/05/18",
      image: "https://img.youtube.com/vi/7sNE8Ye66bM/maxresdefault.jpg",
      videoId: "7sNE8Ye66bM",
      dayMonth: { month: "2025/05", day: "18" }
    },
    {
      id: 15,
      title: "⺟親的秘密武器",
      date: "2025/05/11",
      image: "https://img.youtube.com/vi/sL_urbH5lTo/maxresdefault.jpg",
      videoId: "sL_urbH5lTo",
      dayMonth: { month: "2025/05", day: "11" }
    },
    {
      id: 16,
      title: "屬天的價值",
      date: "2025/05/04",
      image: "https://img.youtube.com/vi/iOea-_dTOdI/maxresdefault.jpg",
      videoId: "iOea-_dTOdI",
      dayMonth: { month: "2025/05", day: "04" }
    },
    {
      id: 17,
      title: "亞伯拉罕之約",
      date: "2025/04/27",
      image: "https://img.youtube.com/vi/QWxxFJQAmlE/maxresdefault.jpg",
      videoId: "QWxxFJQAmlE",
      dayMonth: { month: "2025/04", day: "27" }
    },
    {
      id: 18,
      title: "初熟的果子是基督",
      date: "2025/04/20",
      image: "https://img.youtube.com/vi/vuyVxyRzKrQ/maxresdefault.jpg",
      videoId: "vuyVxyRzKrQ",
      dayMonth: { month: "2025/04", day: "20" }
    },
    {
      id: 19,
      title: "重建⽣命根基",
      date: "2025/04/13",
      image: "https://img.youtube.com/vi/v8ut2DAL1_k/maxresdefault.jpg",
      videoId: "v8ut2DAL1_k",
      dayMonth: { month: "2025/04", day: "13" }
    },
    {
      id: 20,
      title: "上帝的性情與能⼒",
      date: "2025/04/06",
      image: "https://img.youtube.com/vi/n6AmQ8qphrQ/maxresdefault.jpg",
      videoId: "n6AmQ8qphrQ",
      dayMonth: { month: "2025/04", day: "06" }
    }
  ]

  // 計算分頁
  const totalPages = Math.ceil(messageItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = messageItems.slice(startIndex, endIndex)

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
              <nav className="space-y-0">
                <a 
                  href="/news"
                  className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  <span>教會消息</span>
                  <span className="text-[#fe7f4c] text-lg">›</span>
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
                  className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                >
                  重溫信息
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
              <span className="mx-2">{'>'}</span>
              <span className="text-[#21807a]">重溫信息</span>
            </nav>

            {/* Message Review Content */}
            <div className="bg-white shadow-sm">
              <div className="news-content-wrapper p-12">
                {/* Message List */}
                <div className="space-y-8">
                  {currentItems.map((item) => (
                    <div key={item.id} className="flex gap-8 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                      {/* Image */}
                      <div className="w-[576px] h-64 flex-shrink-0">
                        <a 
                          href={`https://www.youtube.com/watch?v=${item.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
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
                         <div>
                           <h3 className="text-xl font-bold text-[#444] mb-2">
                             <a 
                               href={`https://www.youtube.com/watch?v=${item.videoId}`}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="hover:text-[#21807a] transition-colors"
                             >
                               {item.title}
                             </a>
                           </h3>
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
