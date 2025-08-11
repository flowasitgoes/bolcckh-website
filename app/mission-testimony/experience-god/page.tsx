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
  // 見證數據
  const testimonies = [
    {
      id: 1,
      title: "全家信主 - 侯淑樺 姊妹",
      subtitle: "全家信主 家師",
      image: "/mission/C2/C2-07.png",
      date: "2025.01.15"
    },
    {
      id: 2,
      title: "從絕望到盼望 - 張明德 弟兄",
      subtitle: "生命轉變 見證",
      image: "/mission/C2/C2-07.png",
      date: "2025.01.10"
    },
    {
      id: 3,
      title: "醫治與恢復 - 李美玲 姊妹",
      subtitle: "疾病得醫治 見證",
      image: "/mission/C2/C2-07.png",
      date: "2025.01.05"
    },
    {
      id: 4,
      title: "工作蒙祝福 - 王建國 弟兄",
      subtitle: "事業發展 見證",
      image: "/mission/C2/C2-07.png",
      date: "2024.12.28"
    },
    {
      id: 5,
      title: "家庭關係修復 - 陳雅婷 姊妹",
      subtitle: "家庭和好 見證",
      image: "/mission/C2/C2-07.png",
      date: "2024.12.20"
    },
    {
      id: 6,
      title: "靈命成長 - 林志豪 弟兄",
      subtitle: "屬靈生命 見證",
      image: "/mission/C2/C2-07.png",
      date: "2024.12.15"
    }
  ]

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
                    className="block text-white px-4 py-3 border-l-4 border-l-[#F3A149] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
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

              {/* Testimonies List */}
              <div className="bg-white shadow-sm p-12">
                <div className="mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                    經歷上帝 生命歸主
                  </h1>
                  <p className="text-gray-600">真實的生命轉變見證</p>
                </div>

                {/* Testimonies Grid */}
                <div className="space-y-6">
                  {testimonies.map((testimony, index) => (
                    <div key={testimony.id} className="flex items-center space-x-6 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                      {/* Testimony Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24">
                          <img
                            src={testimony.image}
                            alt={testimony.title}
                            className="w-full h-full object-cover rounded-lg border-2 border-[#F3A149]"
                          />
                        </div>
                      </div>

                      {/* Testimony Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#333] mb-2">
                          {testimony.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimony.date}
                        </p>
                      </div>

                      {/* View Button */}
                      <div className="flex-shrink-0">
                        <Link 
                          href={`/mission-testimony/experience-god/${testimony.id}`}
                          className="inline-flex items-center px-4 py-2 bg-[#21807a] text-white rounded-lg hover:bg-[#1a6860] transition-colors text-sm font-medium"
                        >
                          查看詳情
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-sm text-gray-500 hover:text-[#21807a] disabled:opacity-50 disabled:cursor-not-allowed">
                      上一頁
                    </button>
                    <span className="px-3 py-2 text-sm bg-[#21807a] text-white rounded">1</span>
                    <button className="px-3 py-2 text-sm text-gray-500 hover:text-[#21807a]">
                      下一頁
                    </button>
                  </nav>
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