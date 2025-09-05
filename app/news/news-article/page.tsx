import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '主崇信息精華 | 真福音的大能 | 高雄靈糧堂 - 教會消息',
  description: '高雄靈糧堂主崇信息精華，主任牧師羅邦明分享真福音的大能。',
  keywords: '高雄靈糧堂, 教會消息, 主崇信息, 真福音, 羅邦明',
}

export default function NewsArticlePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/news/hero-banner-bgImage.png"
          alt="教會消息"
          className="w-full h-auto object-cover"
        />
      </div>

      <main className="bg-gray-50">
        <div className="w-full">
          <div className="news-layout">
            {/* Left Sidebar Navigation */}
            <div className="news-sidebar bg-[#21807a]">
              <div className="p-6">
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
                <Link href="/" className="hover:text-[#21807a]">首頁</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/news" className="hover:text-[#21807a]">教會消息</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">文章標題</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                <div className="article-content-wrapper p-12">
                  {/* Article Header */}
                  <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">
                      主崇信息精華 | 真福音的大能
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">主任牧師羅邦明 | 2025.06.15</p>
                    <p className="text-sm text-gray-500">整理 | 文字團隊邱彥彰, 攝影 | 康恩得</p>
                  </div>

                  {/* Featured Image */}
                  <div className="w-full mb-8">
                    <img
                      src="/mission/C2/C2-07.png"
                      alt="主任牧師羅邦明講道"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>

                  {/* Article Metadata */}
                  <div className="flex justify-between items-center mb-8 text-sm text-gray-600">
                    <span>刊登日期 / 2025.07.01</span>
                    <span>瀏覽人次: 140</span>
                  </div>

                  {/* Scripture Reference */}
                  <div className="mb-8">
                    <p className="text-lg font-bold text-[#333]">
                      經文: 馬太福音五37;歌羅西書三9;箴十六32
                    </p>
                  </div>

                  {/* Article Body */}
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p className="text-lg">
                      人們常對關係有個迷思。其實關係是一個空盒子,你放什麼進去就只能拿什麼出來,說穿了就是最簡單的數學。今日周巽光牧師分享「健康整全家庭的關鍵」。
                    </p>

                    <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                      一、溝通的藝術,有四種溝通的類型,圍繞著兩個主題:身分和尊榮文化。
                    </h3>

                    <div className="space-y-4">
                      <p>
                        <strong>a. 攻擊型:</strong> 我重要,你不重要。你無法控制別人對你的不尊榮,你只能從愛自己、尊榮神是怎麼看你,來管理好自己,讓自己變成一個堅定剛強的溝通者。
                      </p>
                      
                      <p>
                        <strong>b. 被動型:</strong> 你重要,我不重要。這種溝通方式常常會讓自己感到被忽視,但我們需要學會在愛中表達自己的需要。
                      </p>
                      
                      <p>
                        <strong>c. 被動攻擊型:</strong> 你重要,我不重要......才怪。這種溝通方式是最不健康的,我們需要學會直接和誠實的溝通。
                      </p>
                      
                      <p>
                        <strong>d. 堅定型:</strong> 你重要,我也重要。這是最健康的溝通方式,我們需要學會在愛中表達自己,同時也尊重他人。
                      </p>
                    </div>


                  </div>

                  {/* Navigation Button */}
                  <div className="mt-12 text-right">
                    <Link 
                      href="/news"
                      className="inline-flex items-center px-6 py-3 bg-[#fe7f4c] text-white rounded-lg hover:bg-[#e66a3d] transition-colors"
                    >
                      <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      回上一頁
                    </Link>
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