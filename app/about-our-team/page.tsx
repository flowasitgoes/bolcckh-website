import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

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

// 部門導航
const departments = [
  '傳道同工團隊',
  '總務部',
  '場地部',
  '媒體部',
  '裝備部',
  '拓展部',
  '行政部'
]

// 行政部團隊成員資料（按照從上到下的順序）
const adminTeam = [
  { name: '石建華', image: 'A3-img_工作區域 1 複本 10.png' },
  { name: '力秀麗', image: 'A3-img_工作區域 1 複本 11.png' },
  { name: '文祥', image: 'A3-img_工作區域 1 複本 12.png' },
  { name: '宋君達', image: 'A3-img_工作區域 1 複本 13.png' },
  { name: '林忠弘', image: 'A3-img_工作區域 1 複本 14.png' },
  { name: '翁雅玲', image: 'A3-img_工作區域 1 複本 15.png' },
  { name: '陳威仲', image: 'A3-img_工作區域 1 複本 16.png' },
  { name: '曾柏宇', image: 'A3-img_工作區域 1 複本 17.png' },
  { name: '黃安瑜', image: 'A3-img_工作區域 1 複本 18.png' },
  { name: '楊宸睿', image: 'A3-img_工作區域 1 複本 19.png' },
  { name: '潘進德', image: 'A3-img_工作區域 1 複本 20.png' },
  { name: '龔碧霞', image: 'A3-img_工作區域 1 複本 21.png' }
]

function TeamMemberCard({ member }: { member: typeof adminTeam[0] }) {
  return (
    <div className="team-member-card bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="member-image-wrapper relative">
        <Image 
          src={`/about/A-3/${member.image}`} 
          alt={member.name}
          fill
          className="object-contain"
        />
      </div>

    </div>
  )
}

export default function AboutOurTeamPage() {
  return (
    <div className="about-our-team-container min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* 頁首大圖 */}
        <div className="team-hero-banner w-full h-64 relative">
          <Image 
            src="/about/A-3/Ａ3-topB.png" 
            alt="我們的團隊" 
            fill 
            className="object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          </div>
        </div>

        {/* 標題區 */}
        <div className="our-team-department-label max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#21807a] mb-2">我們的團隊</h2>
            <p className="text-lg text-gray-700">Our Team</p>
          </div>
        </div>

        {/* 部門導航 */}
        <div className="department-nav ">
          <div className="max-w-6xl mx-auto px-4">
            <div className="our-team-department-nav flex flex-wrap justify-center gap-8 py-4">
              {departments.map((dept, index) => (
                <button
                  key={index}
                  className={`department-tab px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                    dept === '行政部' 
                      ? 'text-orange-500 border-b-2 border-orange-500' 
                      : 'text-gray-600 hover:text-[#21807a]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 團隊成員網格 */}
        <section className="team-members-section py-16" >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adminTeam.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 