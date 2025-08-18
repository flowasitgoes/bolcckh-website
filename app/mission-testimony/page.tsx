import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '神的作為 何等美好 | 高雄靈糧堂 - 生命見證',
  description: '高雄靈糧堂生命見證，分享弟兄姊妹經歷上帝、禱告蒙應允、門訓見證等真實的生命故事。',
  keywords: '高雄靈糧堂, 生命見證, 經歷上帝, 禱告蒙應允, 門訓見證, 神的作為',
}

export default function MissionTestimonyPage() {
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
                    className="block text-white px-4 py-3 border-l-4 border-l-[#F3A149] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
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
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
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
                <span className="text-[#21807a]">神的作為 何等美好</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}

                <div className="article-content-wrapper">
                  {/* YouTube Videos */}
                  <div className="space-y-8">
                    {/* First Video */}
                    <div className="text-center">
                      <div className="mb-4">
                        <iframe 
                          width="560" 
                          height="315" 
                          src="https://www.youtube.com/embed/Ymt2YU1s9Ac?si=mkF9mRr26fhwpvLi" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="mx-auto"
                        ></iframe>
                      </div>
                      <h3 className="text-xl font-bold text-[#21807a]">全家信主</h3>
                    </div>

                    {/* Second Video */}
                    <div className="text-center">
                      <div className="mb-4">
                        <iframe 
                          width="560" 
                          height="315" 
                          src="https://www.youtube.com/embed/ciJVr2_29og?si=scYU03Iwv8qswy7s" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="mx-auto"
                        ></iframe>
                      </div>
                      <h3 className="text-xl font-bold text-[#21807a]">職場轉化</h3>
                    </div>
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