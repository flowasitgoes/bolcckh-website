import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

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
          <DiscipleshipSidebar activeLink="/church-discipleship" />

                  {/* Right Content Area */}
                  <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
                    <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                      {/* 慕道班第一課「耶穌是誰」Section - 預設顯示 */}
                      <div className="mb-8">
                        <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                          <iframe 
                            className="absolute top-0 left-0 w-full h-full rounded-lg" 
                            src="https://www.youtube.com/embed/clXw_TvwGpE" 
                            title="永恆唯一的盼望 - The Hope of Our Lives" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                          慕道班第一課「耶穌是誰」| 高雄靈糧堂
                        </h3>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                          <p className="mb-4">
                            全家歸主是神的心意，也是我們每個基督徒的責任。我們要找到方法幫助家人相信耶穌，讓他們也能得著永生的盼望。
                          </p>
                          <p className="mb-4">
                            為什麼全家都要歸主？因為：
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>這是神對我們家庭的祝福</li>
                            <li>讓我們在信仰上同心同行</li>
                            <li>為下一代建立屬靈的根基</li>
                            <li>在永恆中一起享受神的同在</li>
                          </ul>
                          <p className="mt-6">
                            讓我們一起學習如何帶領家人認識耶穌，讓整個家庭都能經歷神的愛和恩典。
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

