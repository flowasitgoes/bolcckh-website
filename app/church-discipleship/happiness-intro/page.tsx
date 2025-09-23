import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '幸福門訓介紹 | 高雄靈糧堂',
  description: '高雄靈糧堂幸福門訓介紹，提供門徒學校、幸福大學等課程，幫助弟兄姊妹在信仰上成長。',
  keywords: '高雄靈糧堂, 幸福門訓, 門徒學校, 幸福大學, 信仰成長',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '幸福門訓介紹 | 高雄靈糧堂',
    description: '高雄靈糧堂幸福門訓介紹，提供門徒學校、幸福大學等課程，幫助弟兄姊妹在信仰上成長。',
    url: 'https://conflux-tech.com/church-discipleship/happiness-intro',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂幸福門訓介紹',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '幸福門訓介紹 | 高雄靈糧堂',
    description: '高雄靈糧堂幸福門訓介紹，提供門徒學校、幸福大學等課程，幫助弟兄姊妹在信仰上成長。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function HappinessIntroPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner - Open Book Background */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/mission/C1/C1-bn.png" 
            alt="幸福門訓介紹 - 開放書本" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            幸福門訓介紹
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Sidebar - Navigation */}
          <DiscipleshipSidebar activeLink="/church-discipleship/happiness-intro" />

          {/* Right Content Area - 空白橘色背景 */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-transparent min-h-[600px]">
              {/* 幸福門訓圖片 */}
              <div className="flex items-center justify-center h-full min-h-[500px]">
                <div className="relative w-3/5 md:w-1/2">
                  <Image 
                    src="/church/happiness-disciple.png" 
                    alt="幸福門訓介紹" 
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
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
