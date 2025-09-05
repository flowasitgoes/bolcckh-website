import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我們的團隊 | 高雄靈糧堂 - 傳道同工、行政團隊介紹',
  description: '認識高雄靈糧堂的團隊成員，包括傳道同工、總務部、場地部、媒體部、裝備部、拓展部、行政部等各部門同工。',
  keywords: '高雄靈糧堂, 我們的團隊, 傳道同工, 行政團隊, 教會同工, 事工團隊, 基督教團隊',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '我們的團隊 | 高雄靈糧堂 - 傳道同工、行政團隊介紹',
    description: '認識高雄靈糧堂的團隊成員，包括傳道同工、總務部、場地部、媒體部、裝備部、拓展部、行政部等各部門同工。',
    url: 'https://conflux-tech.com/about-our-team',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂我們的團隊',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '我們的團隊 | 高雄靈糧堂 - 傳道同工、行政團隊介紹',
    description: '認識高雄靈糧堂的團隊成員，包括傳道同工、總務部、場地部、媒體部、裝備部、拓展部、行政部等各部門同工。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function AboutOurTeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
