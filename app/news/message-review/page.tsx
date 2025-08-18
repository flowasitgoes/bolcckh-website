import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from '@/components/ui/news'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '重溫信息 | 高雄靈糧堂 - 過往信息回顧',
  description: '高雄靈糧堂重溫信息，包含過往主日信息、特別聚會信息、講座課程等重要內容回顧。',
  keywords: '高雄靈糧堂, 重溫信息, 過往信息, 主日信息, 特別聚會信息, 講座課程',
  
  openGraph: {
    title: '重溫信息 | 高雄靈糧堂 - 過往信息回顧',
    description: '高雄靈糧堂重溫信息，包含過往主日信息、特別聚會信息、講座課程等重要內容回顧。',
    url: 'https://conflux-tech.com/news/message-review',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂重溫信息',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '重溫信息 | 高雄靈糧堂 - 過往信息回顧',
    description: '高雄靈糧堂重溫信息，包含過往主日信息、特別聚會信息、講座課程等重要內容回顧。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function MessageReviewPage() {
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
                      <span className="text-[#F3A149] text-lg">›</span>
                    </a>
                    <a 
                      href="/news/sunday-live"
                      className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                    >
                      <span>主日直播</span>
                      <span className="text-[#F3A149] text-lg">›</span>
                    </a>
                    <a 
                      href="/news/prayer-meeting"
                      className="flex justify-between items-center text-white px-4 py-3 border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                    >
                      <span>禱告會直播</span>
                      <span className="text-[#F3A149] text-lg">›</span>
                    </a>
                    <a 
                      href="/news/message-review"
                      className="block text-white px-4 py-3 border-l-4 border-l-[#F3A149] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                    >
                      重溫信息
                    </a>
                    <a 
                      href="/news/good-articles"
                      className="flex justify-between items-center text-white px-4 py-3 hover:bg-[#1a6860] transition-colors"
                    >
                      <span>好文分享</span>
                      <span className="text-[#F3A149] text-lg">›</span>
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

                {/* YouTube Videos Section */}
                <div className="bg-white shadow-sm">
                  <div className="news-content-wrapper p-12">
                    <h2 className="text-2xl font-bold text-[#444] mb-8">重溫信息</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* Video 1 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/8jYcZ4C_SbQ"
                            title="8/17 主崇聚會直播"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">8/17 主崇聚會直播</h3>
                      </div>

                      {/* Video 2 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GzTEvcTx-CI"
                            title="重新得力的父親ing~效法天父脫離崩耗"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">重新得力的父親ing~效法天父脫離崩耗</h3>
                      </div>

                      {/* Video 3 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/95TZoyxVr7c"
                            title="成為有「影響⼒」的⼈"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">成為有「影響⼒」的⼈</h3>
                      </div>

                      {/* Video 4 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dFXOwxQ6yfg"
                            title="末世神兒女的豐盛-從⼤戰爭到⼤活⽔"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">末世神兒女的豐盛-從⼤戰爭到⼤活⽔</h3>
                      </div>

                      {/* Video 5 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/CDN0DzCuXuE"
                            title="詩篇頌禱～健康靈命的保養"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">詩篇頌禱～健康靈命的保養</h3>
                      </div>

                      {/* Video 6 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/HojMZ3tDOhU"
                            title="關鍵時刻"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">關鍵時刻</h3>
                      </div>

                      {/* Video 7 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/4VlJxYRWLeA"
                            title="仰望神，免除羞愧"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">仰望神，免除羞愧</h3>
                      </div>

                      {/* Video 8 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/ovGToBd1kh4"
                            title="價錢與價值-⼈⽣意義觀"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">價錢與價值-⼈⽣意義觀</h3>
                      </div>

                      {/* Video 9 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Efzv0FSckEQ"
                            title="真福⾳的⼤能"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">真福⾳的⼤能</h3>
                      </div>

                      {/* Video 10 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/qIDOuB9UTH4"
                            title="⼀顆⽯頭改變了世界"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">⼀顆⽯頭改變了世界</h3>
                      </div>

                      {/* Video 11 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Pm5BH286p-g"
                            title="讓家成為⽣命彼此祝福的窩"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">讓家成為⽣命彼此祝福的窩</h3>
                      </div>

                      {/* Video 12 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/MyrtHyc0ZaA"
                            title="教會～敬拜禱告的⼤軍"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">教會～敬拜禱告的⼤軍</h3>
                      </div>

                      {/* Video 13 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/ndXcRFLBiwo"
                            title="不要怕，主與我們同在"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">不要怕，主與我們同在</h3>
                      </div>

                      {/* Video 14 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7sNE8Ye66bM"
                            title="經歷與神同在"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">經歷與神同在</h3>
                      </div>

                      {/* Video 15 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/sL_urbH5lTo"
                            title="⺟親的秘密武器"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">⺟親的秘密武器</h3>
                      </div>

                      {/* Video 16 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/iOea-_dTOdI"
                            title="屬天的價值"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">屬天的價值</h3>
                      </div>

                      {/* Video 17 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/QWxxFJQAmlE"
                            title="亞伯拉罕之約"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">亞伯拉罕之約</h3>
                      </div>

                      {/* Video 18 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/vuyVxyRzKrQ"
                            title="初熟的果子是基督"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">初熟的果子是基督</h3>
                      </div>

                      {/* Video 19 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/v8ut2DAL1_k"
                            title="重建⽣命根基"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">重建⽣命根基</h3>
                      </div>

                      {/* Video 20 */}
                      <div className="space-y-4">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/n6AmQ8qphrQ"
                            title="上帝的性情與能⼒"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <h3 className="text-lg font-semibold text-[#444]">上帝的性情與能⼒</h3>
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