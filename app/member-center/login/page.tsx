import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/member-center.css'

export const metadata: Metadata = {
  title: '會友登入 | 高雄靈糧堂 - 會友中心',
  description: '高雄靈糧堂會友中心，提供 LINE 登入和手機會友登入服務，讓您輕鬆管理個人資料和奉獻記錄。',
  keywords: '高雄靈糧堂, 會友中心, 會友登入, LINE登入, 手機會友, 個人資料',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '會友登入 | 高雄靈糧堂 - 會友中心',
    description: '高雄靈糧堂會友中心，提供 LINE 登入和手機會友登入服務，讓您輕鬆管理個人資料和奉獻記錄。',
    url: 'https://conflux-tech.com/member-center/login',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂會友登入',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '會友登入 | 高雄靈糧堂 - 會友中心',
    description: '高雄靈糧堂會友中心，提供 LINE 登入和手機會友登入服務，讓您輕鬆管理個人資料和奉獻記錄。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function MemberLoginPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/member-center/hero-image.png"
            alt="會友登入 - 雙手捧著花朵"
            fill
            className="object-cover object-center"
            priority
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="text-white p-8 md:p-12">
              <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                哥林多後書 9:7
              </p>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
                各人要隨本心所酌定的，不要作難，不要勉強，因為捐得樂意的人是神所喜愛的。
              </p>
            </div>
          </div> */}
        </section>

        {/* Main Content Section */}
        <section className="main-content-section bg-[#F3A149] py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back to Member Center Button */}
            <div className="mb-8 text-center">
              <a 
                href="/offering"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-200 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                返回奉獻主頁
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LINE 登入 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4 text-center border-b border-[#21807a] pb-4">
                  使用LINE會友登入
                </h3>
                <div className="line-image-wrap text-center">
                  <button className="bg-transparent hover:bg-gray-50 transition-colors duration-300 p-4 rounded-lg">
                    <Image
                      src="/offering/offering-line.png"
                      alt="LINE"
                      width={80}
                      height={80}
                      className="mx-auto"
                    />
                  </button>
                </div>
              </div>

              {/* 手機會友登入 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-6 text-center">
                  手機會友登入
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      手機號碼
                    </label>
                    <input 
                      type="tel" 
                      placeholder="請輸入手機號碼"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      密碼
                    </label>
                    <input 
                      type="password" 
                      placeholder="請輸入密碼"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-[#21807a] focus:ring-[#21807a]" />
                      <span className="ml-2 text-sm text-gray-600">記住我</span>
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
                  >
                    登入
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    還沒有帳號？
                    <a href="/member-center/register" className="text-[#21807a] hover:underline font-semibold">
                      立即註冊
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* 註冊提示區塊 */}
            <div className="mt-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  {/* 左側文字提示 */}
                  <div className="text-center md:text-left">
                    <p className="text-gray-700 text-lg font-medium">
                      若您還不是我們的會友,也可以點擊
                    </p>
                    <div className="w-full h-0.5 bg-[#21807a] mt-2"></div>
                  </div>
                  
                  {/* 右側註冊按鈕 */}
                  <div>
                    <a 
                      href="/member-center/register"
                      className="inline-block bg-[#21807a] text-white px-8 py-3 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold text-lg"
                    >
                      進行註冊!
                    </a>
                  </div>
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