import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '新加坡共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂新加坡共和國專區，探索新加坡的宣教工作與文化。',
  keywords: '高雄靈糧堂, 新加坡共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function SingaporePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="新加坡共和國專區"
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
                <span className="text-[#21807a]">新加坡共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">新加坡共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republic of Singapore</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/RYCLb07QFuU?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為新加坡教會更多關懷移民禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為新加坡教會更多關懷移民禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for more care for immigrants in Singapore</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們求祢賜下智能、膽量與開放的胸襟，給新加坡的基督徒，使他們更多向華人以外的馬來裔、印度裔、巴基斯坦裔傳講耶穌基督，也求祢憐憫的心腸激動他們的心，興起更多的事工來關懷貧苦的大量移民，使他們從祢兒女身上真實地感受到基督的愛，而願意向祢敞開心門。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we ask You to give Christians in Singapore wisdom, courage and open-mindedness, so that they can preach to Malays, Indians, and Pakistani，Indians, and Pakistani about Jesus Christ. Please also be merciful to stimulate their hearts and build up more ministries to care for the large number of poor immigrants,such that they can truly feel the love of Christ from Your children and are willing to open their hearts to You. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為新加坡政府禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為新加坡政府禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the Singapore Government</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為新加坡因著疫情緣故，貧富差距加劇、社會更趨向分裂的狀況，向祢大大呼求，求祢施恩的手大能地介入，幫助新加坡政府不只著力對抗第二波疫情，更在推動經濟復甦的同時，有智慧地處理貧富差距的問題, 讓那些外籍勞動的「客工」生活品質得到實質的提升。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, we cry out to You for Singapore's growing gap between the rich and the poor and the division of society due to the epidemic, and we beg You to help the Singaporean government not only fight the second wave of the epidemic while promoting economic recovery, but wisely handles the problem of the gap between the rich and the poor, so that the quality of life of the "guest workers" of foreign labor can be substantially improved. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為新加坡的教會禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為新加坡的教會禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the church in Singapore</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為新加坡有廉能與正直的政府，以及有效率的制度感謝祢，但我們也為步調快速、高度金融科技發展所帶來的不耐、3C產品沉溺與情感疏離等問題向祢呼求，求祢賜給那地百姓安靜的心，打破瑪門權勢的轄制與綑綁，並恢復人們對婚姻、家庭的責任感。 主啊！我們也求祢賜下智能、膽量與開放的胸襟給新加坡的基督徒，使他們更多向華人以外的馬來裔、印度裔、巴基斯坦裔傳講耶穌基督，並興起更多事工關懷貧苦的大量移民。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we are grateful to You for Singapore's honest government and efficient system, but we also ask for Your help for the problems with impatience brought by the rapid development of high-speed financial technology, the indulgence of 3C products and emotional alienation. May You quiet the heart of the people of the land, break the control and binding of the Mammon power, and restore people's sense of responsibility for marriage and family. Oh God! May You grant wisdom, courage and openness of the mind to Christians in Singapore, so that they can preach more to the Malays, Indians, and Pakistanis outside the Chinese circle, and raise more ministries to care for the poor immigrants. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為疫情中更多新加坡人信主禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為疫情中更多新加坡人信主禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for more Singaporeans to believe in the Lord amid the pandemic</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，祈求祢攪動新加坡人的心，在這充滿恐懼、欠缺盼望的疫情時刻，挑起一種極深尋求內在平安的渴望，和尋求生命意義和目的的神聖好奇心，使他們尋見祢就歸向祢，不再陷於世俗主義與對宗教的逃避。 奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, I pray that You will stir the hearts of Singaporeans, to stir up a deep longing for inner peace and a divine curiosity for the meaning and purpose of life in this time of fear and hopelessness, so that they may find You will come to You, and no longer fall into secularism and escape from religion. In the name of the Lord Jesus Christ we pray. Amen!
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
