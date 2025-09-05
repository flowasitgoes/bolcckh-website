import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '門徒學校第十四期報名 | 高雄靈糧堂 - 台語牧區課程',
  description: '門徒學校第十四期報名，課程時間10週，包含全人更新營會，歡迎本堂會友報名參加。',
  keywords: '高雄靈糧堂, 門徒學校, 第十四期, 全人更新營會, 經歷神營會, 台語牧區',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '門徒學校第十四期報名 | 高雄靈糧堂 - 台語牧區課程',
    description: '門徒學校第十四期報名，課程時間10週，包含全人更新營會，歡迎本堂會友報名參加。',
    url: 'https://conflux-tech.com/church-department-taiwanese-language-lesson',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂門徒學校',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '門徒學校第十四期報名 | 高雄靈糧堂 - 台語牧區課程',
    description: '門徒學校第十四期報名，課程時間10週，包含全人更新營會，歡迎本堂會友報名參加。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function ChurchDepartmentTaiwaneseLanguageLessonPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col lg:flex-row">
        {/* Left Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:w-64 bg-[#21807a] min-h-screen p-6">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-4">報名營開班</h3>
            <ul className="space-y-2">
              <li className="pl-4">
                <a href="#" className="text-white hover:text-orange-300 transition-colors">
                  | 報名門徒大學
                </a>
              </li>
              <li className="pl-4">
                <a href="#" className="text-white hover:text-orange-300 transition-colors">
                  報名幸福大學
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Sidebar - Visible on mobile only */}
        <div className="lg:hidden bg-[#21807a] p-4">
          <div className="text-white text-center">
            <h3 className="text-base font-bold mb-2">報名營開班</h3>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                | 報名門徒大學
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                報名幸福大學
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#fe7f4c] p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg">
              {/* Course Information */}
              <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-red-600 mb-4 md:mb-6">
                  🔴 門徒學校(上)「第十四期」
                </h1>
                
                <div className="space-y-3 md:space-y-4 text-[#444] text-sm md:text-base">
                  <p><strong>上課教材：</strong>門徒學校</p>
                  <p><strong>必讀書籍：</strong>標竿人生（晉昇版） / 幸福到你家</p>
                  
                  <div className="mt-4 md:mt-6">
                    <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">📌 注意事項：</h3>
                    <ul className="space-y-1 md:space-y-2 ml-3 md:ml-4 text-sm md:text-base">
                      <li>程時間為10週。</li>
                      <li>開課前請預先抄寫課本經文之填空。</li>
                      <li>報名日期：即日起～至額滿為止。（一班未滿8人，不予開課）</li>
                      <li>錄取名單於網頁公布，每日更新一次。</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 md:mt-6">
                    <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">📌 申請資格：</h3>
                    <ul className="space-y-1 md:space-y-2 ml-3 md:ml-4 text-sm md:text-base">
                      <li>限本堂會友（未受洗亦可）</li>
                      <li>須穩定參加小組</li>
                      <li>需與【全人更新營會】一起報名或已上過</li>
                      <li>{'{經歷神營會}(完整的課程)之會友'}</li>
                      <li>*【全人更新營會】及會前課</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 md:mt-6">
                    <p><strong>📅 時間：</strong>8/09（六）14:30～18:00</p>
                    <p><strong>📍 地點：</strong>814教室</p>
                  </div>
                  
                  <div className="mt-3 md:mt-4">
                    <p className="font-bold">📅 營會時間：</p>
                    <p>第一天 － 8/22（五）19:30～22:00</p>
                    <p>第二天 － 8/23（六）8:30～18:00</p>
                    <p><strong>📍 地點：</strong>恩惠廳</p>
                  </div>
                </div>
              </div>

              {/* Registration Form */}
              {/* <div className="border-t border-gray-300 pt-6 md:pt-8">
                <h2 className="text-lg md:text-xl font-bold text-gray-700 mb-3 md:mb-4">申請表</h2>
                <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">門徒學校上「第十四期」報名</h3>
                
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      介紹人* <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="請填寫全名"
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a] text-sm md:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      跟介紹人的關係
                    </label>
                    <input 
                      type="text" 
                      placeholder="您的回答"
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a] text-sm md:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      姓名 <span className="text-gray-400">?</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="您的回答"
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a] text-sm md:text-base"
                    />
                  </div>
                  
                  <div className="pt-3 md:pt-4">
                    <button className="w-full md:w-auto bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-green-600 transition-colors text-sm md:text-base">
                      錄取名單查詢
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 