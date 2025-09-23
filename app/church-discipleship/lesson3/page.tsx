import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '慕道班第三課「天下第一書-聖經」| 高雄靈糧堂',
  description: '高雄靈糧堂慕道班第三課「天下第一書-聖經」，幫助弟兄姊妹認識聖經的重要。',
  keywords: '高雄靈糧堂, 慕道班, 聖經, 天下第一書, 信仰成長',
}

export default function Lesson3Page() {
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
          <DiscipleshipSidebar activeLink="/church-discipleship/lesson3" />

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* YouTube Video Player */}
              <div className="mb-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/p__vWlx_PxI"
                    title="慕道班第三課「天下第一書-聖經」"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  慕道班第三課「天下第一書-聖經」| 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    聖經是神的話語，是我們信仰的根基。透過聖經，我們可以認識神的心意，明白救恩的真理。
                  </p>
                  <p className="mb-4">
                    聖經的重要性：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>是神啟示的話語，具有權威性</li>
                    <li>指引我們人生的方向</li>
                    <li>幫助我們認識神的性情</li>
                    <li>是我們信仰生活的準則</li>
                  </ul>
                  <p className="mt-6">
                    讓我們一起學習如何讀經，讓神的話語成為我們生命的指引。
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
