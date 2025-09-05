import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '越南社會主義共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂越南社會主義共和國專區，探索越南的宣教工作與文化。',
  keywords: '高雄靈糧堂, 越南社會主義共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function VietnamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="越南社會主義共和國專區"
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
                <span className="text-[#21807a]">越南社會主義共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">越南社會主義共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Socialist Republic of Vietnam</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/ThVoJ6sWNjY?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為越南的環保問題禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為越南的環保問題禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for environmental issues in Vietnam</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為越南這些年經濟的成長感謝祢，但是也為因此帶來的水、空氣和土壤污染，及紅樹林濫伐問題，呼求祢的幫助，祈求祢更多打開越南人民的眼睛，看見看守、保護上帝創造的管家責任，環保意識就覺醒過來。 主啊！我們更求祢掌權在越南政府的每個決策，使他們有智慧地兼顧城市發展與鄉村農民需要，也不因經濟利益而犧牲自然環境，並且願意看重國家未來的永續發展而努力。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we are grateful for the economic growth of Vietnam over the past few years, also call for Your help for the water, air and soil pollution, and mangrove deforestation issue. We ask You to open more eyes of Vietnamese, seeing the guard, protecting the stewardship created by God, and the awareness of environmental protection awakens. Oh God! We are also seeking You to rule every decision the Vietnamese government makes, so that they can intelligently balance urban development and the needs of rural farmers, without sacrifice the natural environment for economic benefits, and are willing to value the sustainable development of the country's future. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為越南的教會禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為越南的教會禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the church in Vietnam</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為極力遏制教會增長的越南禱告，求祢保護沒有註冊的教會，幫助他們有智慧來面對政府的壓力，並使用受逼迫而被監禁的信徒，在獄中作美好的見證，特別為農村地區的新生基督徒能得到良好的門訓、宣教士受到保護呼求祢的恩典，願祢帶領他們屬靈身量不斷成長，並且合而為一，每個宣教士都找到合適的住所，順利獲得簽證。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we pray for Vietnam, which is trying to contain the growth of the church, to protect unregistered churches, to help them to face the pressure of the government wisely, and to use the persecuted and imprisoned believers to be a good witness in prison. In particular, the new Christians in rural areas can get good disciples, and the missionaries are protected and crying for Your grace. May You lead their spiritual growth and let them grow together, and each missionary will find a suitable residence , and has the smooth access to the visa. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為越南的人權問題禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為越南的人權問題禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for human rights issues in Vietnam</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為關押許多政治犯、人權方面充滿爭議的越南禱告，求祢興起大能的膀臂，拔除社會共產主義在這個國家的毒根與禍害，打破那對少數民族和工會的壓制， 並使出版自由、言論自由與結社自由不再被掌控，讓這地的人民可以真正擁有基本人權和自由。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we pray for Vietnam who holds many political prisoners and debases human rights. May You raise the mighty arm to remove the poisonous roots and scourge of social communism in this country, and break the suppression of ethnic minorities and trade unions. May You give this country freedom of the press, expression and association, so that the people of this place can truly have basic human rights and freedoms. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為越南的教會領袖禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為越南的教會領袖禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for church leaders in Vietnam</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，求祢賜下智慧給越南教會的領袖們，使他們面對可能帶來限制和控制的宗教修訂時，能想出應對的方案，也求祢安慰遭逼迫的信徒、堅固遇到異端迷惑的主內肢體，並賜福傳道人的培訓與家教會的拓殖運動，使福音更多廣傳在越南。奉主耶穌基督的名禱告。阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, may You give wisdom to the leaders of the Vietnamese Church so that they can come up with a solution to the religious law that may bring restrictions and controls, and comfort the persecuted believers, strengthen brothers and sisters when encountering the heretical delusion. May You bless the training of the preachers and the colonization of home churches, so that the Gospel is more widely spread. In the name of the Lord Jesus Christ we pray. Amen!
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
