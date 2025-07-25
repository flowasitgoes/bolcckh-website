import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/offering.css'

export const metadata: Metadata = {
  title: '線上奉獻 | 高雄靈糧堂 - 線上奉獻服務',
  description: '高雄靈糧堂線上奉獻服務，提供多種奉獻項目和付款方式，包含十一奉獻、建堂奉獻、感恩奉獻等。',
  keywords: '高雄靈糧堂, 線上奉獻, 十一奉獻, 建堂奉獻, 感恩奉獻, 宣教奉獻, 慈惠奉獻',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '線上奉獻 | 高雄靈糧堂 - 線上奉獻服務',
    description: '高雄靈糧堂線上奉獻服務，提供多種奉獻項目和付款方式，包含十一奉獻、建堂奉獻、感恩奉獻等。',
    url: 'https://conflux-tech.com/offering-info',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂線上奉獻',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '線上奉獻 | 高雄靈糧堂 - 線上奉獻服務',
    description: '高雄靈糧堂線上奉獻服務，提供多種奉獻項目和付款方式，包含十一奉獻、建堂奉獻、感恩奉獻等。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function OfferingInfoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="線上奉獻 - 雙手捧著花朵"
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
              <a href="/offering-info" className="block text-white hover:text-orange-300 transition-colors duration-300 border-b border-white pb-2 border-l-4 border-orange-300 pl-2">
                線上奉獻
              </a>
              <a href="/offering-bank-transfer" className="block text-white hover:text-orange-300 transition-colors duration-300 border-b border-white pb-2">
                銀行轉帳
              </a>
              <a href="/offering-inquiry" className="block text-white hover:text-orange-300 transition-colors duration-300 border-b border-white pb-2">
                奉獻查詢
              </a>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 bg-[#fe7f4c] p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6 text-center">
                線上奉獻
              </h2>
              
              <form className="space-y-6">
                {/* 您是高雄靈糧堂會友嗎？ */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    您是高雄靈糧堂會友嗎？ <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="isMember" 
                        value="no"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">否</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="isMember" 
                        value="yes"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">是</span>
                    </label>
                  </div>
                </div>

                {/* 點選奉獻項目 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    點選奉獻項目 <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'tithe', label: '十一奉獻', value: 'tithe' },
                      { id: 'building', label: '建堂奉獻', value: 'building' },
                      { id: 'thanksgiving', label: '感恩奉獻', value: 'thanksgiving' },
                      { id: 'mission', label: '宣教奉獻', value: 'mission' },
                      { id: 'charity', label: '慈惠奉獻', value: 'charity' },
                      { id: 'other', label: '其他奉獻', value: 'other' }
                    ].map((item) => (
                      <label key={item.id} className="flex items-center">
                        <input 
                          type="radio" 
                          name="offeringType" 
                          value={item.value}
                          className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                          required
                        />
                        <span className="ml-2 text-gray-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 奉獻方式 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    奉獻方式 <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'credit', label: '信用卡付款', value: 'credit' },
                      { id: 'recurring', label: '定期定額(每月)', value: 'recurring' },
                      { id: 'atm', label: 'ATM付款', value: 'atm' }
                    ].map((item) => (
                      <label key={item.id} className="flex items-center">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value={item.value}
                          className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                          required
                        />
                        <span className="ml-2 text-gray-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 奉獻金額 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    奉獻金額 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-2">新台幣</span>
                    <input 
                      type="number" 
                      placeholder="請輸入金額"
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      required
                    />
                    <span className="text-gray-700 ml-2">元</span>
                  </div>
                </div>

                {/* 奉獻人資料 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    奉獻人資料 <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="姓名"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      required
                    />
                    <input 
                      type="tel" 
                      placeholder="手機號碼"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* 是否需要奉獻收據 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    是否需要奉獻收據？
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="needReceipt" 
                        value="yes"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">是</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="needReceipt" 
                        value="no"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">否</span>
                    </label>
                  </div>
                </div>

                {/* 身份別 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    身份別
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="identityType" 
                        value="individual"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">個人</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="identityType" 
                        value="organization"
                        className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">組織</span>
                    </label>
                  </div>
                </div>

                {/* 收據抬頭 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    收據抬頭(同姓名)
                  </label>
                  <input 
                    type="text" 
                    placeholder="請輸入收據抬頭"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                  />
                </div>

                {/* 身份證字號 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    身份證字號
                  </label>
                  <input 
                    type="text" 
                    placeholder="請輸入身份證字號"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                  />
                </div>

                {/* 附記 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    附記:教會將協助上傳奉獻紀錄至國稅局,申報綜合所得稅
                  </p>
                </div>

                {/* 提交按鈕 */}
                <button 
                  type="submit"
                  className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold text-lg"
                >
                  確認奉獻
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 