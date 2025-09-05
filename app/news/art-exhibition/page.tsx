import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '「她的名字寫在日常裡」影畫展 | 高雄靈糧堂 - 教會消息',
  description: '高雄靈糧堂「她的名字寫在日常裡」影畫展活動詳情，5/11-5/25期間展出。',
  keywords: '高雄靈糧堂, 影畫展, 她的名字寫在日常裡, 教會活動',
}

export default function ArtExhibitionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-gray-50">
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
                  <a href="/news" className="hover:text-[#21807a]">教會消息</a>
                  <span className="mx-2">{'>'}</span>
                  <span className="text-[#21807a]">「她的名字寫在日常裡」影畫展</span>
                </nav>

                {/* Article Content */}
                <div className="bg-white shadow-sm">
                  <div className="news-content-wrapper p-12">
                    {/* Article Header */}
                    <div className="mb-8">
                      <h1 className="text-3xl font-bold text-[#444] mb-4">
                        「她的名字寫在日常裡」影畫展
                      </h1>
                      <p className="text-gray-600">5/11 (日) - 5/25 (日)</p>
                    </div>

                    {/* Article Image */}
                    <div className="mb-8">
                      <img
                        src="/home/news-section/01.jpg"
                        alt="「她的名字寫在日常裡」影畫展"
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>



                    {/* Back Button */}
                    <div className="flex justify-end mt-8">
                      <Link 
                        href="/news"
                        className="bg-[#fe7f4c] text-white px-6 py-3 rounded-lg hover:bg-[#e66a3a] transition-colors"
                      >
                        回上一頁
                      </Link>
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
