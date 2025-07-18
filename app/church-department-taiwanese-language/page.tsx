import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '台語牧區 | 高雄靈糧堂 - 林麗華傳道 | 每週四早上10:00',
  description: '台語牧區主日崇拜時段，每週四早上10:00在4F恩惠廳舉行，由林麗華傳道帶領，歡迎參加台語牧區的聚會。',
  keywords: '高雄靈糧堂, 台語牧區, 林麗華傳道, 台語崇拜, 恩惠廳, 週四聚會',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '台語牧區 | 高雄靈糧堂 - 林麗華傳道 | 每週四早上10:00',
    description: '台語牧區主日崇拜時段，每週四早上10:00在4F恩惠廳舉行，由林麗華傳道帶領，歡迎參加台語牧區的聚會。',
    url: 'https://conflux-tech.com/church-department-taiwanese-language',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂台語牧區',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '台語牧區 | 高雄靈糧堂 - 林麗華傳道 | 每週四早上10:00',
    description: '台語牧區主日崇拜時段，每週四早上10:00在4F恩惠廳舉行，由林麗華傳道帶領，歡迎參加台語牧區的聚會。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function ChurchDepartmentTaiwaneseLanguagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96">
          <Image 
            src="/church/B4/B4.png" 
            alt="台語牧區" 
            fill 
            className="object-cover object-center" 
          />
          {/* Orange Overlay */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-500 flex flex-col justify-center items-center text-white p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">台語牧區 林麗華傳道</h1>
              <h2 className="text-4xl font-bold mb-4">Welcome!</h2>
              <div className="space-y-2">
                <p className="text-lg">台語牧區主日崇拜時段</p>
                <p className="text-xl font-semibold">每週四早上 10:00 - 4F 恩惠廳</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content-section bg-[#21807a] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg p-12 shadow-lg">
              <div className="prose prose-lg max-w-none text-gray-800">
                <p className="text-lg leading-relaxed mb-6">
                  在全球高齡化社會的趨勢下，台語牧區肩負著重要的使命。我們相信每個人都需要聽到救恩的故事，經歷基督信仰的真實——在地上如同在天上。
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  每週四早上10:00，我們在4F恩惠廳舉行台語牧區主日崇拜。聚會結束後，我們會進行小組分享和午餐時間，讓弟兄姊妹有更多交流的機會。
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  台語牧區是一個充滿神蹟的地方，許多人在這裡經歷了性情的改變、心情的改善、家庭關係的修復，甚至身體健康的恢復。我們相信透過按著聖經真理生活，透過禱告經歷神的醫治，我們能夠一起建立基督的身體。
                </p>
                
                <p className="text-lg leading-relaxed">
                  歡迎您加入台語牧區，與我們一起在主的愛中成長，經歷神豐盛的恩典。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 