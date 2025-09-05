import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/offering.css'

export const metadata: Metadata = {
  title: '銀行轉帳 | 高雄靈糧堂 - 銀行轉帳奉獻服務',
  description: '高雄靈糧堂銀行轉帳奉獻服務，提供一般匯款、ATM轉帳、支票、郵局劃撥等多種轉帳方式。',
  keywords: '高雄靈糧堂, 銀行轉帳, ATM轉帳, 支票奉獻, 郵局劃撥, 發票奉獻',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '銀行轉帳 | 高雄靈糧堂 - 銀行轉帳奉獻服務',
    description: '高雄靈糧堂銀行轉帳奉獻服務，提供一般匯款、ATM轉帳、支票、郵局劃撥等多種轉帳方式。',
    url: 'https://conflux-tech.com/offering-bank-transfer',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂銀行轉帳',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '銀行轉帳 | 高雄靈糧堂 - 銀行轉帳奉獻服務',
    description: '高雄靈糧堂銀行轉帳奉獻服務，提供一般匯款、ATM轉帳、支票、郵局劃撥等多種轉帳方式。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function OfferingBankTransferPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="銀行轉帳 - 雙手捧著花朵"
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
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
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
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
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
                  {/* Bible Verse at the top */}
                  <div className="mb-8">
                    <p className="text-lg md:text-xl leading-relaxed mb-2 text-[#444]">
                      萬軍之耶和華說：你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。
                    </p>
                    <p className="text-base md:text-lg font-semibold text-gray-600">
                      &lt;瑪拉基書 三:10&gt;
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {/* 一般匯款及ATM轉帳 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#fe7f4c] mb-4">
                        一般匯款及ATM轉帳
                      </h3>
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-semibold">帳戶名稱:</span> 合作金庫苓雅分行(代碼:006)</p>
                        <p><span className="font-semibold">戶名:</span> 財團法人中國基督教靈糧世界佈道會高雄靈糧堂</p>
                        <p><span className="font-semibold">銀行帳號:</span> 0510871004577</p>
                        <p className="text-[#fe7f4c] font-semibold mt-4">
                          ※溫馨提醒:作業後,請務必來電或傳真至教會,以確認入帳記錄。
                        </p>
                        <p className="text-gray-700">
                          電話:07-3456868#156 聯絡窗口:吳姊妹
                        </p>
                      </div>
                    </div>

                    {/* 開立支票 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#fe7f4c] mb-4">
                        開立支票
                      </h3>
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-semibold">抬頭:</span> 財團法人中國基督教靈糧世界佈道會高雄靈糧堂</p>
                        <p><span className="font-semibold">地址:</span> 高雄市左營區文川路157號</p>
                        <p className="text-[#fe7f4c] font-semibold mt-4">
                          ※可郵寄或主日奉獻進來
                        </p>
                      </div>
                    </div>

                    {/* 郵局劃撥方式 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#fe7f4c] mb-4">
                        郵局劃撥方式
                      </h3>
                      <div className="space-y-3 text-gray-700">
                        <p><span className="font-semibold">帳號:</span> 41804404</p>
                        <p><span className="font-semibold">戶名:</span> 高雄靈糧堂</p>
                      </div>
                    </div>

                    {/* 發票奉獻方式 */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#fe7f4c] mb-4">
                        發票奉獻方式
                      </h3>
                      <div className="space-y-3 text-gray-700">
                        <p>請投入奉獻箱或發票捐贈</p>
                        <p><span className="font-semibold">戶名:</span> 高雄靈糧堂</p>
                      </div>
                    </div>
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