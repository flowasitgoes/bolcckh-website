import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero, MessageReviewMain } from '@/components/ui/news'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '重溫信息 | 高雄靈糧堂 - 過往信息回顧',
  description: '高雄靈糧堂重溫信息，包含過往主日信息、特別聚會信息、講座課程等重要內容回顧。',
  keywords: '高雄靈糧堂, 重溫信息, 過往信息, 主日信息, 特別聚會信息, 講座課程',
  
  openGraph: {
    title: '重溫信息 | 高雄靈糧堂 - 過往信息回顧',
    description: '高雄靈糧堂重溫信息，包含過往主日信息、特別聚會信息、講座課程等重要內容回顧。',
    url: 'https://conflux-tech.com/news/message-review',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂重溫信息',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: '重溫信息 | 高雄靈糧堂 - 過往信息回顧',
    description: '高雄靈糧堂重溫信息，包含過往主日信息、特別聚會信息、講座課程等重要內容回顧。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function MessageReviewPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsHero />
        <MessageReviewMain />
      </main>
      <Footer />
    </div>
  )
} 