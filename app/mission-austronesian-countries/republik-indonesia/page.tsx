import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '印度尼西亞共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂印度尼西亞共和國專區，探索印度尼西亞的宣教工作與文化。',
  keywords: '高雄靈糧堂, 印度尼西亞共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function IndonesiaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="印度尼西亞共和國專區"
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
                <span className="text-[#21807a]">印度尼西亞共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">印度尼西亞共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republik Indonesia</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/s4giUSDYzLI?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為印尼教會更多影響社會禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為印尼教會更多影響社會禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for more influence on society from Indonesian churches</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求祢的愛時常激勵印尼的弟兄姐妹，如同祢過去激勵保羅那樣，使他們委身於活出公義、憐憫與合一的生命，願祢多多加給他們各樣的種子，又增添他們仁義的果子，叫他們凡事富足，可以多多施捨、幫助他們周遭有需要的人，來影響並轉化印尼的社會，藉著他們使感謝、榮耀歸於祢。奉主耶穌基督的名禱告。阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, may Your love inspire the brothers and sisters of Indonesia, as You inspired Paul in the past, to commit themselves to the life of righteousness, compassion and unity, and give them more seeds and add them fruit of righteousness and devotion,that they may be rich in all things, can give alms to help those who are in need, to influence and transform the Indonesian society, and to give thanks and glory to You. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為印尼的執政掌權者禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為印尼的執政掌權者禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the head of all rule and authority in Indonesia</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父， 我們為印尼佐科威總統及其帶領的政府團隊禱告，求祢保守他們的心純全正直，行審判不憑眼見，斷是非也不憑耳聞，天天被祢智慧的靈、謀略的靈充滿，使他們能同心帶領全國創造更多就業機會、幫助國家經濟成長，並讓印尼走向真正的民主與宗教自由。奉主耶穌基督的名禱告。阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we pray for Indonesia president Joko Widodo and the government team led by them to keep their hearts pure and honest, to judge neither by sight nor by hearing, and to be full of spirit of wisdom and spirit of wise guiding every day, enabling them to lead the country to create more jobs, help the country's economic growth, and allow Indonesia to move towards true democracy and religious freedom. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為印尼遭遇的災害禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為印尼遭遇的災害禱告 Praying for Indonesia for recent disasters</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為印尼嚴重的海嘯、地震災情及火山爆發呼求祢的憐憫，求祢在這艱難的時刻，安慰心靈憂傷、恐懼、無助的人們，並賜給印尼政府智慧，採取有效的策略幫助災民，也求祢賜福印尼教會的救助行動，能順利、有次序的分送到災民手中。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we are crying out for Your mercy because of the severe tsunami, earthquake and volcanic eruption in Indonesia. May You help people who are sad, fearful and helpless in this difficult time, and give the Indonesian government wisdom to take effective strategies to help the victims, and also bless the Indonesian church's rescue operations to smoothly and orderly distribute relief supplies to the victims. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為印尼的基督徒禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為印尼的基督徒禱告 Praying for Christians in Indonesia</h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求祢醫治在泗水因恐怖攻擊而受傷的弟兄姊妹，並安撫當地基督徒們驚恐的心，也求祢拿起大小的盾牌來護衛印尼的基督徒，格外在這段穆斯林齋戒的日子，把他們藏在祢翅膀的蔭下，遠離一切仇敵的攻擊。奉主耶穌基督的名宣告：堅心倚賴祢的，祢必保守他們十分平安。阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, may You heal the brethren and sisters who were wounded in Surabaya due to the terrorist attacks, and sooth the terrified hearts of local Christians, and also please pick up large and small shields to protect the Christians in Indonesia. In the days of Ramadan, hide them in the shadow of Your wings and keep them away from the attacks of all their enemies. In the name of the Lord Jesus Christ, we declare: You will keep in perfect peace him whose mind is steadfast, because he trusts in You. Amen!
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
