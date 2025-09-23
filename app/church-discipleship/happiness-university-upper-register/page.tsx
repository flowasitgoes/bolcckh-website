import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '幸福大學上-線上報名 | 高雄靈糧堂',
  description: '高雄靈糧堂幸福大學上冊線上報名，提供完整的幸福課程訓練。',
  keywords: '高雄靈糧堂, 幸福大學, 線上報名, 幸福課程, 信仰成長',
}

export default function HappinessUniversityUpperRegisterPage() {
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
          <DiscipleshipSidebar activeLink="/church-discipleship/happiness-university-upper-register" />

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  幸福大學上-線上報名 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    歡迎參加幸福大學上冊課程！
                  </p>

                  {/* Google Form */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">線上報名表單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdS7tIpVYQfGS-SH2yOwnUZKFDLIeU8uZHQ7s9P35EMtGK2iw/viewform?embedded=true" 
                        width="100%" 
                        height={2182} 
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

              {/* 週三班報名名單 */}
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  幸福大學上-週三班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    歡迎查詢幸福大學上冊週三班的報名狀態。
                  </p>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週三班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTho4cqhX_vIKUU0hXJ_RrLZVjvov5sSDLgFXkC12E569N7XAjU16OPbq8yM9zIUKuy749zvbLH_r61/pubhtml?gid=449737507&single=true&widget=true&headers=false" 
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
                  幸福大學上-週四班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    歡迎查詢幸福大學上冊週四班的報名狀態。
                  </p>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週四班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTho4cqhX_vIKUU0hXJ_RrLZVjvov5sSDLgFXkC12E569N7XAjU16OPbq8yM9zIUKuy749zvbLH_r61/pubhtml?gid=173194409&single=true&widget=true&headers=false" 
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
