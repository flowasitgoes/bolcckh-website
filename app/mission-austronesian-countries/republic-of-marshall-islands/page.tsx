import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '馬紹爾群島共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂馬紹爾群島共和國專區，探索馬紹爾群島的宣教工作與文化。',
  keywords: '高雄靈糧堂, 馬紹爾群島共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function MarshallIslandsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="馬紹爾群島共和國專區"
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
                <span className="text-[#21807a]">馬紹爾群島共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">馬紹爾群島共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republic of the Marshall Islands</h2>
                </div>

                {/* Prayer Sections */}
                <div className="space-y-8">
                  {/* 為馬紹爾群島共和國禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬紹爾群島共和國禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the Republic of the Marshall Islands</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，求祢賜給馬紹爾群島的領袖智慧和使命，打破國民習慣倚賴美國的心態，帶領國家開創出經濟上的成長。也求祢更新基督徒的屬靈生命，幫助教會的門訓紮實進行，使教會興盛，在社會上發揮屬靈的影響力。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, please give wisdom and mission to the leaders of the Marshall Islands, break the national mentality of relying on the USA, and lead the country to create economic growth. We also ask You to renew the spiritual life of Christians, help strengthen the church's disciple training, to prosper the church and give it spiritual influence in society. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為馬紹爾群島的基督徒靈命復興禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬紹爾群島的基督徒靈命復興禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the spiritual revival of Christians in the Marshall Islands</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為這個國家大部份是基督徒向祢感恩，求祢聖靈的風吹入祢子民的生命，帶來靈命復興，使所有沉睡的，都醒過來；冷淡的，都火熱起來；彎曲的，都直起來；灰心、沮喪的，都亮起來；憂傷、悲哀的，都喜樂起來，成為祢極大的軍隊，在這個彎曲悖逆的世代，為祢作鹽作光，帶下轉化的影響力。願祢復興祢的作為，在這個國家，在這些年間。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we are grateful to You for that the majority of people are Christians in this country, and pray that the wind of Your Holy Spirit will blow into the lives of Your people, bring spiritual revival, and wake up all those who are asleep; indifferent, got fiery; curved, straightened; discouraged, depressed, all lit up; sad, all rejoiced, and become Your great army, in this curvy and rebellious generation, become salt and light for You, bring down the influence of conversion. May You revive Your actions in this country and in these years. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為馬紹爾的華人和當地百姓的關係禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬紹爾的華人和當地百姓的關係禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the relationship between the Chinese and the local people in Marshall</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求祢保守馬紹爾群島的華人和當地百姓的關係，讓祢豐盛的慈愛時常充滿他們，使他們互相尊重，樂意追求那促進和睦、彼此建立的事，在愛中恩慈相待、關係修復，更甚願華人教會在那地被祢興起成為族群合一的橋樑，正如祢透過耶穌使我們與祢和好一樣。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, please keep the relationship between the Chinese and the local people in the Marshall Islands, let Your abundant love always fill them, make them respect each other, willing to pursue the things that promote harmony and build up each other, treat each other kindly in love, the relationship is restored, and the Chinese church is more likely to be raised by You as a bridge of ethnic unity there, just as You made us reconcile with You through Jesus. In the name of the Lord Jesus Christ we pray. Amen!
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
