import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '密克羅尼西亞聯邦專區 | 高雄靈糧堂 - 南島趴趴走',
  description: '高雄靈糧堂密克羅尼西亞聯邦專區，探索密克羅尼西亞的宣教工作與文化。',
  keywords: '高雄靈糧堂, 密克羅尼西亞聯邦, 南島趴趴走, 宣教使命, 文化探索',
}

export default function MicronesiaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="密克羅尼西亞聯邦專區"
          className="w-full h-auto object-cover"
        />
      </div>

      <main className="bg-gray-50">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4">
            {/* Main Content Area */}
            <div className="w-full">
              {/* Breadcrumb */}
              <nav className="mission-breadcrumb text-sm text-gray-600 p-12">
                <Link href="/" className="hover:text-[#21807a]">首頁</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/mission" className="hover:text-[#21807a]">宣教使命</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/mission-austronesian" className="hover:text-[#21807a]">南島趴趴走</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">密克羅尼西亞聯邦專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">密克羅尼西亞聯邦專區</h1>
                  <p className="text-lg text-gray-600">探索密克羅尼西亞的宣教工作與文化</p>
                </div>

                {/* Content Placeholder - 等待您提供 HTML 內容 */}
                <div className="space-y-8">
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <p className="text-gray-600">內容區域 - 等待您提供 HTML 檔案內容</p>
                    <p className="text-sm text-gray-500 mt-2">我將根據您提供的 HTML 內容進行調整和整合</p>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className="mt-8 text-right">
                  <Link 
                    href="/mission-austronesian"
                    className="inline-flex items-center px-6 py-3 bg-[#21807a] text-white rounded-lg hover:bg-[#1a6860] transition-colors"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    回南島趴趴走
                  </Link>
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
