import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiscipleshipSidebar } from '@/components/discipleship-sidebar'

export const metadata: Metadata = {
  title: '慕道班第五課「蒙福的記號」| 高雄靈糧堂',
  description: '高雄靈糧堂慕道班第五課「蒙福的記號」，幫助弟兄姊妹認識蒙福的生活。',
  keywords: '高雄靈糧堂, 慕道班, 蒙福, 蒙福的記號, 信仰成長',
}

export default function Lesson5Page() {
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
          <DiscipleshipSidebar activeLink="/church-discipleship/lesson5" />

          {/* Right Content Area */}
          <div className="lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              {/* YouTube Video Player */}
              <div className="mb-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/k4ID_DfrqfM"
                    title="慕道班第五課「蒙福的記號」"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#21807a] mb-6">
                  慕道班第五課「蒙福的記號」| 高雄靈糧堂
                </h3>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    蒙福是神對我們的應許，透過遵行神的話語，我們可以經歷神的祝福和恩典。
                  </p>
                  <p className="mb-4">
                    蒙福的記號：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>遵行神的話語，走在神的道路上</li>
                    <li>以神為樂，享受與神的親密關係</li>
                    <li>在困難中仍然信靠神</li>
                    <li>成為別人的祝福</li>
                  </ul>
                  <p className="mt-6">
                    讓我們一起學習如何過蒙福的生活，成為神祝福的管道。
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
