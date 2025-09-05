import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: '即將推出 | 高雄靈糧堂 - 網頁建置中',
  description: '此頁面正在建置中，請耐心等候。高雄靈糧堂致力於提供更好的服務體驗。',
  keywords: '高雄靈糧堂, 即將推出, 網頁建置中, 敬請期待',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '即將推出 | 高雄靈糧堂 - 網頁建置中',
    description: '此頁面正在建置中，請耐心等候。高雄靈糧堂致力於提供更好的服務體驗。',
    url: 'https://conflux-tech.com/up-coming',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂即將推出',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '即將推出 | 高雄靈糧堂 - 網頁建置中',
    description: '此頁面正在建置中，請耐心等候。高雄靈糧堂致力於提供更好的服務體驗。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function UpComingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* Construction Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-[#21807a] rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            </div>
          </div>
          
          {/* Main Content */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#21807a] mb-6">
            網頁建置中
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            此頁面正在精心建置中，我們致力於為您提供更好的服務體驗。
            <br />
            請耐心等候，很快就會與您見面！
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div className="bg-[#fe7f4c] h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
          
          {/* Back to Home Button */}
          <a 
            href="/" 
            className="inline-block bg-[#21807a] text-white px-8 py-3 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
          >
            返回首頁
          </a>
          
          {/* Additional Info */}
          <div className="mt-12 text-sm text-gray-500">
            <p>如有任何問題，歡迎聯繫我們</p>
            {/* <p className="mt-2">
              <a href="tel:07-3456868" className="text-[#21807a] hover:underline">
                07-3456868
              </a>
            </p> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 