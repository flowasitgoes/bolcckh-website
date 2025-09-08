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
            <div className="bg-white shadow-sm px-12 pt-12">
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
              <div className="mb-12 -mx-12">
                <div className="relative">
                  {/* Map Image */}
                  <div className="relative w-full">
                    <img 
                      src="/mission/picture-new-3.png" 
                      alt="南島語系國家分佈圖"
                      className="w-full h-auto object-contain"
                    />
                    
                    {/* Map Overlay */}
                    <div className="absolute inset-0 bg-brown-800/20"></div>
                    
                    {/* Map Title */}
                    <div className="absolute top-4 left-4 bg-[#fe7f4c]/90 px-4 py-2 rounded-lg">
                      <h3 className="text-lg font-bold text-[#333] ">南島語系國家分佈圖</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Country Sections */}
              <div className="countries-link-section mb-12">
                <h2 className="text-3xl font-bold text-[#333] text-center mb-12">南島語系國家 </h2>
                
                {/* Countries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                  <Link href="/mission-austronesian-countries/niue" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">紐埃</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/federated-states-of-micronesia" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">密克羅尼西亞聯邦</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/brunei-darussalam" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">汶萊和平之國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-the-philippines" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">菲律賓共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-marshall-islands" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">馬紹爾群島共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/malaysia" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">馬來西亞</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/democratic-republic-of-timor-leste" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">東帝汶民主共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/kingdom-of-tonga" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">東加王國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/tuvalu" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">吐瓦魯</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-kiribati" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">吉里巴斯共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/new-zealand" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">紐西蘭</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-singapore" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">新加坡共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/socialist-republic-of-vietnam" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">越南社會主義共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/independent-state-of-samoa" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">薩摩亞獨立國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/kingdom-of-thailand" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">泰王國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/independent-state-of-papua-new-guinea" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">巴布亞紐幾內亞獨立國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-vanuatu" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">萬那杜共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republik-indonesia" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">印度尼西亞共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-fiji" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">斐濟共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/solomon-islands" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">索羅門群島</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-palau" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">帛琉共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-nauru" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">諾魯共和國</span>
                  </Link>
                  <Link href="/mission-austronesian-countries/republic-of-madagascar" className="block p-4 bg-gray-50 rounded-lg hover:bg-[#fe7f4c] hover:text-white transition-colors text-center">
                    <span className="text-[#333] font-medium hover:text-white">馬達加斯加共和國</span>
                  </Link>
                </div>
              </div>

              {/* Full-width Teal Background Section */}
              <div className="mission-testmony-witness-section bg-[#07847f] -mx-12 py-32">
                <div className="text-center">
                  <p className="text-white text-lg leading-relaxed px-20 max-w-4xl mx-auto relative">
                    {/* Left orange line */}
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-[#fe7f4c]"></span>
                    {/* Right orange line */}
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-[#fe7f4c]"></span>
                    隨著全球化的發展，南島語系國家的基督教面臨現代化和世俗化的挑戰，可能需要重新詮釋其信仰和實踐。
                  </p>
                </div>
              </div>

              {/* Prayer Cards Section */}
              <div className="space-y-12 bg-[#fe7f4c] -mx-12 py-16 prayer-cards-container">
                {/* Prayer Card 1 */}
                <div className="bg-[#fe7f4c] p-8">
                  <div className="bg-white rounded-3xl p-24 max-w-4xl mx-auto prayer-card-content">
                    <h3 className="text-2xl font-bold text-[#444] text-center mb-2">為我們和南島邦交國的關係禱告</h3>
                    <p className="text-base text-[#e06838] font-bold text-center mb-6">Pray for our relationship with the States of diplomatic relations in Austronisian region</p>
                    <hr className="border-[#07847f] border-b-2 mb-6" />
                    <div className="space-y-4 font-bold">
                      <p className="text-[#555] leading-relaxed text-lg">
                        親愛的天父，祢知道我們在外交上不斷受到打壓，求祢伸出大能的膀臂幫助我們，因為唯有祢能幫助軟弱的，勝過強盛的，求祢堅固我們和邦交國的關係，特別是和南島的邦交國吉里巴斯、諾魯、馬紹爾、帛琉及吐瓦魯的連結，保守他們不受金錢或各樣利益的誘惑。在曠野開道路的主啊！求祢也為我們的外交開出一條又新又活的道路，使台灣可以預備自己成為宣教的海島，差派宣教士不再受到簽證的攔阻。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-[#e06838] leading-relaxed text-base">
                        Dear Heavenly Father, You know that we are constantly being suppressed in diplomacy, and we are asking for help from the powerful arms, because only You can help the weak, overcome the strong, and strengthen our relationship with the States of diplomatic relations. In particular, the links with the islands of Austronisian like Kiribati, Nauru, Marshall, Palau and Tuvalu, keep them not tempted by money or various interests. The Lord who opens the way in the wilderness! We ask You to open a new and lively path for our diplomacy, so that Taiwan can prepare itself to become an island of missions, and missionaries will no longer be blocked by visas. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prayer Card 2 */}
                <div className="bg-[#fe7f4c] p-8">
                  <div className="bg-white rounded-3xl p-24 max-w-4xl mx-auto prayer-card-content">
                    <h3 className="text-2xl font-bold text-[#555] text-center mb-2">為原民祝福禱告</h3>
                    <p className="text-base text-[#e06838] font-bold text-center mb-6">Praying for the aboriginal people</p>
                    <hr className="border-[#07847f] border-b-2 mb-6" />
                    <div className="space-y-4 font-bold">
                      <p className="text-[#555] leading-relaxed text-lg">
                        奉主耶穌基督的名祝福所有的原民：天天被智慧和啟示的靈充滿，豐富地認識父神，並且心中的眼睛被聖靈照明，知道父神對他們的恩召有何等指望，及父神在他們之中得的基業的榮耀，是何等的豐富，還知道父神要向他們顯出的大能是何等浩大，就充滿信心地走向先見、敬拜大軍的命定，為主興起發光。阿們！
                      </p>
                      <p className="text-[#e06838] leading-relaxed text-base">
                        Bless all the aboriginal people in the name of the Lord Jesus Christ: may them be filled with wisdom and the spirit of revelation everyday, richly knowing the Father, illuminated their mind with the Holy Spirit, knowing what the Father God expects from their calling, and how rich is the glory of the inheritance among them, and how great the power that the Father will show them, and they will ahead to be the Seer and the worship army with confidence that have commanded, to rise and shine for the Lord. Amen!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prayer Card 3 */}
                <div className="bg-[#fe7f4c] p-8">
                  <div className="bg-white rounded-3xl p-24 max-w-4xl mx-auto prayer-card-content">
                    <h3 className="text-2xl font-bold text-[#555] text-center mb-2">為原民更多得醫治、恢復禱告</h3>
                    <p className="text-base text-[#e06838] font-bold text-center mb-6">Pray for the native to receive more healing and recovery</p>
                    <hr className="border-[#07847f] border-b-2 mb-6" />
                    <div className="space-y-4 font-bold">
                      <p className="text-[#555] leading-relaxed text-lg">
                        親愛的天父，求祢更深觸摸、醫治原民的心， 賜華冠給他們當中悲哀的人，代替灰塵；喜樂油代替悲哀；讚美衣代替憂傷之靈；恢復他們身為這塊土地長子的尊榮與恩膏，使他們重修荒涼的土地，得著迷失、流浪的靈魂。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-[#e06838] leading-relaxed text-base">
                        Dear Heavenly Father, we ask You to deeply touch and heal the hearts of the native, and provide for those who grieve — to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair; restore them as the eldest son of honor and anointing of this land, make them rebuild the ruined lands that have been devastated and get lost, wandering souls. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
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