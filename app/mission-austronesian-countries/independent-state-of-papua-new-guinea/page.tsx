import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '巴布亞紐幾內亞獨立國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂巴布亞紐幾內亞獨立國專區，探索巴布亞紐幾內亞的宣教工作與文化。',
  keywords: '高雄靈糧堂, 巴布亞紐幾內亞獨立國, 南島語系國家, 宣教使命, 文化探索',
}

export default function PapuaNewGuineaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="巴布亞紐幾內亞獨立國專區"
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
                <span className="text-[#21807a]">巴布亞紐幾內亞獨立國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">巴布亞紐幾內亞獨立國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Independent State of Papua New Guinea</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/EhFMJ2GxE7s?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為巴紐各族群的合一禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為巴紐各族群的合一禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the unity of all ethnic groups in Papua New Guinea</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，祢知道這個超過八百個族群的國家，糾結了許多古今以來的彼此殺戮和報復，懇求祢這位和平的君王赦免他們的罪、醫治他們的地，也拆毀各族群中間隔斷的牆，將兩下合而為一，使他們和睦、國民團結一致，教會信徒中的團契也能跨越傷痕而同心。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, You know that this country of more than 800 ethnic groups has struggled with many ancient and modern killings and revenge on each other, begging You, the peaceful King, to forgive their sins, heal their land, and demolish the partitions among the ethnic groups, uniting the two together into one, making them harmonious; and the fellowship among the believers in the church can cross the scars and be concentric. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為巴紐飛航宣教的安全禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為巴紐飛航宣教的安全禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the safety of Papua New Guinea Airlines mission</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，巴紐有不少地方必須倚賴飛機才能進入，求祢派遣使者圍繞那些駕駛飛機的同工及搭乘的宣教士，引導他們安全地在密林、高山、厚雲以及變幻莫測的天氣中飛行，起飛和降落都十分平安，並拯救他們脫離不法者對他們的攻擊，使福音的工作得以順利推展。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, there are many places in Papua New Guinea that rely on airplanes to enter. Please send angels around the co-workers who fly the airplanes and the missionarieswho take them to guide them safely in dense forests, mountains, thick clouds and unpredictable weather. During the flight, may takeoff and landing are very safe,and save them from the attack by lawbreakers, so that the work of the gospel can be carried out smoothly. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為巴紐的教會的門訓禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為巴紐的教會的門訓禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the disciples training of the church in Papua New Guinea</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，求祢大大興起擁有為父為母心腸的僕人，來裝備、有效門訓巴紐的弟兄姊妹，使他們認識純正的信仰，就離棄一切參雜的異教風俗，明白福音的大能，就不害怕巫術並懂得運用禱告的權柄，求聖靈吹入復興之風，使他們在祢豐盛的恩典中不斷更新、成長，滿有基督長成的身量。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, please raise up servants who have the heart of parents, to equip and effectively train the brothers and sisters of Papua New Guinea, so that they can understand the pure faith, and abandon all the pagan customs and understand the greatness of the gospel, and they are not afraid of witchcraft and know how to use the power of prayer. May the Holy Spirit blow into the wind of revival, so that they can constantly renew and grow in Your rich grace, full of the growth of Christ. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為巴布亞紐幾內亞的政權禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為巴布亞紐幾內亞的政權禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the Papua New Guinea regime</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，我們為這個官員貪污、治安不好的貧窮國家向祢呼求，求祢在巴紐的政治界興起公義、正直的領袖，勇敢對抗貪腐，並且秉持愛民的心，作出惠及全民而非僅圖利菁英階級的決策，使人民生活水平能夠提高，也求祢給政府官員智慧與前瞻性的遠見，在開發豐富的天然資源之時，也能兼顧生態環保及社會安定的需要，更願這地大多數信主的人們，能在祢裡面尋見富足。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, we appeal to You for this poor country where officials are corrupt and have poor security. May You raise up a righteous and upright leader in the political circle to bravely fight against corruption, and uphold the love of the people and make a benefit to the whole people rather than just benefiting the elite class, so that the people's living standards can be improved. We ask also for the wisdom and forward-looking vision of government officials in developing rich natural resources while taking into account the needs of ecological protection and social stability. I hope that most people who believe in Jesus will find wealth in You. In the name of the Lord Jesus Christ we pray. Amen!
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
