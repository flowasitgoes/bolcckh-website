import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '馬來西亞專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂馬來西亞專區，探索馬來西亞的宣教工作與文化。',
  keywords: '高雄靈糧堂, 馬來西亞, 南島語系國家, 宣教使命, 文化探索',
}

export default function MalaysiaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="馬來西亞專區"
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
                <span className="text-[#21807a]">馬來西亞專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">馬來西亞</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Malaysia</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/ds4BcOZ7DhA?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為馬來西亞半島原住民禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬來西亞半島原住民禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the aboriginal people of Peninsular Malaysia</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們代替馬來西亞政府向祢認罪，求祢赦免我們過去任憑原住民被新移民及政府政策忽視，使他們受到歧視、搶奪、壓迫、限制及欺淩等不公平的對待，活在受屈、無助、無奈、自卑、沮喪之中。 父神，在這個祢正恢復屬地長子全球原住民的時候，求祢介入，為其中的困苦人伸冤，憐恤、搭救窮乏的他們，並興起政治領袖來關注他們的需要，恢復他們應有的權益及尊榮。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we have pleaded guilty to the sins of the Malaysian government, asking You to forgive us for letting the aborigines be ignored by new immigrants and government policies, causing them to be treated unfairly, such as discrimination, looting, oppression, restrictions and bullying, so that they feel aggrieved, helpless, inferior, and depressed. Father God, now is the time for restoration of the world's first-born aborigines, we ask You to intervene, to pity the poor, to rescue the needy, and to raise political leaders to pay attention to their needs and restore their rights, interests, and honor. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為馬來西亞人民的合一禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬來西亞人民的合一禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the unity of the Malaysian people</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的主，我們為美麗且多種族的馬來西亞禱告，祈求祢把這個國家的政權擔在肩頭上，以公平公義來治理它，並賜下豐盛的慈愛，弭平過去因種族歧視、宗教迫害與政治貪腐帶來的裂痕，使馬來西亞人民不分種族、不分宗教，都能因為同樣愛著這片土地而互重、互助、互諒，齊心携手建造這個國家。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Lord, we pray for the beautiful and multi-ethnic Malaysia, praying that You carry the country's political power on Your shoulders, govern the country with fairness and justice, and give it a rich love, flattening past racial discrimination, religious persecution and the rift brought about by political corruption, so that the Malaysian people can join hands in building this country because of love and mutual understanding, regardless of race or religion. In the name of the Lord Jesus Christ we pray. Amen !
                      </p>
                    </div>
                  </div>

                  {/* 為馬來西亞政府禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為馬來西亞政府禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the Malaysian government</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，感謝祢2021年允許馬來西亞有新的政權替換，求祢保守新首相馬哈迪和他所帶領的政府團隊，有清潔的心和正直的靈，以祢的真理與公義來治理大馬，也求祢提升、安置敬畏祢的人在各個重要的位置，使馬來西亞各樣的政策及法令都與神對齊，整個國家被翻轉進入新的氣象。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, thank You for allowing Malaysia to replace the new regime in 2021. We ask You to let the new Prime Minister Mahathir and the government team he led have a clean heart and a spirit of integrity to govern Malaysia with truth and justie. We also ask You to promote and place people that revere You in all important positions, so that Malaysia's various policies and decrees are aligned with God, and the whole country is turned into a new atmosphere. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為大馬的穆斯林禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為大馬的穆斯林禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Muslims in Malaysia</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        榮耀的父神，求祢將那賜人智慧和啟示的靈賞給馬來西亞的穆斯林，照明他們心中的眼睛，使他們真認識祢，能得著耶穌基督的救恩，特別求祢喚醒年輕人，不再受煽動加入極端主義穆斯林組織，而是走在祢引導的道路上。願祢的平安臨到他們，一切恐懼與壓制盡都離開。奉主耶穌基督的名禱告。阿們 !
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Father of Glory, we ask You to grant the Spirit that gives wisdom and revelation to the Muslims of Malaysia, to illuminate the eyes of their hearts, to make them really know You, to receive the salvation of Jesus Christ.Please awaken young people, no longer to be incited to join extremist Muslim organizations instead of taking the path You guide them.May Your peace come to them, and all fear and suppression leave. In the name of the Lord Jesus Christ we pray. Amen!
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
