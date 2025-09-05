import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '斐濟共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂斐濟共和國專區，探索斐濟的宣教工作與文化。',
  keywords: '高雄靈糧堂, 斐濟共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function FijiPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="斐濟共和國專區"
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
                <span className="text-[#21807a]">斐濟共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">斐濟共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republic of Fiji</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為斐濟禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為斐濟禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Fiji</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，我們為斐濟過去年間的屬靈復興感謝祢，求聖靈繼續帶下更多和好與悔改在各個族群中，促成種族及信徒間的合一。也求祢賜福宣教及佈道的培訓工作，使更多斐濟的基督徒為祢興起發光，特別為極少聽見福音的斐濟印度人與穆斯林禱告，呼求祢大大動工，使這個國家愈發邁向福音化。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, we thank You for the spiritual rejuvenation of Fiji in the past year, and may the Holy Spirit continue to bring more peace and repentance among all ethnic groups to promote unity among races and believers. May You also bless the training work of our missionaries and evangelism so that more Fijian Christians will arise and shine for You, especially for Fijian Indians and Muslims who seldom hear the gospel. We call on you to make great strides in moving the country toward evangelization. In the name of the Lord Jesus Christ we pray. Amen!
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
