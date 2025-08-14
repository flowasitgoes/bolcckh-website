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
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
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
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function ChurchDepartmentTaiwaneseLanguagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="dt-hero-section">
          <img src="/church/B4/B4.png" alt="台語牧區" />
        </div>

        <section className="dt-2-col-side-section hero-section relative h-96 md:h-96 flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="dt-left-side-section w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
            <Image 
              src="/church/B4/B4-01-01.png" 
              alt="台語牧區" 
              fill
              className="object-contain object-center" 
              priority
            />
          </div>
          {/* Right side - Orange background with text */}
          <div className="dt-right-side-section w-full md:w-1/2 h-48 md:h-full bg-[#F3A149] flex flex-col justify-center items-center text-white p-4 md:p-8">
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-2">台語牧區 林麗華傳道</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#172d2d', borderBottom: '1px solid #FFF', paddingBottom: '10px'}}>Welcome!</h2>
              {/* <div className="w-12 md:w-16 h-0.5 bg-white mx-auto mb-4"></div> */}
              <p className="text-base md:text-lg mb-4">台語牧區主日崇拜時段</p>
              <div className="bg-[#21807a] px-4 md:px-6 py-2 md:py-3 rounded">
                <p className="text-lg md:text-xl font-semibold">每週四早上 10:00 - 4F 恩惠廳</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content-section bg-[#21807a] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg p-12 shadow-lg" style={{borderRadius: '40px'}}>
              <div className="prose prose-lg max-w-none text-[#444]">
                <p className="text-lg leading-relaxed mb-6">
                  在全球高齡化社會的趨勢下，台語牧區肩負著重要的使命。我們相信每個人都需要聽到救恩的故事，參與在神的救恩故事中，經歷基督信仰的真實——不只是死後上天堂，更是在地上如同在天上。
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  每週四早上10:00，我們在4F恩惠廳舉行台語牧區主日崇拜。聚會結束後，我們會進行小組分享和午餐時間，讓弟兄姊妹有更多交流的機會。
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  台語牧區是一個充滿神蹟的地方，許多人在這裡經歷了性情的改變、心情的改善、家庭關係的修復，甚至身體健康的恢復。我們相信透過按著聖經真理生活，透過禱告經歷神的醫治，我們能夠一起建立基督的身體，在愛中彼此聯絡。
                </p>
                
                <p className="text-lg leading-relaxed">
                  台語牧區的使命是裝備聖徒，各盡其職，建立基督的身體，在愛中彼此聯絡。
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