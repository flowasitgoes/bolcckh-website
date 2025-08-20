import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '南島趴趴走 | 高雄靈糧堂 - 宣教使命',
  description: '高雄靈糧堂南島趴趴走，探索南島語系國家的宣教工作與文化。',
  keywords: '高雄靈糧堂, 南島趴趴走, 南島語系, 宣教使命, 文化探索',
}

export default function AustronesianPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="南島趴趴走"
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
                <span className="text-[#21807a]">南島趴趴走</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Video Section */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Video */}
                    <div className="space-y-4">
                      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/GKq60jcmaXA?si=J55Ac1GnwfnI8W67" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="absolute inset-0 w-full h-full rounded-lg"
                        ></iframe>
                      </div>
                      <p className="text-sm text-gray-600">以及特殊的地緣環境</p>
                      <h3 className="text-lg font-semibold text-[#333]">水泥叢林中的宣教船艦</h3>
                    </div>

                    {/* Second Video */}
                    <div className="space-y-4">
                      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/TBoLjG9fWSo?si=mTnh8oJjwPsa7bjM" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="absolute inset-0 w-full h-full rounded-lg"
                        ></iframe>
                      </div>
                      <p className="text-sm text-gray-600">以及特殊的地緣環境</p>
                      <h3 className="text-lg font-semibold text-[#333]">南島語系國家介紹影片</h3>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="mb-12">
                  <div className="relative">
                    {/* Map Image */}
                    <div className="relative w-full h-96 bg-cover bg-center rounded-lg overflow-hidden" 
                         style={{
                           backgroundImage: 'url("/mission/picture-new.jpg")'
                         }}>
                      {/* Map Overlay */}
                      <div className="absolute inset-0 bg-brown-800/20"></div>
                      
                      {/* Heart Pins */}
                      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      
                      {/* Map Title */}
                      <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                        <h3 className="text-lg font-bold text-[#333]">南島語系國家分佈圖</h3>
                      </div>
                      
                      {/* Notebook */}
                      <div className="absolute bottom-4 left-4 w-16 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <div className="w-8 h-10 bg-purple-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orange Background Section */}
                <div className="mission-testmony-witness-section bg-[#F3A149] p-32 rounded-lg">
                  <div className="text-center">
                    <p className="text-black text-lg leading-relaxed">
                      隨著全球化的發展，南島語系國家的基督教面臨現代化和世俗化的挑戰，可能需要重新詮釋其信仰和實踐。
                    </p>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className="mt-8 text-right">
                  <Link 
                    href="/mission"
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
