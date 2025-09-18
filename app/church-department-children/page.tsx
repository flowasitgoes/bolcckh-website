import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '兒童牧區 | 高雄靈糧堂',
  description: '高雄靈糧堂兒童牧區，提供兒童信徒的牧養和關懷，歡迎參加兒童牧區的聚會和活動。',
  keywords: '高雄靈糧堂, 兒童牧區, 兒童聚會, 教會牧養',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '兒童牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂兒童牧區，提供兒童信徒的牧養和關懷，歡迎參加兒童牧區的聚會和活動。',
    url: 'https://conflux-tech.com/church-department-children',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂兒童牧區',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '兒童牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂兒童牧區，提供兒童信徒的牧養和關懷，歡迎參加兒童牧區的聚會和活動。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function ChurchDepartmentChildrenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="dt-hero-section">
          <img src="/church/B4/B4.png" alt="兒童牧區" />
        </div>

        <section className="dt-2-col-side-section hero-section relative h-48 md:h-96 flex flex-col md:flex-row">
          {/* Full width - Orange background with text */}
          <div className="dt-right-side-section w-full h-48 md:h-full bg-[#fe7f4c] flex flex-col justify-center items-center text-white p-4 md:p-8">
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-bold mb-2">兒童牧區</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#172d2d', borderBottom: '1px solid #FFF', paddingBottom: '10px'}}>Welcome!</h2>
              {/* <div className="w-12 md:w-16 h-0.5 bg-white mx-auto mb-4"></div> */}
              <p className="text-base md:text-lg mb-4">兒童牧區主日崇拜時段</p>
              {/* <div className="bg-[#21807a] px-4 md:px-6 py-2 md:py-3 rounded">
                <p className="text-lg md:text-xl font-semibold">每週日上午 08:30 & 10:30 - 1F 慈愛廳</p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content-section bg-[#21807a] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg p-12 shadow-lg" style={{borderRadius: '40px'}}>
              <div className="prose prose-lg max-w-none text-[#444]">
                {/* 兒童崇拜時段 */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-[#07847f] mb-6 text-center">兒童崇拜時段</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <h4 className="text-lg font-bold text-[#07847f] mb-3">1. 天國小牧人崇拜</h4>
                      <p className="text-gray-700 mb-2">6~12歲孩童</p>
                      <p className="text-gray-700 mb-2">每週日早上 08:30＆10:30</p>
                      <p className="text-gray-700 font-semibold">1F 慈愛廳</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <h4 className="text-lg font-bold text-[#07847f] mb-3">2. 親子同心崇拜</h4>
                      <p className="text-gray-700 mb-2">0~3歲孩童</p>
                      <p className="text-gray-700 mb-2">每週日早上 08:30＆10:30</p>
                      <p className="text-gray-700 font-semibold">3F 榮耀廳親子室</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <h4 className="text-lg font-bold text-[#07847f] mb-3">3. 天國小活石崇拜</h4>
                      <p className="text-gray-700 mb-2">3~6歲孩童</p>
                      <p className="text-gray-700 mb-2">每週日早上 10:30</p>
                      <p className="text-gray-700 font-semibold">1F 慈愛廳</p>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <div>
                    <p className="text-xl font-bold text-[#07847f] mb-4">
                      耶穌的愛吸引孩子，孩子就快跑跟隨耶穌。
                    </p>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed text-gray-700">
                    孩子們樂意愛耶穌，愛教會，成為耶穌小精兵，興起為耶穌，勇敢踏出去，成為多人的祝福！
                    </p>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">
                      歡迎來到高雄靈糧堂兒童牧區，來到這裡你會成為被耶穌得著的孩子，在詩歌敬拜中經歷神愛的同在，
                    </p>
                    
                    <div className="space-y-3 text-left max-w-3xl mx-auto">
                      <p>在聆聽聖經信息及背誦金句中得著聰明智慧，</p>
                      <p>在信仰訓練中提昇生命品格，</p>
                      <p>在小組中與朋友建立美好情誼，</p>
                      <p>在禱告中與親子間建立愛與信任。</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg leading-relaxed text-gray-700 font-semibold">
                      在這裡，我們是一群蒙神所愛、蒙神祝福的孩子。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
