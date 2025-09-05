import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '紐西蘭專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂紐西蘭專區，探索紐西蘭的宣教工作與文化。',
  keywords: '高雄靈糧堂, 紐西蘭, 南島語系國家, 宣教使命, 文化探索',
}

export default function NewZealandPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="紐西蘭專區"
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
                <span className="text-[#21807a]">紐西蘭專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">紐西蘭</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">New Zealand</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為紐西蘭的復興禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為紐西蘭的復興禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for New Zealand's revival</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為曾經是基督教國家，如今卻陷入信仰危機的紐西蘭代禱，求祢用大能的手，帶領紐西蘭百姓的心回轉，不再跟隨世俗多元文化的風潮而拒絕祢，特別求祢甦醒那已經對祢失去真實的愛與敬拜的基督徒，願祢仰起臉來光照他們，使他們靈命復興，恢復信仰的初衷與火熱，進而起來轉化這個國家，使紐西蘭進入命定。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we pray for New Zealand, which was once a Christian country, but is now in crisis of faith. Please lead the hearts of New Zealand people return by using Your powerful hands, no longer follow the tide of secular multiculturalism and refuse You, especially asking You to wake up those Christians who have lost true love and worship to You. May You lift up Your light to illuminate them, revive them spiritually, restore their original purpose and fiery spirit, and then transform this country. Leading New Zealand into destiny. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為紐西蘭的年輕人禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為紐西蘭的年輕人禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Young People in New Zealand</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，紐西蘭的年輕人有極高的自殺率，還有嚴重的校園霸淩及家暴情形，為此我們呼求祢，伸手醫治他們裡面的破碎、纏裹他們的傷處，並扶持跌倒的、扶起被壓下的，靈魂的大牧人啊！求祢親自尋找並拯救他們的靈魂，使他們和我們一樣同歸於祢的名下，在祢愛中恢復信心和盼望。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear heavenly Father, young people in New Zealand have a very high suicide rate, as well as severe school bullying and domestic violence. For this reason, we cry out to You and may You reach out to heal their broken inside and dress their wounds; and support the fallen, lifted the oppressed. Great Shepherd of our soul! Please seek and save their souls and restore them to Your name, like us, to restore faith and hope in Your love. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為興起紐西蘭的原住民教會禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為興起紐西蘭的原住民教會禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Raising of New Zealand's Aboriginal Church</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，紐西蘭的原住民是祢所預備的關鍵的復興器皿，求祢在紐西蘭原住民教會中，興起更多委身的領袖，並大大使用原住民教會，廣傳福音給他們的族人同胞，拯救他們的靈魂，喚醒他們脫離祖靈崇拜、酗酒以及性氾濫等黑暗權勢的轄制，進入神光明國度，並站在他們的位份上為祢發光。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear heavenly Father, the aborigines of New Zealand are the key revival vessels prepared by You. Please raise up more committed leaders in the aboriginal church of New Zealand, and use the aboriginal church to spread the gospel to their kinsmen to save their souls, awaken them from the dark powers of worship of ancestors, alcoholism, and sexual abuse, enter the bright Kingdom of God, and stand in their place to shine for You. In the name of the Lord Jesus Christ we pray. Amen!
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
