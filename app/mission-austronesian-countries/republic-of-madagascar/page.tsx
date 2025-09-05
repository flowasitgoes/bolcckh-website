import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '馬達加斯加共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂馬達加斯加共和國專區，探索馬達加斯加的宣教工作與文化。',
  keywords: '高雄靈糧堂, 馬達加斯加共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function MadagascarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="馬達加斯加共和國專區"
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
                <span className="text-[#21807a]">馬達加斯加共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">馬達加斯加共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republic of Madagascar</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為馬達加斯加禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬達加斯加禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Madagascar</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求祢按著祢豐盛的慈愛與憐憫，為著祢在馬達加斯加的榮耀，興起善於治理的領袖，帶領這個國家有好的經濟發展，使人民脫離貧窮；也求祢幫助這個國家的基督徒，面對傳統祖靈崇拜和巫術的衝擊時，能堅守信仰、不隨波逐流，並且神學的訓練工作能回歸聖經教導而不受世俗異教影響。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, according to Your abundant grace and mercy, for the glory of Your Fatherhood in Madagascar, we ask You to raise a leader who is good at governance to lead the nation with good economic development that help people out of poverty; we also ask You to help the Christians in this country in facing the traditional ancestral worship and the impact of witchcraft that still can adhere to the faith, not following the crowd, and the theological training can return to the Bible teaching without the influence of secular paganism. Pray in the name of the Lord Jesus Christ. Amen !
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
