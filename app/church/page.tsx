import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '教會生活 | 高雄靈糧堂 - 牧養裝備、事工介紹、牧區族群',
  description: '探索高雄靈糧堂的教會生活，包括牧養裝備、事工介紹與呼召、牧區族群、聚會資訊等，一起在基督裡成長。',
  keywords: '高雄靈糧堂, 教會生活, 牧養裝備, 事工介紹, 牧區族群, 聚會資訊, 基督教, 信仰生活',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '教會生活 | 高雄靈糧堂 - 牧養裝備、事工介紹、牧區族群',
    description: '探索高雄靈糧堂的教會生活，包括牧養裝備、事工介紹與呼召、牧區族群、聚會資訊等，一起在基督裡成長。',
    url: 'https://conflux-tech.com/church',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂教會生活',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '教會生活 | 高雄靈糧堂 - 牧養裝備、事工介紹、牧區族群',
    description: '探索高雄靈糧堂的教會生活，包括牧養裝備、事工介紹與呼召、牧區族群、聚會資訊等，一起在基督裡成長。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

// 四面板資料
const churchPanels = [
  {
    title: '牧養裝備',
    subtitle: 'Pastoral care equipment',
    href: '/church-equip',
    bgColor: 'bg-[#fe7f4c]',
    image: '/church/B1/B01-06.png'
  },
  {
    title: '事工介紹與呼召',
    subtitle: 'Ministry introduction & Calling',
    href: '/church-groups',
    bgColor: 'bg-[#21807a]',
    image: '/church/B1/B01-06.png'
  },
  {
    title: '牧區族群',
    subtitle: 'Congregation',
    href: '/church-groups',
    bgColor: 'bg-[#21807a]',
    image: '/church/B1/B01-06.png'
  },
  {
    title: '聚會資訊',
    subtitle: 'Gathering information',
    href: '/church-gathering',
    bgColor: 'bg-[#fe7f4c]',
    image: '/church/B1/B01-06.png'
  }
]

function ChurchPanel({ panel }: { panel: typeof churchPanels[0] }) {
  // 根據背景色決定文字顏色
  const isOrangeBg = panel.bgColor === 'bg-[#fe7f4c]'
  const textColor = isOrangeBg ? 'text-gray-800' : 'text-[#fe7f4c]'
  
  return (
    <Link href={panel.href} className="block">
      <div className={`church-panel ${panel.bgColor} aspect-square flex flex-col justify-center items-center hover:shadow-lg transition-shadow duration-300 cursor-pointer`}>
        <div className="church-panel-content text-center relative">
          <div className="church-panel-title flex items-center justify-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{panel.title}</h3>
            <Image 
              src="/church/B1/B01-02.png" 
              alt="按鈕示意" 
              width={24} 
              height={24} 
              className="opacity-80"
            />
          </div>
          <p className={`text-2xl font-bold ${textColor}`}>{panel.subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default function ChurchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 頁首大圖 */}
        <div className="church-hero-banner w-full h-96 relative">
          <Image 
            src="/church/B1/B1-bn.png" 
            alt="教會生活" 
            fill 
            className="object-cover object-center" 
          />
        </div>

        {/* 四面板網格 */}
        <section className="church-panels-section">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {churchPanels.map((panel, index) => (
              <ChurchPanel key={index} panel={panel} />
            ))}
          </div>
        </section>

        {/* 牧養裝備橫幅 */}
        <section className="equip-banner-section">
          <div className="equip-banner-container-outer w-full mx-auto px-4 md:px-0">
            <div className="equip-banner-container relative h-96 overflow-hidden">
              <Image 
                src="/church/B1/B01-06.png" 
                alt="牧養裝備"
                fill
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold text-white mb-2">牧養裝備</h2>
                <p className="text-2xl font-bold text-white mb-4">Pastoral resources</p>
                <div className="text-white text-2xl">→</div>
              </div>
            </div>
          </div>
        </section>

        {/* 聖經經文引用 */}
        <section className="bible-quote-section bg-[#fe7f4c]">
          <div className="bible-quote-wrapper max-w-4xl mx-auto text-center px-4 md:px-0">
            <div className="bible-quote-container bg-white p-12 shadow-lg">
              <blockquote className="text-gray-800 text-xl leading-relaxed mb-6">
                <p className="mb-4">正如我們一個身子上有好些肢體，肢體也不都是一樣的用處。</p>
                <p className="mb-4">我們這許多人，在基督裡成為一身，互相聯絡作肢體，也是如此。</p>
                <div className="text-lg ">羅馬書 12:4-5</div>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 