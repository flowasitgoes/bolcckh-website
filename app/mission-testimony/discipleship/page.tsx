import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '../../../styles/mission.css'

export const metadata: Metadata = {
  title: '門訓見證 | 高雄靈糧堂 - 神的作為何等美好',
  description: '高雄靈糧堂門訓見證，分享弟兄姊妹在門徒訓練中的成長與突破見證。',
  keywords: '高雄靈糧堂, 門訓見證, 門徒訓練, 屬靈成長',
}

export default function DiscipleshipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C1/C1-bn.png"
          alt="門訓見證"
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
                <span className="text-[#21807a]">門訓見證</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src="/mission/C1/C1-04.png"
                    alt="門訓見證"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                {/* Article Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    門訓見證 - 屬靈生命的成長
                  </h1>
                  <p className="text-gray-600">在神話語中被建造，成為合用的器皿</p>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    「所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗。
                    凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」
                    （馬太福音 28:19-20）
                  </p>

                  <p>
                    門徒訓練是教會最重要的事工之一。透過系統性的聖經學習、生命品格的塑造、
                    以及實際的服事操練，弟兄姊妹在屬靈生命上得到全面的成長。
                    以下是參與門訓的弟兄姊妹們真實的見證分享。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    從軟弱到剛強的轉變
                  </h3>

                  <p>
                    張弟兄見證：「剛信主時，我的信心很軟弱，常常在試煉中跌倒。
                    透過門訓課程的學習，我開始明白神的話語具有改變生命的大能。
                    現在的我不再是從前那個軟弱的人，而是在基督裡得勝的精兵。」
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    發現恩賜，投入服事
                  </h3>

                  <p>
                    劉姊妹分享：「在門訓過程中，我發現了神給我教導的恩賜。
                    從原本害怕在人前說話，到現在能夠帶領小組查經，
                    這完全是神的恩典。感謝門訓讓我找到了在神國度中的位置。」
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    品格的塑造與更新
                  </h3>

                  <p>
                    黃弟兄見證：「門訓不只是知識的傳遞，更是品格的塑造。
                    透過實際的生活操練和小組的彼此激勵，我學會了謙卑、忍耐、愛心。
                    我的家人都看見了我生命的改變，這成為向他們傳福音最好的見證。」
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    傳承與倍增
                  </h3>

                  <p>
                    林姊妹分享：「完成門訓課程後，我開始帶領新信徒進入門訓。
                    看著他們一步步成長，就像看見自己當初的樣子。
                    這種生命影響生命的過程，讓我深深體會到大使命的寶貴。」
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-center italic text-gray-600">
                      「你在許多見證人面前聽見我所教訓的，也要交託那忠心能教導別人的人。」
                    </p>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      — 提摩太後書 2:2
                    </p>
                  </div>

                  <div className="bg-[#21807a] text-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3">加入門訓，開始你的屬靈成長之旅</h4>
                    <p className="mb-4">
                      如果你也渴望在信仰上有更深的追求，歡迎加入我們的門訓課程。
                      讓我們一同在神的話語中被建造，成為合神心意的門徒。
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-white text-[#21807a] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
                    >
                      了解更多
                    </Link>
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