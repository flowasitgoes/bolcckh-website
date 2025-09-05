import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '諾魯共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂諾魯共和國專區，探索諾魯的宣教工作與文化。',
  keywords: '高雄靈糧堂, 諾魯共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function NauruPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="諾魯共和國專區"
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
                <span className="text-[#21807a]">諾魯共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">諾魯共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republic of Nauru</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/HvYF53CPAXU?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為諾魯經濟與社會變遷禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為諾魯經濟與社會變遷禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the economic and social changes of Nauru</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為諾魯共和國的經濟與人口外移禱告；許多人離鄉背井出國尋找工作機會或出國留學，人口因此嚴重外移；留在家鄉的青年無法找到一定水準的工作以及教育機會而感到灰心並且容易染上酒癮。求祢施恩憐憫島上的年輕人在這經濟困難與複雜的社會挑戰中，能找到健全、有前景、榮耀神的出路，奉主耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we pray for the economy and population migration of the Nauru Republic; many people leave their hometowns to find jobs or study abroad, and the population migrates seriously because of this; young people who stay in their hometowns cannot find a certain level of work and education opportunities. They feel discouraged and get addicted to alcohol easily. Please show mercy to the young people on the island amidst these economic difficulties and complex social challenges. Let them find a sound, promising, and glorious way to glorify God. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為諾魯國家領受神的命定與呼召禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為諾魯國家領受神的命定與呼召禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the country of Nauru to receive the destiny and call of God</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為諾魯這個微小的海島國家祝福，求祢興起他們，使他們能進入祢對他們的呼召與命定；起初雖然微小，終久必甚發達。祝福他們成為給予並祝福列邦的國家；並且承接福音的最後一棒一起將福音傳回耶路撒冷，等候主的再臨。奉主耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we bless the tiny island nation of Nauru, please raise them up so that they can enter into Your calling and destiny to them; although they are small at first, they will be prosperous in the end. Bless them to become a nation that gives and blesses the nations; and to take the last stick of the gospel together to preach the gospel back to Jerusalem, waiting for the Lord's return. Pray in the name of the Lord Jesus Christ, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為諾魯的教會與信徒禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為諾魯的教會與信徒禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the church and believers in Nauru</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為諾魯當地教會的復興以及信徒能活出屬天的樣式禱告，祝福諾魯當地的眾教會在主裡同心合一，宣告合一就帶下屬靈的權柄得以轉化國家社會的屬靈氛圍，將屬天的榮耀帶下影響屬地的環境，祝福每一位信徒活出聖潔、信心、有活潑的盼望、有影響力。奉主耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we pray for the revival of the local church in Nauru and the believers can live in a heavenly manner. We bless the local churches in Nauru to be united in the Lord. Declaring unity will bring spiritual authority to transform the country. The spiritual atmosphere of society will bring the glory of heaven and influence the environment of the earth, blessing every believer to live out holiness, faith, lively hope, and influence. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為諾魯的執政領袖禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為諾魯的執政領袖禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the ruling leader of Nauru</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為諾魯這個國家是基督化國家來向祢獻上感恩，因為他們宣告以「上帝的旨意至高無上」成為國家治理原則；為諾魯總統–萊昂納爾.安格明祝福，求主賜他有智慧、有聰明、有謀略，使他有為父的心帶領政府、部會首長與領袖，將百姓帶進蒙福之地。奉主耶穌基督名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we are grateful to You for the country of Nauru as a Christian nation, because they proclaimed that "God's will is supreme" as the principle of national governance; blessed for President of Nauru, Lionel Aingimea, please give him wisdom, cleverness, and strategy, so that he can lead the government, ministers and leaders as a father, and bring the people into the blessed land. In the name of the Lord Jesus Christ we pray, amen!
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
