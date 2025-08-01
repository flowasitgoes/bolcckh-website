import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '門訓見證 | 高雄靈糧堂 - 生命見證',
  description: '高雄靈糧堂生命見證，分享弟兄姊妹門訓過程中的真實故事。',
  keywords: '高雄靈糧堂, 生命見證, 門訓見證, 門徒訓練, 見證',
}

export default function WitnessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="生命見證"
          className="w-full h-auto object-cover"
        />
      </div>

      <main className="bg-gray-50">
        <div className="w-full">
          <div className="mission-layout">
            {/* Left Sidebar Navigation */}
            <div className="mission-sidebar bg-[#21807a]">
              <div className="p-6">

                <nav className="space-y-0 p-6">
                  <Link 
                    href="/mission-testimony"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    神的作為 何等美好
                  </Link>
                  <Link 
                    href="/mission-testimony/experience-god"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    經歷上帝 生命歸主
                  </Link>
                  <Link 
                    href="/mission-testimony/prayers"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    禱告蒙應允
                  </Link>
                  <Link 
                    href="/mission-testimony/witness"
                    className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] hover:bg-[#1a6860] transition-colors"
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
                <Link href="/mission-testimony" className="hover:text-[#21807a]">生命見證</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">門訓見證</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src="/mission/C2/C2-07.png"
                    alt="門訓見證"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                {/* Article Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                    門訓見證｜跟隨主耶穌的成長之路
                  </h1>
                  <p className="text-gray-600">2025.06.15</p>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    門徒訓練是基督徒生命成長的重要過程，在我們教會中，有許多弟兄姊妹透過門訓課程，
                    在信仰上有了更深的認識和成長，這些見證讓我們看見上帝如何塑造祂的門徒。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    生命品格的重塑
                  </h3>

                  <p>
                    透過門訓課程，許多弟兄姊妹在品格上有了顯著的改變，
                    原本的軟弱和缺點在上帝的恩典中得到了更新和改變。
                    這些見證讓我們看見上帝如何透過門訓來塑造我們的生命。
                  </p>

                  <p>
                    門訓不只是知識的學習，更是生命的轉變，
                    透過系統性的學習和實踐，我們的生命逐漸被上帝的話語更新。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    服事能力的提升
                  </h3>

                  <p>
                    有許多弟兄姊妹透過門訓課程，在服事上有了更大的突破，
                    原本不敢服事的人，現在能夠勇敢地站出來服事上帝和教會。
                    這些見證讓我們看見上帝如何裝備祂的僕人。
                  </p>

                  <p>
                    門訓讓我們明白，服事不是靠自己的能力，
                    而是靠著上帝的恩典和聖靈的能力，我們只是上帝手中的器皿。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    家庭生活的見證
                  </h3>

                  <p>
                    有許多家庭因著門訓課程，家庭關係得到了改善，
                    原本緊張的關係因著上帝的愛而得到修復，
                    這些見證讓我們看見門訓如何影響整個家庭。
                  </p>

                  <p>
                    門訓不只是個人的成長，更是整個家庭的祝福，
                    當我們的生命被上帝更新時，我們的家庭也會跟著蒙福。
                  </p>
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