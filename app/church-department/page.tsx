import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '牧區族群 | 高雄靈糧堂 - 成人、原民、學生、台語、社青、兒童牧區',
  description: '認識高雄靈糧堂的六大牧區族群：成人牧區、原民牧區、學生牧區、台語牧區、社青牧區、兒童牧區，每個牧區都有獨特的關懷與服事。',
  keywords: '高雄靈糧堂, 牧區族群, 成人牧區, 原民牧區, 學生牧區, 台語牧區, 社青牧區, 兒童牧區',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '牧區族群 | 高雄靈糧堂 - 成人、原民、學生、台語、社青、兒童牧區',
    description: '認識高雄靈糧堂的六大牧區族群：成人牧區、原民牧區、學生牧區、台語牧區、社青牧區、兒童牧區，每個牧區都有獨特的關懷與服事。',
    url: 'https://conflux-tech.com/church-department',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂牧區族群',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '牧區族群 | 高雄靈糧堂 - 成人、原民、學生、台語、社青、兒童牧區',
    description: '認識高雄靈糧堂的六大牧區族群：成人牧區、原民牧區、學生牧區、台語牧區、社青牧區、兒童牧區，每個牧區都有獨特的關懷與服事。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

// 牧區族群資料
const departments = [
  {
    title: '成人牧區',
    subtitle: 'Adult Pastoral Area',
    image: '/church/B3/B03-01.png'
  },
  {
    title: '原民牧區',
    subtitle: 'Indigenous Pastoral Area',
    image: '/church/B3/B03-02.png'
  },
  {
    title: '學生牧區',
    subtitle: 'Student Pastoral Area',
    image: '/church/B3/B03-03.png'
  },
  {
    title: '台語牧區',
    subtitle: 'Taiwanese-speaking Pastoral Area',
    image: '/church/B3/B03-04.png'
  },
  {
    title: '社青牧區',
    subtitle: 'Young Adult Pastoral Area',
    image: '/church/B3/B03-05.png'
  },
  {
    title: '兒童牧區',
    subtitle: 'Children\'s Pastoral Area',
    image: '/church/B3/B03-06.png' // 使用B03-01作為兒童牧區圖片
  }
]

function DepartmentPanel({ department }: { department: typeof departments[0] }) {
  return (
    <div className="department-panel aspect-square relative overflow-hidden group cursor-pointer">
      <Image 
        src={department.image} 
        alt={department.title}
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
      </div>
    </div>
  )
}

export default function ChurchDepartmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 頁首大圖 */}
        <div className="church-department-hero-banner w-full h-96 relative">
          <Image 
            src="/church/B3/B3-bn.png" 
            alt="牧區族群" 
            fill 
            className="object-cover object-center" 
          />
        </div>

        {/* 標題區 */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            {/* <h2 className="text-3xl font-bold text-[#21807a] mb-2">牧區族群</h2>
            <p className="text-lg text-gray-700">Pastoral Groups</p> */}
          </div>
        </div>

        {/* 牧區族群網格 */}
        <section className="departments-section">
          <div className="max-w-6xl mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((department, index) => (
                <DepartmentPanel key={index} department={department} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 