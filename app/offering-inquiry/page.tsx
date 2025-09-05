import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/offering.css'

export const metadata: Metadata = {
  title: '奉獻查詢 | 高雄靈糧堂 - 奉獻紀錄查詢服務',
  description: '高雄靈糧堂奉獻查詢服務，提供非會友奉獻紀錄查詢功能。',
  keywords: '高雄靈糧堂, 奉獻查詢, 奉獻紀錄, 非會友查詢',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '奉獻查詢 | 高雄靈糧堂 - 奉獻紀錄查詢服務',
    description: '高雄靈糧堂奉獻查詢服務，提供非會友奉獻紀錄查詢功能。',
    url: 'https://conflux-tech.com/offering-inquiry',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂奉獻查詢',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '奉獻查詢 | 高雄靈糧堂 - 奉獻紀錄查詢服務',
    description: '高雄靈糧堂奉獻查詢服務，提供非會友奉獻紀錄查詢功能。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function OfferingInquiryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="奉獻查詢 - 雙手捧著花朵"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="text-white p-8 md:p-12">
              <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                哥林多後書 9:7
              </p>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
                各人要隨本心所酌定的，不要作難，不要勉強，因為捐得樂意的人是神所喜愛的。
              </p>
            </div>
          </div>
        </section>

        {/* Online Offering Dashboard Section */}
        <section className="member-dashboard-section">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-1 bg-[#21807a] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                | 線上奉獻
              </h2>
              
              {/* Navigation Menu */}
              <nav className="space-y-2">
                <a 
                  href="/online-offering"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    線上奉獻
                  </div>
                </a>

                <div className="border-t border-white/20 my-4"></div>

                <a 
                  href="/offering-bank-transfer"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    銀行轉帳
                  </div>
                </a>

                <div className="border-t border-white/20 my-4"></div>

                <a 
                  href="/offering-inquiry"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    奉獻查詢
                  </div>
                </a>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="member-center-login right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
              <div className="member-center-login-box">
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6 text-center">
                    奉獻查詢
                  </h2>
                  
                  {/* Introductory Text */}
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                    <p className="text-orange-800 text-sm md:text-base">
                      以下欄位提供非會友查詢記錄,若您是會友,請按會友登入後查詢奉獻紀錄,感謝
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    {/* 奉獻單號 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        奉獻單號 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="請輸入奉獻單號"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        請輸入您奉獻時收到的奉獻單號
                      </p>
                    </div>
                    
                    {/* 手機號碼 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        手機號碼 <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        placeholder="請輸入手機號碼"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        請輸入您奉獻時登記的手機號碼
                      </p>
                    </div>
                    
                    {/* 送出查詢按鈕 */}
                    <button 
                      type="submit"
                      className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold text-lg"
                    >
                      送出查詢
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 