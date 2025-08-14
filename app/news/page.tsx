import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  NewsHero,
  NewsMain
} from '@/components/ui/news'
import '@/styles/news.css'

export const metadata: Metadata = {
  title: '教會消息 | 高雄靈糧堂 - 最新活動與公告',
  description: '高雄靈糧堂最新消息，包含主日資訊、特別聚會、教會活動、講座課程等重要公告。',
  keywords: '高雄靈糧堂, 教會消息, 最新消息, 主日資訊, 教會活動, 特別聚會, 講座課程',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '教會消息 | 高雄靈糧堂 - 最新活動與公告',
    description: '高雄靈糧堂最新消息，包含主日資訊、特別聚會、教會活動、講座課程等重要公告。',
    url: 'https://conflux-tech.com/news',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂教會消息',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '教會消息 | 高雄靈糧堂 - 最新活動與公告',
    description: '高雄靈糧堂最新消息，包含主日資訊、特別聚會、教會活動、講座課程等重要公告。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsHero />
        <NewsMain />
      </main>
      <Footer />
    </div>
  )
} 