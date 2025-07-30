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
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
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
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
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

        {/* Main Content Section */}
        <section className="main-content-section flex">
          {/* Left Sidebar */}
          <div className="w-64 bg-[#21807a] p-6 hidden lg:block">
            <div className="text-white space-y-4">
              <h3 className="text-lg font-semibold mb-6">－ 奉獻中心 －</h3>
              <a href="/offering-info" className="block text-white hover:text-orange-300 transition-colors duration-300 border-b border-white pb-2">
                線上奉獻
              </a>
              <a href="/offering-bank-transfer" className="block text-white hover:text-orange-300 transition-colors duration-300 border-b border-white pb-2">
                銀行轉帳
              </a>
              <a href="/offering-inquiry" className="block text-white hover:text-orange-300 transition-colors duration-300 border-b border-white pb-2 border-l-4 border-orange-300 pl-2">
                奉獻查詢
              </a>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 bg-[#fe7f4c] p-8">
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
              
              {/* Additional Information */}
              {/* <div className="mt-8 space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="text-blue-800 font-semibold mb-2">查詢說明</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• 此查詢功能僅供非會友使用</li>
                    <li>• 會友請登入會友中心查詢奉獻紀錄</li>
                    <li>• 查詢結果將顯示最近6個月的奉獻紀錄</li>
                    <li>• 如有疑問請聯繫教會辦公室</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-gray-800 font-semibold mb-2">聯絡資訊</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>電話: 07-3456868</p>
                    <p>傳真: 07-3456527</p>
                    <p>地址: 高雄市左營區文川路157號</p>
                  </div>
                </div>
              </div> */}
              
              {/* Navigation Links */}
              {/* <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-gray-600">
                  您是會友嗎？
                  <a href="/member-center/login" className="text-[#21807a] hover:underline font-semibold">
                    立即登入會友中心
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  想要進行奉獻？
                  <a href="/offering-info" className="text-[#21807a] hover:underline font-semibold">
                    前往線上奉獻
                  </a>
                </p>
              </div> */}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 