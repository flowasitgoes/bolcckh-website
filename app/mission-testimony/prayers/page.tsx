import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '禱告蒙應允 | 高雄靈糧堂 - 生命見證',
  description: '高雄靈糧堂禱告蒙應允見證，分享弟兄姊妹禱告得到回應的真實故事。',
  keywords: '高雄靈糧堂, 生命見證, 禱告蒙應允, 禱告, 見證',
}

export default function PrayersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="生命見證"
          className="w-full h-auto object-cover"
        />
      </div>

      <main className="bg-gray-50">
        <div className="w-full">
          <div className="mission-layout">
            {/* Left Sidebar Navigation */}
            <div className="mission-sidebar bg-[#21807a]">
              <div className="p-6">

                <nav className="space-y-0 p-6">
                  <Link 
                    href="/mission-testimony"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    神的作為 何等美好
                  </Link>
                  <Link 
                    href="/mission-testimony/experience-god"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    經歷上帝 生命歸主
                  </Link>
                  <Link 
                    href="/mission-testimony/prayers"
                    className="block text-white px-4 py-3 border-l-4 border-l-[#F3A149] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    禱告蒙應允
                  </Link>
                  <Link 
                    href="/mission-testimony/witness"
                    className="block text-white px-4 py-3 hover:bg-[#1a6860] transition-colors"
                  >
                    門訓見證
                  </Link>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="mission-content">
              {/* Breadcrumb */}
              <nav className="mission-breadcrumb text-sm text-gray-600 p-12">
                <Link href="/" className="hover:text-[#21807a]">首頁</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/mission-testimony" className="hover:text-[#21807a]">生命見證</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">禱告蒙應允</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Video Section */}
                <div className="mb-8">
                  <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    {/* Video Player with Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Placeholder for video - you can replace with actual YouTube embed */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="text-white text-2xl font-bold mb-2">
                          全家歸主
                        </div>
                        <div className="text-white text-sm opacity-80">
                          【全家信主】侯淑樺 姐妹
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F3A149]/20 to-[#21807a]/20">
                      <div className="absolute inset-0 bg-[url('/mission/C2/C2-07.png')] bg-cover bg-center opacity-30"></div>
                    </div>
                  </div>
                </div>

                {/* Testimony Title */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-[#333] mb-4">
                    全家信主 - 侯淑樺 姊妹
                  </h1>
                </div>

                {/* Simple Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    為何要全家歸主，理由有四：一、是神的旨意；二、合情合理；三、有真正的快樂；四、有美好的見證。既然全家歸主如此的重要，我們不可不尋求研討使全家信主、歸主的方法。
                  </p>
                </div>

                {/* Navigation Button */}
                <div className="mt-8 text-right">
                  <Link 
                    href="/mission-testimony"
                    className="inline-flex items-center px-6 py-3 bg-[#21807a] text-white rounded-lg hover:bg-[#1a6860] transition-colors"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    回上一頁
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