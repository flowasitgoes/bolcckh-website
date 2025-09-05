import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '門徒學校上-週四班完成報名查詢 | 高雄靈糧堂',
  description: '高雄靈糧堂門徒學校上冊週四班完成報名查詢，查看報名狀態。',
  keywords: '高雄靈糧堂, 門徒學校, 週四班, 報名查詢, 門徒訓練',
}

export default function DiscipleshipSchoolUpperThursdayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner - Open Book Background */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/mission/C1/C1-bn.png" 
            alt="門訓建造 - 開放書本" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            門訓建造
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1 bg-[#21807a] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              | 門訓建造-幸福門訓
            </h2>
            
            {/* Navigation Menu */}
            <nav className="space-y-2">
              <a 
                href="/church-discipleship" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  慕道班第一課「耶穌是誰」
                </div>
              </a>

              <a 
                href="/church-discipleship/lesson2" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  慕道班第二課「新生傳奇-重生」
                </div>
              </a>

              <a 
                href="/church-discipleship/lesson3" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  慕道班第三課「天下第一書-聖經」
                </div>
              </a>

              <a 
                href="/church-discipleship/lesson4" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  慕道班第四課「做個自由人」
                </div>
              </a>

              <a 
                href="/church-discipleship/lesson5" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  慕道班第五課「蒙福的記號」
                </div>
              </a>

              <div className="border-t border-white/20 my-4"></div>

              <div className="border-l-4 border-orange-300 pl-2 mb-2">
                <div className="text-white font-semibold text-sm mb-2">
                  牧養裝備-門徒學校
                </div>
              </div>
              
              <a 
                href="/church-discipleship/discipleship-school-upper-register" 
                className="block w-full text-left text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  門徒學校上-線上報名
                </div>
              </a>

              <a 
                href="/church-discipleship/discipleship-school-upper-tuesday" 
                className="block w-full text-left text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  門徒學校上—週二班完成報名查詢
                </div>
              </a>

              <a 
                href="/church-discipleship/discipleship-school-upper-thursday" 
                className="block w-full text-left text-orange-300 rounded-lg px-4 py-2 transition-colors duration-200 bg-white/20 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  門徒學校上—週四班完成報名查詢
                </div>
              </a>

              <a 
                href="/church-discipleship/discipleship-school-lower-register" 
                className="block w-full text-left text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  門徒學校下-線上報名
                </div>
              </a>

              <a 
                href="/church-discipleship/discipleship-school-lower-tuesday" 
                className="block w-full text-left text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  門徒學校下—週二班完成報名查詢
                </div>
              </a>

              <a 
                href="/church-discipleship/discipleship-school-lower-thursday" 
                className="block w-full text-left text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  門徒學校下—週四班完成報名查詢
                </div>
              </a>

              <div className="border-t border-white/20 my-4"></div>

              <a 
                href="#happiness-university" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  牧養裝備-幸福大學
                </div>
              </a>
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  門徒學校上-週四班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

                  


                  {/* Google Spreadsheet */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週四班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSDs6SeSI87aw0Jxujhq2kNRs8V_UYnre5lIADg49sWadEdVzvxj3D8f64TGEYNnQpWH6tUIcxOPp3B/pubhtml?gid=476565207&single=true&widget=true&headers=false" 
                        width="100%" 
                        height="500"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
