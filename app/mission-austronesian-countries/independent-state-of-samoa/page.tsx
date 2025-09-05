import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '薩摩亞獨立國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂薩摩亞獨立國專區，探索薩摩亞的宣教工作與文化。',
  keywords: '高雄靈糧堂, 薩摩亞獨立國, 南島語系國家, 宣教使命, 文化探索',
}

export default function SamoaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="薩摩亞獨立國專區"
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
                <span className="text-[#21807a]">薩摩亞獨立國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">薩摩亞獨立國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Independent State of Samoa</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/ZxMV-Uch5dI?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為薩摩亞教育禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為薩摩亞教育禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for education in Samoa</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，願祢的真理、公義、聖潔進入薩摩亞的教育界與校園。求主興起更多愛主並委身教育工作者進入各年齡層的教育單位與校園。奉主的名祝福薩摩亞當地教育界的官員、教師及學生，都能謹守遵行神的話，使他們敬畏耶和華，領受智慧。奉主耶穌基督的名禱告,阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, may Your truth, justice, and holiness enter the education and campus of Samoa. Pray that the Lord will raise up more love for the Lord and commit educators to enter educational units and campuses of all ages. In the name of the Lord, bless the officials, teachers, and students of the local education circle in Samoa to observe and obey the word of God so that they will fear the Lord and receive wisdom. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為薩摩亞國家禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為薩摩亞國家禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray For the country Samoa</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為薩摩亞這個國家向祢獻上感謝。 經過宣教士多年的耕耘與努力，百姓多數已聽聞福音，並承認祢是他們的主。 求祢也復興並更新當地教會，使他們遠離一切不是從神而來的錯誤思想。 扎實地傳遞聖經真理，幫助弟兄姊妹認清異端的謬誤。 奉主耶穌基督的名禱告,阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear heavenly father,We thank You for the country of Samoa. After years of hard work by missionaries, most of the people have heard the gospel, and admit that You are their master. You have also revived and renewed the local church, keep them away from all wrong thoughts that are not from God. Disseminate the truth of the Bible in a down-to-earth manner and help brothers and sisters to recognize the fallacies of heresy. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為薩摩亞的家庭禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為薩摩亞的家庭禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for families in Samoa</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求主祝福每一個家庭，都能按著主的教導養育兒女，賜福每位父、母親懂得敬畏真神，有從神而來的智慧將兒女帶到祢面前，幫助兒女認識神，熟悉神的話語，遵循神的典章律例，讓屬神的價值觀深刻在兒女的心版上，成為兒女生命的價值觀，一生都有從神而來的引導與智慧，選擇行走在光明、正直、聖潔的道路上。奉主耶穌基督的名禱告,阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, please bless every family and nurture their children according to the Lord's teachings. Bless every father and mother to know how to fear the true God and have the wisdom from God to bring their children to You and help them understand God, be familiar with God's words, follow God's laws and regulations, let God's values be deeply embedded in the hearts of children, and become the values of children's lives. They have guidance and wisdom from God throughout their lives and choose to walk in the light, on the path of integrity and holiness. In the name of the Lord Jesus Christ we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為薩摩亞禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為薩摩亞禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Samoa</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的上帝，為這個以基督教為國教的國家感謝祢，求祢繼續幫助他們在真理上紮根，使他們能認出異端的錯謬之處，並竭力保守自己活出聖靈所賜的合一，也願神憐憫、眷顧薩摩亞國內那些失業及低度就業者，使他們脫離貧窮的困境。奉主耶穌基督的名禱告。阿們!
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear God, thank You for this Christian nation, and please continue to help them root in the truth so that they will recognize the error of the heresy and to keep living in the union of the Holy Spirit. May God have mercy on the jobless and under-employed ones in Samoa to lift them from the plight of poverty. In the name of the Lord Jesus Christ we pray. Amen!
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
