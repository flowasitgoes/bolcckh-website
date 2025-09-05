import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from '@/components/ui/news'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '主日直播 | 高雄靈糧堂 - 主日聚會線上直播',
  description: '高雄靈糧堂主日聚會線上直播，第一堂和第二堂崇拜時間，線上直播時間安排。',
  keywords: '高雄靈糧堂, 主日直播, 主日聚會, 線上直播, 崇拜時間, 第一堂, 第二堂',
  
  openGraph: {
    title: '主日直播 | 高雄靈糧堂 - 主日聚會線上直播',
    description: '高雄靈糧堂主日聚會線上直播，第一堂和第二堂崇拜時間，線上直播時間安排。',
    url: 'https://conflux-tech.com/news/sunday-live',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂主日直播',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '主日直播 | 高雄靈糧堂 - 主日聚會線上直播',
    description: '高雄靈糧堂主日聚會線上直播，第一堂和第二堂崇拜時間，線上直播時間安排。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function SundayLivePage() {
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
                      className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                    >
                      主日直播
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
                  <span className="mx-2">{'>'}</span>
                  <span className="text-[#21807a]">主日直播</span>
                </nav>

                {/* Sunday Live Content */}
                <div className="bg-white shadow-sm">
                  <div className="news-content-wrapper p-12">
                    <div className="space-y-8">
                      {/* Event Title */}
                      <div className="mb-8">
                        <h1 className="text-3xl text-center font-bold text-[#444] mb-4">
                          2025/07/06 | 主崇第一堂 | 高雄靈糧堂主日聚會直播
                        </h1>
                        <p className="text-lg text-center text-gray-600">
                          線上直播時間: 上午7:30
                        </p>
                      </div>

                      {/* Video Player */}
                      <div className="relative">
                        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                          <div className="relative w-full h-full">
                            {/* Video Thumbnail */}
                            <div className="absolute inset-0">
                              <img 
                                src="https://img.youtube.com/vi/TEjKi77Kwj8/maxresdefault.jpg" 
                                alt="主日直播縮圖"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30"></div>
                            </div>
                            
                            {/* Church Logo */}
                            <div className="absolute top-4 left-4 text-white text-xs">
                              <div className="flex items-center gap-2">
                                <span className="font-bold">BOLCCKH</span>
                                <span>基督教高雄靈糧堂</span>
                              </div>
                              <div className="text-xs opacity-80">Bread of Life Christian Church in Kaohsiung</div>
                            </div>
                            
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <a 
                                href="https://www.youtube.com/watch?v=TEjKi77Kwj8&list=RDTEjKi77Kwj8&start_radio=1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
                              >
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </a>
                            </div>

                            {/* Video Controls */}
                            <div className="absolute bottom-4 left-4 flex gap-2">
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                </svg>
                              </button>
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M7 14H5v5h2v-5zm3-2H8v7h2v-7zm3-2h-2v9h2v-9zm3-2h-2v11h2V8zm3-2h-2v13h2V6z"/>
                                </svg>
                              </button>
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M7 14H5v5h2v-5zm3-2H8v7h2v-7zm3-2h-2v9h2v-9zm3-2h-2v11h2V8zm3-2h-2v13h2V6z"/>
                                </svg>
                              </button>
                            </div>

                            {/* Full Screen Button */}
                            <div className="absolute bottom-4 right-4">
                              <button className="text-white hover:text-gray-300 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M7 14H5v5h2v-5zm3-2H8v7h2v-7zm3-2h-2v9h2v-9zm3-2h-2v11h2V8zm3-2h-2v13h2V6z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Worship Times */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-[#444] mb-4">崇拜時間:</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-[#fe7f4c] rounded-full"></div>
                            <span className="text-gray-700">第一堂週日08:30(線上直播)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-[#fe7f4c] rounded-full"></div>
                            <span className="text-gray-700">第二堂週日10:30(線上直播)</span>
                          </div>
                        </div>
                      </div>

                      {/* Back Button */}
                      <div className="flex justify-end mt-8">
                        <button className="bg-[#fe7f4c] text-white px-6 py-3 rounded-lg hover:bg-[#e66a3a] transition-colors border border-white text-center">
                          <div className="flex text-center justify-center items-center  gap-2">
                            <span className='text-center'>回上一頁</span>
                          </div>
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