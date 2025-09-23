import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '門徒學校上-線上報名 | 高雄靈糧堂',
  description: '高雄靈糧堂門徒學校上冊線上報名，提供完整的門徒訓練課程。',
  keywords: '高雄靈糧堂, 門徒學校, 線上報名, 門徒訓練, 信仰成長',
}

export default function DiscipleshipSchoolUpperRegisterPage() {
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
            牧養裝備
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Sidebar - Navigation */}
          <DiscipleshipSidebar activeLink="/church-discipleship/discipleship-school-upper-register" />

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  門徒學校上-線上報名 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          
                  


               

                  {/* Google Form */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">線上報名表單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe85Sk9aOP_EQ3OpCDXYzITlwA6lRZGFwS2DdBnO4k8jmiclQ/viewform?embedded=true" 
                        width="100%" 
                        height={2463} 
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
                  門徒學校上-週二班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週二班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSDs6SeSI87aw0Jxujhq2kNRs8V_UYnre5lIADg49sWadEdVzvxj3D8f64TGEYNnQpWH6tUIcxOPp3B/pubhtml?gid=825945731&single=true&widget=true&headers=false" 
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
                  門徒學校上-週四班完成報名查詢 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-[#21807a] mb-4">週四班報名名單</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSDs6SeSI87aw0Jxujhq2kNRs8V_UYnre5lIADg49sWadEdVzvxj3D8f64TGEYNnQpWH6tUIcxOPp3B/pubhtml?gid=476565207&single=true&widget=true&headers=false" 
                        width="100%" 
                        height={500}
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* 課程說明區域 */}
              <div className="mt-8">
                <div className="bg-[#21807a] rounded-lg p-6 md:p-8 text-white">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row">
                      <span className="font-semibold text-white w-full md:w-32 flex-shrink-0">上課教材 :</span>
                      <span className="text-white">門徒學校上</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row">
                      <span className="font-semibold text-white w-full md:w-32 flex-shrink-0">必讀書籍 :</span>
                      <div className="text-white space-y-1">
                        <div>幸福小組實作秘笈 / 發現你的恩賜</div>
                        <div>祭祖的真義 / 征服人生 / 真理不怕挑戰</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row">
                      <span className="font-semibold text-white w-full md:w-32 flex-shrink-0">注意事項 :</span>
                      <span className="text-white">課程時間為12週。開課前請預先抄寫課本經文之填空。</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row">
                      <span className="font-semibold text-white w-full md:w-32 flex-shrink-0">報名日期 :</span>
                      <div className="text-white space-y-1">
                        <div>即日起~至額滿為止。(一班未滿8人，不予開課) 錄取名單於網頁公佈，每日更新一次。</div>
                        <div>• 如不知報名什麼階段的門訓課程，請來電分機149安瑜姊妹查詢。</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row">
                      <span className="font-semibold text-white w-full md:w-32 flex-shrink-0">申請資格 :</span>
                      <div className="text-white space-y-1">
                        <div>限本堂會友 / 門徒學校上或養育班已結業 / 經歷神營會已結業</div>
                        <div>• 尚未上過經歷神營會者，需跟門徒學校(下) 一起報名</div>
                        <div>• 需已經受洗</div>
                        <div>• 須穩定參加小組</div>
                        <div>• 須擔任幸福小組同工</div>
                      </div>
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

