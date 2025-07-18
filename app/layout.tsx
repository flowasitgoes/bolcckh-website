import type { Metadata } from 'next'
import './globals.css'
import '@/styles/globals.css'
import '@/styles/about.css'
import '@/styles/church.css'

export const metadata: Metadata = {
  title: '高雄靈糧堂 - 歡迎來到主的家',
  description: '高雄靈糧堂官方網站，提供教會資訊、聚會時間、小組活動、信仰資源等服務，歡迎您來到主的家。',
  keywords: '高雄靈糧堂, 教會, 基督教, 信仰, 聚會, 小組, 禱告, 敬拜, 高雄教會',
  authors: [{ name: '高雄靈糧堂' }],
  generator: 'Conflux Group',
  metadataBase: new URL('https://conflux-tech.com'),
  
  // Open Graph (社群分享)
  openGraph: {
    title: '高雄靈糧堂 - 歡迎來到主的家',
    description: '高雄靈糧堂官方網站，提供教會資訊、聚會時間、小組活動、信仰資源等服務。',
    url: 'https://conflux-tech.com',
    siteName: '高雄靈糧堂',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '高雄靈糧堂 - 歡迎來到主的家',
    description: '高雄靈糧堂官方網站，提供教會資訊、聚會時間、小組活動、信仰資源等服務。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
  
  // 其他meta標籤
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
    apple: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
