import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: '菲律賓共和國專區 | 高雄靈糧堂 - 南島語系國家',
  description: '高雄靈糧堂菲律賓共和國專區，探索菲律賓的宣教工作與文化。',
  keywords: '高雄靈糧堂, 菲律賓共和國, 南島語系國家, 宣教使命, 文化探索',
}

export default function PhilippinesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="菲律賓共和國專區"
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
                <span className="text-[#21807a]">菲律賓共和國專區</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12 md:bg-[#fe7f4d] md:py-10 md:pb-6">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">菲律賓共和國</h1>
                  <h2 className="text-2xl text-gray-600 mb-4 md:text-[#434343]">Republic of The Philippines</h2>
                </div>

                {/* Video Section */}
                <div className="mb-12">
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/rvxpAIRV2HA?feature=oembed&wmode=opaque&rel=0" 
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
                  {/* 為菲律賓禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為菲律賓禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Philippine</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，求祢在菲律賓復還屬祢的公義審判官與謀士，使這個國家得稱為公義之國、忠信之城，也求祢照著祢豐盛的慈愛與憐憫，醫好因著貧窮、毒品、暴力、獨裁統治而傷心的人，裹好向來受到歧視、欺壓的婦女傷處。主啊！求祢不斷更新並興起菲律賓教會，勇敢在職場上為祢作見證，並特別保守南部人民及外國宣教士的平安，使他們遠離回教激進份子的威脅恐嚇及殘害。願主更多醫治、眷顧這個國家。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Heavenly Father, may You build up righteous judges and counselors in Philippine, so that this country can be called the kingdom of righteousness and the city of faithfulness. May Your mercy and compassion heal the people that are brokenhearted by poverty, drugs, violence, dictatorship and wrap up the wounds of women who have always been discriminated against and oppressed. Oh God! Please constantly update and raise the Philippine Church so the Christians bravely testify in the workplace. May You protect the southern people and foreign missionaries from the threat, intimidation and murder of Muslim radicals. May the Lord heal and take care of this country. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為菲律賓塔爾火山噴發禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為菲律賓塔爾火山噴發禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for Taal volcano eruption in the Philippines</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        掌管萬有的父神，我們為菲律賓這座危險的複式火山噴發呼求祢的幫助，求祢照著祢極豐盛的憐憫與極大的全能，把它爆發的威力減到最低，使它不致引發海嘯或其他更大的傷害，更求祢保護當地居民和遊客的安危，並安慰他們被迫撤離的傷心與難過。 甚願祢賜給菲律賓政府智慧，知道如何作相關的應變措施，並預備好面對未來可能持續噴發而帶來的各種影響。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        God Father, You are in charge of all things. We are crying out for Your help for this dangerous volcano eruption in the Philippines, and in accordance with Your abundant compassion and great omnipotence, please minimize the power of its explosion so that it will not cause tsunami or other greater injuries. May You protect the safety of local residents and tourists, and comfort them for the sadness of their forced evacuation. Please give the Philippine government wisdom to know how to take relevant contingency measures and prepare for the various impacts that future eruptions may bring. In the name of the Lord Jesus Christ we pray. Amen!
                      </p>
                    </div>
                  </div>

                  {/* 為菲律賓嚴峻疫情禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為菲律賓嚴峻疫情禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the severe epidemic in the Philippines</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們將菲律賓所面對疫情的嚴峻向祢呼求，懇求祢憐憫、醫治這個國家；聖靈烈火來焚燒所有的病毒與變種病毒，我們宣告病毒不能存活並停止蔓延；也為當地所有醫護人員禱告，求祢用大小恩惠的盾牌保護他們不受任何感染，為這地百姓可以提升施打疫苗的涵概率，宣告祢必伸手拯救他們脫離一切疾病所帶來的死亡，奉耶穌基督的名禱告，阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we plead with You for the severity of the epidemic in the Philippines, and beg You to have mercy and heal this country; the holy fire will burn all viruses and variant viruses, and we declare that the virus cannot survive and stop spreading. Pray for all medical staff to protect them from any infection with shields of large and small favors, to increase the probability of vaccinations for the people of this place, and declare that You will reach out to save them from all deaths caused by diseases. In Jesus Christ'name we pray, amen!
                      </p>
                    </div>
                  </div>

                  {/* 為菲律賓教會禱告 */}
                  <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-[#333] mb-4">為菲律賓教會禱告</h3>
                    <h4 className="text-lg text-gray-600 mb-4">Pray for the church in the Philippines</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        親愛的天父，我們為菲律賓的教會同心的禱告；求主澆灌聖靈在菲律賓的眾教會，使教會興起並且火熱的傳揚基督福音，祝福教會領受牧養群羊的恩膏使神的國度得以擴張、基督的名可以得到榮耀。也為他們能接觸到對福音敞開的佛教徒與穆斯林信徒，讓教會幫助他們認識神的真理並且領受從神來的愛和能力。奉主耶穌基督的名禱告。阿們！
                      </p>
                      <p className="text-gray-600 leading-relaxed italic">
                        Dear Father, we pray with one heart for the churches in the Philippines; pray that the Lord will pour out the Holy Spirit in the churches in the Philippines, so that the churches will rise up and spread the gospel of Christ, bless the churches to receive the anointing of shepherding the flocks so that the kingdom of God will be spread, and the name of Christ can be glorified. It also allows them to reach out to Buddhists and Muslims who are open to the gospel, and let the church help them to know the truth of God and receive the love and power from God. In the name of the Lord Jesus Christ we pray. Amen!
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
