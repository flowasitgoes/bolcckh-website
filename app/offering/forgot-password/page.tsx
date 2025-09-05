import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/offering.css'

export const metadata: Metadata = {
  title: '忘記密碼 | 高雄靈糧堂 - 密碼重置服務',
  description: '高雄靈糧堂會友密碼重置服務，透過手機驗證安全重置密碼。',
  keywords: '高雄靈糧堂, 忘記密碼, 密碼重置, 手機驗證, 會友服務',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '忘記密碼 | 高雄靈糧堂 - 密碼重置服務',
    description: '高雄靈糧堂會友密碼重置服務，透過手機驗證安全重置密碼。',
    url: 'https://conflux-tech.com/offering/forgot-password',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂忘記密碼',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '忘記密碼 | 高雄靈糧堂 - 密碼重置服務',
    description: '高雄靈糧堂會友密碼重置服務，透過手機驗證安全重置密碼。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="忘記密碼 - 雙手捧著花朵"
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
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-6 text-center border-b border-[#21807a] pb-4">
                忘記密碼
              </h3>
              
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-4">
                  請輸入您註冊時使用的手機號碼，我們將發送驗證碼到您的手機
                </p>
              </div>
              
              <form className="space-y-6">
                {/* 手機號碼 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    手機門號 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="請輸入手機號碼"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    required
                  />
                </div>
                
                {/* 驗證碼 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    驗證碼 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="請輸入驗證碼"
                      maxLength={4}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      required
                    />
                    <button 
                      type="button"
                      className="bg-[#21807a] text-white px-4 py-3 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold whitespace-nowrap"
                    >
                      獲得驗證碼
                    </button>
                  </div>
                </div>
                
                {/* 新密碼 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    新密碼 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="請設定新密碼"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    密碼長度至少6位，建議包含英文字母和數字
                  </p>
                </div>
                
                {/* 確認新密碼 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    確認新密碼 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="請再次輸入新密碼"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    required
                  />
                </div>
                
                {/* 重置密碼按鈕 */}
                <button 
                  type="submit"
                  className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold text-lg"
                >
                  重置密碼
                </button>
              </form>
              
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-gray-600">
                  記起密碼了？
                  <a href="/member-center/login" className="text-[#21807a] hover:underline font-semibold">
                    立即登入
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  還沒有帳號？
                  <a href="/member-center/register" className="text-[#21807a] hover:underline font-semibold">
                    立即註冊
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 