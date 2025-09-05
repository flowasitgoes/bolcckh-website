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
                    className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
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

              {/* YouTube Videos */}
              <div className="bg-white shadow-sm p-12">
                <div className="mb-8">
                  {/* <h1 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                    禱告蒙應允
                  </h1> */}
                  {/* <p className="text-gray-600">禱告得到回應的真實見證</p> */}
                </div>

                {/* Videos Grid */}
                <div className="space-y-8">
                  {/* First Video */}
                  <div className="text-center">
                    <div className="mb-4">
                      <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/iAaf7QXBfIg?si=sSGlQaEJRwhDPF3t" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mx-auto"
                      ></iframe>
                    </div>
                    <h3 className="text-xl font-bold text-[#21807a]">禱告蒙應允</h3>
                  </div>

                  {/* Second Video */}
                  <div className="text-center">
                    <div className="mb-4">
                      <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/7-ZEVTG2uTs?si=FBVDEAGdW2SHn6Cr" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mx-auto"
                      ></iframe>
                    </div>
                    <h3 className="text-xl font-bold text-[#21807a]">禱告蒙應允</h3>
                  </div>
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