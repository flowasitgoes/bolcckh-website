import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '禱告蒙應允 | 高雄靈糧堂 - 生命見證',
  description: '高雄靈糧堂生命見證，分享弟兄姊妹禱告蒙應允的真實故事。',
  keywords: '高雄靈糧堂, 生命見證, 禱告蒙應允, 禱告, 見證',
}

export default function PrayersPage() {
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
                    className="block text-white px-4 py-3 border-l-4 border-l-[#fe7f4c] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
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
                <span className="text-[#21807a]">禱告蒙應允</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src="/mission/C2/C2-07.png"
                    alt="禱告蒙應允"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                {/* Article Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                    禱告蒙應允｜上帝垂聽禱告的奇妙作為
                  </h1>
                  <p className="text-gray-600">2025.06.15</p>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    禱告是我們與上帝溝通的橋樑，在我們教會中，有許多弟兄姊妹經歷了禱告蒙應允的奇妙作為。
                    這些見證讓我們看見上帝是垂聽禱告的神，祂的應許是信實的。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    疾病得醫治的見證
                  </h3>

                  <p>
                    有許多弟兄姊妹在疾病中經歷了上帝的醫治，透過禱告和信心，
                    他們的身體得到了完全的恢復，這些見證讓我們看見上帝的大能。
                  </p>

                  <p>
                    上帝不僅醫治身體的疾病，更醫治心靈的創傷，
                    透過禱告，我們可以將一切的憂慮卸給祂，因為祂顧念我們。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    家庭關係的恢復
                  </h3>

                  <p>
                    有許多家庭因著禱告而經歷了關係的恢復，原本破裂的關係因著上帝的愛而得到修復。
                    這些見證讓我們看見禱告的力量，以及上帝如何透過禱告來改變人心。
                  </p>

                  <p>
                    上帝的時間是最好的時間，有時候我們需要等待，
                    但我們相信祂必按著祂的時間和方式來回應我們的禱告。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    工作事業的祝福
                  </h3>

                  <p>
                    有許多弟兄姊妹在工作和事業上經歷了上帝的祝福，
                    透過禱告，他們找到了合適的工作，事業也得到了發展。
                  </p>

                  <p>
                    這些見證提醒我們，無論在什麼情況下，我們都可以來到上帝面前禱告，
                    祂必垂聽我們的禱告，並按著祂的美意來回應我們。
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