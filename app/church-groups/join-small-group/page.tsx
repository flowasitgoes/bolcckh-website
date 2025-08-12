import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: '參加小組聚會 | 高雄靈糧堂',
  description: '高雄靈糧堂小組聚會資訊，歡迎參加我們的小組聚會，與弟兄姊妹建立美好的團契關係。',
  keywords: '高雄靈糧堂, 小組聚會, 團契生活, 教會小組',
}

export default function JoinSmallGroupPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Main Content Section */}
        <section 
          className="flex justify-center items-center relative"
          style={{ 
            minHeight: '540px',
            background: '#F3A149',
            flexDirection: 'column',
            textAlign: 'center',
            fontSize: '30px'
          }}
        >
          {/* 返回按鈕 */}
          <div className="absolute top-4 left-4 z-10">
            <a 
              href="/church-groups"
              className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-200 font-semibold bg-black/20 rounded-lg px-3 py-1 text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回
            </a>
          </div>
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              參加小組聚會
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto px-4">
              歡迎參加高雄靈糧堂的小組聚會，與弟兄姊妹一同學習、分享、成長，建立美好的團契關係。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
