import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '門徒學校下-線上報名 | 高雄靈糧堂',
  description: '高雄靈糧堂門徒學校下冊線上報名，提供完整的門徒訓練課程。',
  keywords: '高雄靈糧堂, 門徒學校, 線上報名, 門徒訓練, 信仰成長',
}

export default function DiscipleshipSchoolLowerRegisterPage() {
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
          <DiscipleshipSidebar activeLink="/church-discipleship/discipleship-school-lower-register" />

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  門徒學校下-線上報名 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">




                  {/* Google Form */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">線上報名表單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe7vDaqi34O_Ag-7P5xIM6TsLM6ooGGbmPiv8h92lqQnnUwHQ/viewform?embedded=true" 
                        width="100%" 
                        height={2483} 
                        frameBorder="0" 
                        marginHeight={0} 
                        marginWidth={0}
                        className="rounded-lg"
                      >
                        載入中…
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* 週二班報名名單 */}
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  門徒學校下-週二班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週二班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSdMZXUaCk-mELuqw5N7VPJJcBuPlzJqUEvp4aSNNpbpkgJGEeYxj8QRvif1docHlV0q0Z4w22sIt1t/pubhtml?gid=406484039&single=true&widget=true&headers=false" 
                        width="100%" 
                        height={500}
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* 週四班報名名單 */}
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  門徒學校下-週四班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週四班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSdMZXUaCk-mELuqw5N7VPJJcBuPlzJqUEvp4aSNNpbpkgJGEeYxj8QRvif1docHlV0q0Z4w22sIt1t/pubhtml?gid=1195662406&single=true&widget=true&headers=false" 
                        width="100%" 
                        height={500}
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
