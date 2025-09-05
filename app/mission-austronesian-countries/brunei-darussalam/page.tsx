import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '汶萊和平之國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂汶萊和平之國專區，探索汶萊的宣教工作與文化。',
  keywords: '高雄靈糧堂, 汶萊和平之國, 南島語系國家, 宣教使命, 文化探索',
}

export default function BruneiPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="汶萊和平之國專區"
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
                <span className="text-[#21807a]">汶萊和平之國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">汶萊和平之國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Brunei Darussalam</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為汶萊禱告 Praying for Brunei */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為汶萊禱告 Praying for Brunei</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求祢掌權在汶萊的蘇丹國王及其王室家族身上，使他們的心在祢手中，好像隴溝的水隨意流轉，能夠在解釋和執行法案時，有從神來的智慧及作出合理的判斷，並且被吸引來歸向祢。 求祢也堅固當地的教會，在政府的逼迫下，仍然有成熟的屬靈生命和聖經訓練，並興起發光、傳揚福音。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, may You be in power of the king of Sudan and the royal family in Brunei, to have their hearts in Your hand, as are the watercourses, You turn them whichever way You will, so that they have wisdom from You and make reasonable judgments whenever explaining and enforcing bill, and be attracted to return to You. May You also strengthen the local churches, even under the pressure of the government, there is still mature spiritual life and biblical training, to arises and shine and spread gospel. In the name of the Lord Jesus Christ we pray. Amen!
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
