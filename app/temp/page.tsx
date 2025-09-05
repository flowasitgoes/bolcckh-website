import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '南島語系國家清單 | 高雄靈糧堂 - 臨時頁面',
  description: '高雄靈糧堂南島語系靈糧國度家園清單，包含所有南島語系國家的專區連結。',
  keywords: '高雄靈糧堂, 南島語系國家, 專區清單, 宣教使命',
}

export default function TempPage() {
  const countries = [
    {
      name: '紐埃專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/niue/',
      slug: 'niue'
    },
    {
      name: '密克羅尼西亞聯邦專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/federated-states-of-micronesia/',
      slug: 'federated-states-of-micronesia'
    },
    {
      name: '汶萊和平之國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/brunei-darussalam/',
      slug: 'brunei-darussalam'
    },
    {
      name: '菲律賓共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-the-philippines/',
      slug: 'republic-of-the-philippines'
    },
    {
      name: '馬紹爾群島共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-marshall-islands/',
      slug: 'republic-of-marshall-islands'
    },
    {
      name: '馬來西亞專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/malaysia/',
      slug: 'malaysia'
    },
    {
      name: '東帝汶民主共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/democratic-republic-of-timor-leste/',
      slug: 'democratic-republic-of-timor-leste'
    },
    {
      name: '東加王國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/kingdom-of-tonga/',
      slug: 'kingdom-of-tonga'
    },
    {
      name: '吐瓦魯專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/tuvalu/',
      slug: 'tuvalu'
    },
    {
      name: '吉里巴斯共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-kiribati/',
      slug: 'republic-of-kiribati'
    },
    {
      name: '紐西蘭專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/new-zealand/',
      slug: 'new-zealand'
    },
    {
      name: '新加坡共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-singapore/',
      slug: 'republic-of-singapore'
    },
    {
      name: '越南社會主義共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/socialist-republic-of-vietnam/',
      slug: 'socialist-republic-of-vietnam'
    },
    {
      name: '薩摩亞獨立國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/independent-state-of-samoa/',
      slug: 'independent-state-of-samoa'
    },
    {
      name: '泰王國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/kingdom-of-thailand/',
      slug: 'kingdom-of-thailand'
    },
    {
      name: '巴布亞紐幾內亞獨立國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/independent-state-of-papua-new-guinea/',
      slug: 'independent-state-of-papua-new-guinea'
    },
    {
      name: '萬那杜共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-vanuatu/',
      slug: 'republic-of-vanuatu'
    },
    {
      name: '印度尼西亞共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republik-indonesia/',
      slug: 'republik-indonesia'
    },
    {
      name: '斐濟共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-fiji/',
      slug: 'republic-of-fiji'
    },
    {
      name: '索羅門群島專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/solomon-islands/',
      slug: 'solomon-islands'
    },
    {
      name: '帛琉共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-palau/',
      slug: 'republic-of-palau'
    },
    {
      name: '諾魯共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-nauru/',
      slug: 'republic-of-nauru'
    },
    {
      name: '馬達加斯加共和國專區',
      url: 'https://www.bolkh.org.tw/joinchurch/austronesian-countries/republic-of-madagascar/',
      slug: 'republic-of-madagascar'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="南島語系國家清單"
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
                <span className="text-[#21807a]">南島語系國家清單</span>
              </nav>

              {/* Main Content */}
              <div className="bg-white shadow-sm p-12">
                {/* Page Title */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-[#333] mb-4">南島語系靈糧國度家園清單</h1>
                  <p className="text-lg text-gray-600">共 {countries.length} 個南島語系靈糧國度家園</p>
                </div>

                {/* Countries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {countries.map((country, index) => (
                    <div key={country.slug} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-8 h-8 bg-[#21807a] rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <div className="text-sm text-gray-500">
                            {country.slug}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-[#333] mb-4 line-clamp-2">
                          {country.name}
                        </h3>
                        
                        <a
                          href={country.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full justify-center px-4 py-2 bg-[#21807a] text-white rounded-lg hover:bg-[#1a6860] transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          前往專區
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Section */}
                <div className="bg-[#fe7f4c] p-8 rounded-lg text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">南島語系國家總覽</h2>
                  <p className="text-white text-lg leading-relaxed">
                    這些南島語系國家分佈在太平洋、東南亞和印度洋地區，每個國家都有其獨特的文化和宣教需求。
                    透過這些專區，我們可以更深入了解各國的宣教工作現況和挑戰。
                  </p>
                </div>

                {/* Navigation Button */}
                <div className="mt-8 text-right">
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
