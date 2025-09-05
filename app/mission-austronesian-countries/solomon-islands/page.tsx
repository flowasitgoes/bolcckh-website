import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '索羅門群島專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂索羅門群島專區，探索索羅門群島的宣教工作與文化。',
  keywords: '高雄靈糧堂, 索羅門群島, 南島語系國家, 宣教使命, 文化探索',
}

export default function SolomonIslandsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="索羅門群島專區"
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
                <span className="text-[#21807a]">索羅門群島專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">索羅門群島</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Solomon Islands</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為索羅門群島的教會帶來族群和睦禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為索羅門群島的教會帶來族群和睦禱告 Prayer for bringing ethnic harmony to the church in the Solomon Islands</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，祢知道索羅門群島過去因種族緊張的關係而造成嚴重動亂與內戰，求祢赦免並大施憐憫，賜下愛的恩膏充滿當地的教會，讓屬祢的兒女活出的合一、彼此相愛，成為醫治、和好的工具，來纏裹這地百姓內裡的失落與傷痛，願這個國家如同它的名字一樣，是一個平安之地。奉主耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, You know that the Solomon Islands used to cause serious turmoil and civil wars due to racial tensions. Please forgive and show mercy, and give the anointing of love to fill the local churches, and let Your children live in unity, love for each other, become a tool of healing and reconciliation, to wrap up the loss and pain in the people of this land, and may this country be a peaceful place like its name. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為索羅門群島禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為索羅門群島禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the Solomon Islands</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，求祢保守所羅門群島的政權與經濟體系穩定，並促進各種族彼此間關係的復合，也求祢更新這個國家年輕一代基督徒的生命，使他們充滿活潑的靈力與動力，發揮真實的屬靈權柄的影響力，更求祢堅立「所羅門群島禱告殿」（SIHOP）的運作，晝夜為海島國家的救贖恩典代求。奉主耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, may You stabilize the power and economics of the Solomon Islands, and restore the complex relationship between the various races. May You renew the life of the young generation of Christians in this country, so that they are full of lively spiritual power, to truly influence the spiritual authority. May You strengthen the operation of the Solomon Islands Prayer House (SIHOP) to pray day and night for the salvation of the island nations. In the name of the Lord Jesus Christ we pray, Amen!
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
