import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '門訓建造 | 高雄靈糧堂',
  description: '高雄靈糧堂門訓建造，提供門徒學校、幸福大學等課程，幫助弟兄姊妹在信仰上成長。',
  keywords: '高雄靈糧堂, 門訓建造, 門徒學校, 幸福大學, 信仰成長',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '門訓建造 | 高雄靈糧堂',
    description: '高雄靈糧堂門訓建造，提供門徒學校、幸福大學等課程，幫助弟兄姊妹在信仰上成長。',
    url: 'https://conflux-tech.com/church-discipleship',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂門訓建造',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '門訓建造 | 高雄靈糧堂',
    description: '高雄靈糧堂門訓建造，提供門徒學校、幸福大學等課程，幫助弟兄姊妹在信仰上成長。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function ChurchDiscipleshipPage() {
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
                href="/church-discipleship/happiness-intro" 
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                幸福門訓介紹
              </a>

              <a 
                href="#lesson1" 
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
                className="block w-full text-left text-orange-300 rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  門徒學校上-線上報名
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

              <div className="border-l-4 border-orange-300 pl-2 mb-2">
                <div className="text-white font-semibold text-sm mb-2">
                  牧養裝備-幸福大學
                </div>
              </div>
              
              <a 
                href="/church-discipleship/happiness-university-upper-register" 
                className="block w-full text-left text-orange-300 rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  幸福大學上-線上報名
                </div>
              </a>



              <a 
                href="/church-discipleship/happiness-university-lower-register" 
                className="block w-full text-left text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-white/10 ml-4"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  幸福大學下-線上報名
                </div>
              </a>

            </nav>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* 幸福門訓介紹 Section - 預設顯示 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  幸福門訓介紹 | 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    幸福門訓是高雄靈糧堂為弟兄姊妹精心設計的信仰成長課程，旨在幫助每位信徒在基督裡扎根成長，建立穩固的屬靈根基。
                  </p>
                  <p className="mb-4">
                    我們的門訓課程包含：
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>慕道班</strong> - 為初信者提供基礎信仰課程</li>
                    <li><strong>門徒學校</strong> - 深化信仰，學習做主的門徒</li>
                    <li><strong>幸福大學</strong> - 全方位生命建造，活出豐盛人生</li>
                  </ul>
                  <p className="mb-4">
                    透過系統性的課程安排，我們希望幫助每位弟兄姊妹：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>認識真理，建立正確的信仰觀</li>
                    <li>在愛中成長，活出基督的樣式</li>
                    <li>建立屬靈的伙伴關係</li>
                    <li>成為能夠祝福他人的器皿</li>
                  </ul>
                  <p className="mt-6 text-lg font-medium text-[#21807a]">
                    歡迎您加入我們的門訓課程，一起在信仰的道路上成長！
                  </p>
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

