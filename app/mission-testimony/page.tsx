import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '生命見證 | 高雄靈糧堂 - 神的作為何等美好',
  description: '高雄靈糧堂生命見證，分享弟兄姊妹經歷上帝、禱告蒙應允、門訓見證等真實的生命故事。',
  keywords: '高雄靈糧堂, 生命見證, 經歷上帝, 禱告蒙應允, 門訓見證, 神的作為',
}

export default function MissionTestimonyPage() {
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
                <span className="text-[#21807a]">生命見證</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src="/mission/C2/C2-07.png"
                    alt="主崇信息精華"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                {/* Article Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    主崇信息精華｜大衛：神所揀選的受膏者｜
                  </h1>
                  <p className="text-gray-600">2025.06.15</p>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    本週起至八、九月，會眾聚焦於大衛王平的系列聚會，實地探會看兄，
                    勉勵弟兄達事工，今天傳真正攻勢神蒼薹聰明其配上大穴實1-13節，透
                    過大衛，來認識耶穌基督樓神所揀選的受膏者。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    青山依舊在，幾度夕陽紅，慣看秋月春
                  </h3>

                  <p>
                    許多靈會從帝食會禱告的聖經人物來來反思自己的生命，但是要務們靈考
                    怎去人物，主要是為了讓你配走人攻設建主耶穌，有描「小故事大原示
                    」的願度來讀者舊約，只要專喜攻法他們攻發自己的行為，無法得蒙真寶
                    生命的改寫，實見兄，聖經主耶穌，才能帶出趨人生命領腳的方禮。
                  </p>

                  <p>
                    舊約不只講著這預言節到耶穌，整本舊約的所有救恩傳式，達法、節期
                    都指向耶穌，透法不值是聲達的目在如這種恩知何生活，而要實講護們考
                    見耶穌所活出來拯全的生命。
                  </p>

                  <h3 className="text-xl font-bold text-[#21807a] border-b-2 border-[#21807a] pb-2">
                    青山依舊在，幾度夕陽紅，慣看秋月春
                  </h3>

                  <p>
                    許多靈會從帝食會禱告的聖經人物來來反思自己的生命，但是要務們靈考
                    怎去人物，主要是為了讓你配走人攻設建主耶穌，有描「小故事大原示
                    」的願度來讀者舊約，只要專喜攻法他們攻發自己的行為，無法得蒙真寶
                    生命的改寫，實見兄，聖經主耶穌，才能帶出趨人生命領腳的方禮。
                  </p>

                  <p>
                    舊約不只講著這預言節到耶穌，整本舊約的所有救恩傳式，達法、節期
                    都指向耶穌，透法不值是聲達的目在如這種恩知何生活，而要實講護們考
                    見耶穌所活出來拯全的生命。
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