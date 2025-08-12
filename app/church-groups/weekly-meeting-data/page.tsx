import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: '本週小組聚會資料 | 高雄靈糧堂',
  description: '高雄靈糧堂本週小組聚會資料，提供最新的聚會資訊和相關資料。',
  keywords: '高雄靈糧堂, 小組聚會, 聚會資料, 教會生活',
}

export default function WeeklyMeetingDataPage() {
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
              本週小組聚會資料
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto px-4">
              歡迎查看本週的小組聚會資料，了解最新的聚會安排和相關資訊。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
