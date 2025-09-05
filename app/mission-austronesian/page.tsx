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
                <div className="mission-testmony-witness-section bg-[#fe7f4c] p-32 rounded-lg">
                  <div className="text-center">
                    <p className="text-black text-lg leading-relaxed">
                      隨著全球化的發展，南島語系國家的基督教面臨現代化和世俗化的挑戰，可能需要重新詮釋其信仰和實踐。
                    </p>
                  </div>
                </div>

                {/* Country Sections */}
                <div className="countries-link-section mb-12">
                  <h2 className="text-3xl font-bold text-[#333] text-center mt-8 mb-8">靈糧國度家園</h2>
                  
                  {/* Countries Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                    <Link href="/mission-austronesian-countries/niue" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">紐埃</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/federated-states-of-micronesia" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">密克羅尼西亞聯邦</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/brunei-darussalam" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">汶萊和平之國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-the-philippines" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">菲律賓共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-marshall-islands" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">馬紹爾群島共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/malaysia" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">馬來西亞</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/democratic-republic-of-timor-leste" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">東帝汶民主共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/kingdom-of-tonga" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">東加王國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/tuvalu" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">吐瓦魯</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-kiribati" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">吉里巴斯共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/new-zealand" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">紐西蘭</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-singapore" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">新加坡共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/socialist-republic-of-vietnam" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">越南社會主義共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/independent-state-of-samoa" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">薩摩亞獨立國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/kingdom-of-thailand" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">泰王國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/independent-state-of-papua-new-guinea" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">巴布亞紐幾內亞獨立國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-vanuatu" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">萬那杜共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republik-indonesia" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">印度尼西亞共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-fiji" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">斐濟共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/solomon-islands" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">索羅門群島</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-palau" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">帛琉共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-nauru" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">諾魯共和國</span>
                    </Link>
                    <Link href="/mission-austronesian-countries/republic-of-madagascar" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center">
                      <span className="text-[#333] font-medium">馬達加斯加共和國</span>
                    </Link>
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
