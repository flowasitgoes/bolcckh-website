import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '慕道班第二課「新生傳奇-重生」| 高雄靈糧堂',
  description: '高雄靈糧堂慕道班第二課「新生傳奇-重生」，幫助弟兄姊妹認識重生的重要。',
  keywords: '高雄靈糧堂, 慕道班, 重生, 新生傳奇, 信仰成長',
}

export default function Lesson2Page() {
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
          <DiscipleshipSidebar activeLink="/church-discipleship/lesson2" />

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* YouTube Video Player */}
              <div className="mb-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/UsTuBzt-jgo"
                    title="慕道班第二課「新生傳奇-重生」"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  慕道班第二課「新生傳奇-重生」| 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    重生是基督徒生命的重要轉折點，是從舊生命到新生命的奇妙轉變。透過重生，我們成為神的新造物。
                  </p>
                  <p className="mb-4">
                    重生的意義：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>從罪中得釋放，獲得新的生命</li>
                    <li>與神建立親密的關係</li>
                    <li>開始過聖潔的生活</li>
                    <li>有永生的盼望</li>
                  </ul>
                  <p className="mt-6">
                    讓我們一起學習重生的真諦，經歷生命的轉變。
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
