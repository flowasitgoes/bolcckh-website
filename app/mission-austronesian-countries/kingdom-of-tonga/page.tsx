import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '東加王國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂東加王國專區，探索東加的宣教工作與文化。',
  keywords: '高雄靈糧堂, 東加王國, 南島語系國家, 宣教使命, 文化探索',
}

export default function TongaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="東加王國專區"
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
                <span className="text-[#21807a]">東加王國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">東加王國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Kingdom of Tonga</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/7F8LORDhX3Q?feature=oembed&wmode=opaque&rel=0" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為東加人民有正確的金錢觀禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為東加人民有正確的金錢觀禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the people of Tonga to have the right outlook on money</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，有很多東加的人民倚賴海外家人的匯款，習慣向人伸手且陷入消費主義，求祢的真理光照、顯明在他們的心中，使他們願意按照聖經的真理來使用他們的金錢，並倚靠祢賜的恩典，抵擋各樣慾望的誘惑和試探，經歷得勝而更新的生命。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, there are many people in Tonga who rely on remittances from overseas families. They are accustomed to reaching out to consumers and immerse themselves in consumerism. May Your truth is illuminated and revealed in their hearts, and they are willing to use their money according to Bible truth, and rely on the grace given by You to resist the temptations of all desires to experience a life of victory and renewal. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為東加王國火山爆發禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為東加王國火山爆發禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the volcanic eruption of Kingdom of Tonga</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為東加王國（Tonga）2022年1/14、15連續兩天的海底火山爆發，造成海嘯以及火山灰的污染。當地的空氣與水嚴重汙染、有毒以及網路跟通訊中斷…等，求祢施恩憐憫東加王國這塊土地並求祢賜下應變能力的智慧給當地的政府官員能有效、快速的進行災後恢復與重建。願神興起國際性的救援行動，在急難中求主施行拯救。奉主耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we pray for the 1/14th-15th of 2022 two consecutive days of the underwater volcano eruption in Kingdom of Tonga(Tonga), that caused tsunami and volcanic ash pollution. The local air and water are seriously polluted, and the network and communication are interrupted…etc. Please show mercy to the land of Tonga Kingdom and  You grant the wisdom of adaptability to the local government officials to be effective and fast in post-disaster recovery and reconstruction. May God raise up an international rescue operation and deliver salvation in times of distress. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為東加王國基督徒活出見證禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為東加王國基督徒活出見證禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Witnesses of Christians in the Kingdom of Tonga</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，感謝祢透過宣教士的傳揚，使東加有很多人信主，並且全國也竭力實踐聖經安息日的教導，求神幫助東加每個基督徒，不只有敬拜上的敬虔，更在生活中的每個層面，都成為見證基督的好榜樣，發揮更大的影響力來轉化國家。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, thank You for making the people of Tonga believe in the Lord through the preaching of missionaries, and for the nation 's efforts to practice the teachings of the Bible 's Sabbath. May You help each Christian in Tonga to become a good example of witnessing Christ, exerting greater influence to transform the country at every level of life. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為東加下一代的年輕人禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為東加下一代的年輕人禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the next generation of young people in Tonga</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，我們感謝祢常引領「東加」這個基督教國家，竭力實踐聖經的教導，求祢在社會變遷帶來的複雜挑戰中，繼續幫助他們勝過追求財富、物質享受的試探，使他們仍能尊主為大、以神為樂，享受在主裡單純而美好的生活。特別求祢幫助他們的年輕人，能找到健全、有前景、榮耀神的出路，遠離毒品及各樣誘惑。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, we thank You for guiding the "Tonga" Christian country in trying their best to practice Bible teaching. In the complex challenges brought about by social changes, please help them overcome the temptation to pursue wealth and material enjoyment. Let them respect the Lord, to enjoy Him and live a simple and beautiful life in Him. In particular, please help the young people to find a way out which is sound, promising and honoring God, and to stay away from drugs and divers temptations. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className="mt-8 text-center">
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
