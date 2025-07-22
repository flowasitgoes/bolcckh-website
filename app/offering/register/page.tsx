import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '../../styles/offering.css'

export const metadata: Metadata = {
  title: '會員註冊 | 高雄靈糧堂 - 快速註冊成為會友',
  description: '高雄靈糧堂會員註冊，提供快速註冊服務，包含手機驗證、個人資料設定等功能。',
  keywords: '高雄靈糧堂, 會員註冊, 會友註冊, 手機驗證, 快速註冊',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '會員註冊 | 高雄靈糧堂 - 快速註冊成為會友',
    description: '高雄靈糧堂會員註冊，提供快速註冊服務，包含手機驗證、個人資料設定等功能。',
    url: 'https://conflux-tech.com/offering/register',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂會員註冊',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '會員註冊 | 高雄靈糧堂 - 快速註冊成為會友',
    description: '高雄靈糧堂會員註冊，提供快速註冊服務，包含手機驗證、個人資料設定等功能。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function OfferingRegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="會員註冊 - 雙手捧著花朵"
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
                手機會員註冊
              </h3>
              
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
                
                {/* 姓名 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="請輸入姓名"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    required
                  />
                </div>
                
                {/* 性別 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    性別 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="male"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                        required
                      />
                      <span className="ml-2 text-gray-700">男</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                        required
                      />
                      <span className="ml-2 text-gray-700">女</span>
                    </label>
                  </div>
                </div>
                
                {/* 設定密碼 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    設定密碼 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="請設定密碼"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    required
                  />
                </div>
                
                {/* 確認密碼 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    確認密碼 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="password" 
                    placeholder="請再次輸入密碼"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    required
                  />
                </div>
                
                {/* 同意條款 */}
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="agree"
                    className="mt-1 w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                    我同意
                    <a href="#" className="text-[#21807a] hover:underline"> 服務條款 </a>
                    和
                    <a href="#" className="text-[#21807a] hover:underline"> 隱私政策</a>
                  </label>
                </div>
                
                {/* 註冊按鈕 */}
                <button 
                  type="submit"
                  className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold text-lg"
                >
                  註冊
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  已有帳號？
                  <a href="/offering-member" className="text-[#21807a] hover:underline font-semibold">
                    立即登入
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