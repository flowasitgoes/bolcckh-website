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
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
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
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function ChurchDiscipleshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/mission/C1/C1-bn.png" 
            alt="門訓建造" 
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

      <main className="flex">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1 bg-[#21807a] p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">報名開班</h2>
          <nav className="space-y-2">
            <a 
              href="#nurture-class" 
              className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                報名養育班
              </div>
            </a>
            <a 
              href="#discipleship-university" 
              className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                報名門徒大學
              </div>
            </a>
            <a 
              href="#happiness-university" 
              className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                報名幸福大學
              </div>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-[#F3A149] p-6 md:p-8">

        </div>
      </main>
      <Footer />
    </div>
  )
}
