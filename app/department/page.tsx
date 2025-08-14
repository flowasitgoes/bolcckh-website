import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  DepartmentHero,
  DepartmentSections
} from '@/components/ui/department'
import '@/styles/department.css'

export const metadata: Metadata = {
  title: '部門介紹 | 高雄靈糧堂 - 認識我們的事工團隊',
  description: '高雄靈糧堂部門介紹，包含行政部門、敬拜部門、關懷部門、青少年部門等各個事工團隊的詳細介紹。',
  keywords: '高雄靈糧堂, 部門介紹, 事工團隊, 行政部門, 敬拜部門, 關懷部門, 青少年部門, 社會關懷',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '部門介紹 | 高雄靈糧堂 - 認識我們的事工團隊',
    description: '高雄靈糧堂部門介紹，包含行政部門、敬拜部門、關懷部門、青少年部門等各個事工團隊的詳細介紹。',
    url: 'https://conflux-tech.com/department',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂部門介紹',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '部門介紹 | 高雄靈糧堂 - 認識我們的事工團隊',
    description: '高雄靈糧堂部門介紹，包含行政部門、敬拜部門、關懷部門、青少年部門等各個事工團隊的詳細介紹。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function DepartmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <DepartmentHero />
        <DepartmentSections />
      </main>
      <Footer />
    </div>
  )
} 