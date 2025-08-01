import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from '@/components/ui/news'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '禱告會直播 | 高雄靈糧堂 - 線上禱告會',
  description: '高雄靈糧堂禱告會直播，線上禱告會時間、重播影片、禱告會資訊。',
  keywords: '高雄靈糧堂, 禱告會直播, 線上禱告會, 禱告會時間, 禱告會重播',
  
  openGraph: {
    title: '禱告會直播 | 高雄靈糧堂 - 線上禱告會',
    description: '高雄靈糧堂禱告會直播，線上禱告會時間、重播影片、禱告會資訊。',
    url: 'https://conflux-tech.com/news/prayer-meeting',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂禱告會直播',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '禱告會直播 | 高雄靈糧堂 - 線上禱告會',
    description: '高雄靈糧堂禱告會直播，線上禱告會時間、重播影片、禱告會資訊。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function PrayerMeetingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsHero />
        <div className="bg-gray-50">
          <div className="w-full">
            <div className="news-layout">
              {/* Left Sidebar Navigation */}
              <div className="news-sidebar bg-[#21807a]">
                <div className="p-6">
                  {/* <div className="mb-8">
                    <h2 className="text-white text-lg font-bold mb-4 relative">
                      <span className="ml-4">教會消息</span>
                    </h2>
                    <div className="border-b border-white/30"></div>
                  </div> */}
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
                      className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                    >
                      禱告會直播
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
                  <span className="text-[#21807a]">禱告會直播</span>
                </nav>

                {/* Prayer Meeting Content */}
                <div className="bg-white shadow-sm">
                  <div className="news-content-wrapper p-12">
                    <div className="space-y-8">
                      {/* Event Title */}
                      <div className="mb-8">
                        <h1 className="text-3xl text-center font-bold text-[#444] mb-4">
                          2025/08/01迎接平安月禱告會
                        </h1>
                        <p className="text-lg text-center text-gray-600">
                          線上禱告會時間: 19:30
                        </p>
                      </div>

                      {/* Video Player */}
                      <div className="relative">
                        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                          <div className="relative w-full h-full">
                            {/* Video Thumbnail */}
                            <div className="absolute inset-0">
                              <img 
                                src="https://img.youtube.com/vi/ahXhHl7gzuU/maxresdefault.jpg" 
                                alt="禱告會直播縮圖"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30"></div>
                            </div>
                            
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <a 
                                href="https://www.youtube.com/watch?v=ahXhHl7gzuU" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
                              >
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </a>
                            </div>

                            {/* Platform Info */}
                            <div className="absolute bottom-4 left-4 text-white text-sm">
                              <div className="flex items-center gap-2">
                                <span>到以下平台觀看:</span>
                                <div className="flex items-center gap-1">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                  </svg>
                                  <span>YouTube</span>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="absolute top-4 right-4 flex gap-2">
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </button>
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                                </svg>
                              </button>
                            </div>

                            {/* Heart Icon */}
                            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                              <span className="text-sm">合一相愛2024</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Text */}
                      <div className="text-center">
                        <p className="text-lg text-gray-700">
                          聖靈降靈節禱告會
                        </p>
                      </div>

                      {/* Back Button */}
                      <div className="flex justify-end mt-8">
                        <button className="bg-[#fe7f4c] text-white px-6 py-3 rounded-lg hover:bg-[#e66a3a] transition-colors text-center">
                          回上一頁
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 