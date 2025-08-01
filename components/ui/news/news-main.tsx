export function NewsMain() {
  const newsItems = [
    {
      id: 1,
      title: "「她的名字寫在日常裡」影畫展",
      date: "5/11 (日) - 5/25 (日)",
      image: "/news/D-m01.png",
      category: "主日直撥",
      dayMonth: { month: "2025/03", day: "28" }
    },
    {
      id: 2, 
      title: "親職講座",
      date: "6/1 (日) - 6/7 (日)",
      image: "/news/D-m02.png",
      category: "重溫信息",
      dayMonth: { month: "2025/06", day: "07" }
    },
    {
      id: 3,
      title: "受洗典禮",
      date: "6/22 (日) - 6/28 (日)",
      image: "/news/D-m03.png",
      category: "禱告會直播",
      dayMonth: { month: "2025/06", day: "28" }
    }
  ]

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
                  className="flex justify-between items-center text-white px-4 py-3 hover:bg-[#1a6860] transition-colors"
                >
                  <span>好文分享</span>
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
              <span className="text-[#21807a]">主日直撥</span>
            </nav>

            {/* News Content */}
            <div className="bg-white shadow-sm">
              <div className="news-content-wrapper p-12">
                {/* News List */}
                <div className="space-y-8">
                  {newsItems.map((item) => (
                    <div key={item.id} className="flex gap-8 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                      {/* Image */}
                      <div className="w-48 h-32 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-[#444] mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.date}</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 