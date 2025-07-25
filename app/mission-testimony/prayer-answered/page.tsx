import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '禱告蒙應允 | 高雄靈糧堂 - 神的作為何等美好',
  description: '高雄靈糧堂禱告蒙應允見證，分享弟兄姊妹禱告得到回應的真實見證。',
  keywords: '高雄靈糧堂, 禱告蒙應允, 見證, 神的作為',
}

export default function PrayerAnsweredPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
            {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C1/C1-bn.png"
          alt="禱告蒙應允"
          className="w-full h-auto object-cover"
        />
      </div>

      <main className="bg-gray-50">
        <div className="w-full">
          <div className="mission-layout">
            {/* Left Sidebar Navigation */}
            <div className="mission-sidebar bg-[#21807a]">
              <div className="p-6">
                <div className="mb-8">
                  <h2 className="text-white text-lg font-bold mb-4 relative">
                    <span className="absolute left-0 top-0 w-1 h-6 bg-[#fe7f4c]"></span>
                    <span className="ml-4">神的作為 何等美好</span>
                  </h2>
                  <div className="border-b border-white/30"></div>
                </div>
                <nav className="space-y-0">
                  <Link 
                    href="/mission-testimony"
                    className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    神的作為 何等美好
                  </Link>
                  <Link 
                    href="/up-coming"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    經歷上帝 生命歸主
                  </Link>
                  <Link 
                    href="/up-coming"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    禱告蒙應允
                  </Link>
                  <Link 
                    href="/up-coming"
                    className="block text-white px-4 py-3 hover:bg-[#1a6860] transition-colors"
                  >
                    門訓見證
                  </Link>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="mission-content">
              {/* Breadcrumb */}
              <nav className="mission-breadcrumb text-sm text-gray-600 p-12">
                <Link href="/" className="hover:text-[#21807a]">首頁</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">禱告蒙應允</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src="/mission/C1/C1-05.png"
                    alt="禱告蒙應允"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                {/* Article Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    禱告蒙應允見證
                  </h1>
                  <p className="text-gray-600">神垂聽我們每一個禱告</p>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    「你們祈求，就給你們；尋找，就尋見；叩門，就給你們開門。」（馬太福音 7:7）
                  </p>

                  <p>
                    在我們的信仰歷程中，神總是垂聽我們的禱告。無論是在困難中的呼求，
                    還是在感恩中的讚美，神都以祂的愛回應我們。以下是弟兄姊妹們真實的見證，
                    讓我們一同見證神的信實與慈愛。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    疾病得醫治的見證
                  </h3>

                  <p>
                    王姊妹分享：「當醫生宣告我得了重病時，我心中充滿恐懼。但是透過教會弟兄姊妹的代禱，
                    以及我自己不斷地向神呼求，神真的垂聽了我的禱告。經過治療，我的身體完全康復了。
                    這讓我更加相信神的大能與慈愛。」
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    工作順利的見證
                  </h3>

                  <p>
                    李弟兄見證：「失業一年多的時間裡，我每天都為找工作的事情禱告。
                    雖然過程中有許多挫折，但我持續相信神必有最好的安排。
                    最終，神為我預備了一份理想的工作，薪水比之前還要好。感謝神的恩典！」
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    家庭和睦的見證
                  </h3>

                  <p>
                    陳姊妹分享：「我和丈夫的關係曾經非常緊張，幾乎到了離婚的邊緣。
                    透過不斷的禱告和神話語的光照，我學會了饒恕和包容。
                    現在我們的婚姻比以前更加美好，孩子們也在充滿愛的環境中健康成長。」
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-center italic text-gray-600">
                      「應當一無掛慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神。
                      神所賜、出人意外的平安必在基督耶穌裡保守你們的心懷意念。」
                    </p>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      — 腓立比書 4:6-7
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 