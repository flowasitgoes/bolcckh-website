import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '東帝汶民主共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂東帝汶民主共和國專區，探索東帝汶的宣教工作與文化。',
  keywords: '高雄靈糧堂, 東帝汶民主共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function TimorLestePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="東帝汶民主共和國專區"
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
                <span className="text-[#21807a]">東帝汶民主共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">東帝汶民主共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Democratic Republic of Timor-Leste</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為東帝汶禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為東帝汶禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for East Timor</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，求祢醫治東帝汶多年被侵占的傷害，使人們能夠彼此和好，也求祢興起基督徒開設有效的全人事工與門徒訓練事工，幫助下一代靈性及道德復原。特別求祢憐恤、眷顧這個貧窮的國家，讓更多的外資及觀光投入其中，使人民的生活得著改善。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, please heal the wounds of East Timor caused by long term invasion, so that people can reconcile with each other. May You build up Christians to establish effective ministry and discipleship to further the spirituality and moral restoration of the next generation. May You have mercy on this poor country to have more foreign investment and sightseeing industry, so that people's lives can be improved. In the name of the Lord Jesus Christ we pray. Amen!
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
