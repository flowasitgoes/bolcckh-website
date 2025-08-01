import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from '@/components/ui/news'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '好文分享 | 高雄靈糧堂 - 精選文章與見證',
  description: '高雄靈糧堂好文分享，包含精選文章、見證分享、靈修心得等重要內容。',
  keywords: '高雄靈糧堂, 好文分享, 精選文章, 見證分享, 靈修心得',
  
  openGraph: {
    title: '好文分享 | 高雄靈糧堂 - 精選文章與見證',
    description: '高雄靈糧堂好文分享，包含精選文章、見證分享、靈修心得等重要內容。',
    url: 'https://conflux-tech.com/news/good-articles',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂好文分享',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '好文分享 | 高雄靈糧堂 - 精選文章與見證',
    description: '高雄靈糧堂好文分享，包含精選文章、見證分享、靈修心得等重要內容。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function GoodArticlesPage() {
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
                      className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] hover:bg-[#1a6860] transition-colors"
                    >
                      好文分享
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
                  <span className="text-[#21807a]">好文分享</span>
                </nav>

                {/* Good Articles Content */}
                <div className="bg-white shadow-sm">
                  <div className="news-content-wrapper p-12">
                    <div className="space-y-8">
                      {/* Article Items */}
                      <div className="flex gap-8 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <div className="w-48 h-32 flex-shrink-0">
                          <img src="/news/D-m01.png" alt="靈修心得分享" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">每日靈修心得</h3>
                              <p className="text-gray-600">透過每日讀經，讓我們更親近神，在生活中經歷祂的恩典</p>
                              <p className="text-gray-600">7/01(日)~7/07(日)</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">靈修</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">讀經</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">心得</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">分享</span>
                              </div>
                            </div>
                            <div className="bg-[#fe7f4c] text-white p-3 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center items-center flex-shrink-0">
                              <div className="text-xs font-medium leading-tight">2025/07</div>
                              <div className="text-2xl font-bold leading-tight mt-1">01</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-8 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <div className="w-48 h-32 flex-shrink-0">
                          <img src="/news/D-m02.png" alt="見證分享" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">生命見證分享</h3>
                              <p className="text-gray-600">弟兄姊妹們分享在信仰路上的經歷與神的恩典</p>
                              <p className="text-gray-600">7/08(日)~7/14(日)</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">見證</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">分享</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">恩典</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">經歷</span>
                              </div>
                            </div>
                            <div className="bg-[#fe7f4c] text-white p-3 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center items-center flex-shrink-0">
                              <div className="text-xs font-medium leading-tight">2025/07</div>
                              <div className="text-2xl font-bold leading-tight mt-1">08</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-8 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <div className="w-48 h-32 flex-shrink-0">
                          <img src="/news/D-m03.png" alt="精選文章" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">精選文章推薦</h3>
                              <p className="text-gray-600">精選各類信仰文章，幫助我們在屬靈生命上成長</p>
                              <p className="text-gray-600">7/15(日)~7/21(日)</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">精選</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">文章</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">推薦</span>
                                <span className="bg-[#07847f] text-white text-xs px-2 py-1 rounded">成長</span>
                              </div>
                            </div>
                            <div className="bg-[#fe7f4c] text-white p-3 text-center min-w-[80px] min-h-[80px] flex flex-col justify-center items-center flex-shrink-0">
                              <div className="text-xs font-medium leading-tight">2025/07</div>
                              <div className="text-2xl font-bold leading-tight mt-1">15</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pagination */}
                      <div className="pagination-container flex justify-center items-center gap-2 mt-8">
                        <button className="w-10 h-10 bg-[#fe7f4c] text-white rounded-full flex items-center justify-center font-bold">1</button>
                        <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">2</button>
                        <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">3</button>
                        <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </button>
                        <button className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 18h2V6H4v12zm8 0h2V6h-2v12z"/>
                          </svg>
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