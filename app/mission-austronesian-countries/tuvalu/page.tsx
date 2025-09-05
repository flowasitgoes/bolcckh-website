import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '吐瓦魯專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂吐瓦魯專區，探索吐瓦魯的宣教工作與文化。',
  keywords: '高雄靈糧堂, 吐瓦魯, 南島語系國家, 宣教使命, 文化探索',
}

export default function TuvaluPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="吐瓦魯專區"
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
                <span className="text-[#21807a]">吐瓦魯專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">吐瓦魯</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Tuvalu</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為吐瓦魯禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為吐瓦魯禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Tuvalu</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為面對貪腐、政治騙局及貧窮考驗的吐瓦魯百姓禱告，祈求祢幫助當中的基督徒，能倚靠祢而不懼怕，並抵擋住世俗潮流對他們價值觀的衝擊與影響。 主啊！祢知道這個國家正因海平面上升而面對存亡的危機，求祢保守看顧他們，也開路給他們年輕人有優質教育的機會，使他們能有打魚以外的其他工作機會。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we pray for the Tuvaluan people who face corruption, political scams and poverty trials, may You help the Christians there to trust without fear, and resist the impact of secular trends on their values. Oh God! You know that this country is facing a crisis of survival due to rising sea levels. May You look after them and give young people the opportunity to have quality education so that they can have other job opportunities other than fishing. In the name of the Lord Jesus Christ we pray. Amen!
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
