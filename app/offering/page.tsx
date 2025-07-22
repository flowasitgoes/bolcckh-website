import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'

export const metadata: Metadata = {
  title: '支持奉獻 | 高雄靈糧堂 - 線上奉獻與奉獻查詢',
  description: '高雄靈糧堂線上奉獻服務，提供多種奉獻方式，包含線上奉獻、銀行轉帳、奉獻查詢等功能。',
  keywords: '高雄靈糧堂, 線上奉獻, 奉獻查詢, 銀行轉帳, 十一奉獻, 建堂奉獻, 感恩奉獻',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '支持奉獻 | 高雄靈糧堂 - 線上奉獻與奉獻查詢',
    description: '高雄靈糧堂線上奉獻服務，提供多種奉獻方式，包含線上奉獻、銀行轉帳、奉獻查詢等功能。',
    url: 'https://conflux-tech.com/offering',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂支持奉獻',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '支持奉獻 | 高雄靈糧堂 - 線上奉獻與奉獻查詢',
    description: '高雄靈糧堂線上奉獻服務，提供多種奉獻方式，包含線上奉獻、銀行轉帳、奉獻查詢等功能。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function OfferingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="支持奉獻 - 雙手捧著花朵"
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
        <section className="main-content-section bg-[#fe7f4c] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* 我是會友 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4 text-center">
                  我是會友
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  已有會員帳號，請登入進行奉獻
                </p>
                <a 
                  href="/member-center/login"
                  className="block w-full bg-[#21807a] text-white text-center py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
                >
                  會員登入
                </a>
              </div>

              {/* 快速註冊成為會友 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4 text-center">
                  快速註冊成為會友
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  還沒有會員帳號？立即註冊
                </p>
                <a 
                  href="/member-center/register"
                  className="block w-full bg-[#21807a] text-white text-center py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
                >
                  立即註冊
                </a>
              </div>

              {/* 非會友直接奉獻 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4 text-center">
                  非會友直接奉獻
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  非會友也可以直接進行奉獻
                </p>
                <a 
                  href="/offering/direct-offering"
                  className="block w-full bg-[#21807a] text-white text-center py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
                >
                  直接奉獻
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 