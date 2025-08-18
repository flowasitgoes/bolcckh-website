import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '學生牧區 | 高雄靈糧堂',
  description: '高雄靈糧堂學生牧區，提供學生信徒的牧養和關懷，歡迎參加學生牧區的聚會和活動。',
  keywords: '高雄靈糧堂, 學生牧區, 學生聚會, 教會牧養',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '學生牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂學生牧區，提供學生信徒的牧養和關懷，歡迎參加學生牧區的聚會和活動。',
    url: 'https://conflux-tech.com/church-department-student',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂學生牧區',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '學生牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂學生牧區，提供學生信徒的牧養和關懷，歡迎參加學生牧區的聚會和活動。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function ChurchDepartmentStudentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="dt-hero-section">
          <img src="/church/B4/B4.png" alt="學生牧區" />
        </div>

        <section className="dt-2-col-side-section hero-section relative h-96 md:h-96 flex flex-col md:flex-row">
          {/* Right side - Orange background with text */}
          <div className="dt-right-side-section w-full h-48 md:h-full bg-[#F3A149] flex flex-col justify-center items-center text-white p-4 md:p-8">
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-2">學生牧區</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#172d2d', borderBottom: '1px solid #FFF', paddingBottom: '10px'}}>Welcome!</h2>
              {/* <div className="w-12 md:w-16 h-0.5 bg-white mx-auto mb-4"></div> */}
              <p className="text-base md:text-lg mb-4">學生牧區崇拜時段</p>
              <div className="bg-[#21807a] px-4 md:px-6 py-2 md:py-3 rounded">
                <p className="text-lg md:text-xl font-semibold">每週六下午 15:00 - 7F 喜樂廳</p>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  )
}
