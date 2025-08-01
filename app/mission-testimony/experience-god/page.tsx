import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '經歷上帝 生命歸主 | 高雄靈糧堂 - 生命見證',
  description: '高雄靈糧堂生命見證，分享弟兄姊妹經歷上帝、生命歸主的真實故事。',
  keywords: '高雄靈糧堂, 生命見證, 經歷上帝, 生命歸主, 見證',
}

export default function ExperienceGodPage() {
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
                    className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
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
                <Link href="/mission-testimony" className="hover:text-[#21807a]">生命見證</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">經歷上帝 生命歸主</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src="/mission/C2/C2-07.png"
                    alt="經歷上帝 生命歸主"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                {/* Article Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                    經歷上帝 生命歸主｜真實的生命轉變見證
                  </h1>
                  <p className="text-gray-600">2025.06.15</p>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    在我們教會中，有許多弟兄姊妹經歷了上帝奇妙的作為，他們的生命因著認識主而有了根本的轉變。
                    這些真實的見證讓我們看見上帝在每個人生命中的工作。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    從絕望到盼望的生命轉變
                  </h3>

                  <p>
                    許多人在人生的低谷中遇見了上帝，從原本的絕望和無助，轉變為充滿盼望和喜樂的生命。
                    這些見證讓我們看見，上帝從來沒有放棄任何一個人，祂的愛和恩典是無條件的。
                  </p>

                  <p>
                    透過這些真實的生命故事，我們看見上帝如何透過不同的方式觸摸人心，
                    如何醫治破碎的心靈，如何重建人的生命。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    家庭歸主的見證
                  </h3>

                  <p>
                    有許多家庭因著一位成員的歸主，最終全家都認識了上帝。
                    這些見證讓我們看見上帝如何透過一個人來祝福整個家庭，
                    如何讓愛和恩典在家庭中流動。
                  </p>

                  <p>
                    每個見證都是獨特的，但都指向同一位上帝，
                    祂是生命的源頭，是愛的泉源，是我們唯一的盼望。
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