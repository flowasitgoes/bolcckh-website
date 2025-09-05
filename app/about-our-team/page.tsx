'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// 部門導航
const departments = [
  '傳道同工團隊',
  '行政同工團隊'
]

// 傳道同工團隊成員資料
const pastoralTeam = [
  { name: '羅邦明 曾惠娟 夫婦', image: 'pastoral/羅邦明和曾惠娟夫婦.jpg' },
  { name: '駱世雄 魏世文 夫婦', image: 'pastoral/駱世雄 魏世文 夫婦.jpg' },
  { name: '鄭定煇 楊明娟 夫婦', image: 'pastoral/鄭定煇 楊明娟 夫婦.jpg' },
  { name: '兵乾瑋 張煦慈 夫婦', image: 'pastoral/兵乾瑋 張煦慈 夫婦.jpg' },
  { name: '李翠燕 牧師', image: 'pastoral/李翠燕 牧師.jpg' },
  { name: '陳沛伶 傳道', image: 'pastoral/陳沛伶 傳道.jpg' },
  { name: '王麗貴 傳道', image: 'pastoral/王麗貴 傳道.jpg' },
  { name: '林麗華 傳道', image: 'pastoral/林麗華 傳道.jpg' },
  { name: '劉美玲 傳道', image: 'pastoral/劉美玲 傳道.jpg' },
  { name: '歐陽聖愛 傳道', image: 'pastoral/歐陽聖愛 傳道.jpg' },
  { name: '尹倩玉 傳道', image: 'pastoral/尹倩玉 傳道.jpg' },
  { name: '吳佩蓉 傳道', image: 'pastoral/吳佩蓉 傳道.jpg' },
  { name: '林永正 傳道', image: 'pastoral/林永正 傳道.jpg' }
]

// 行政同工團隊成員資料
const adminTeam = [
  { name: '石建華 總務部部長', image: 'admin/石建華.jpg' },
  { name: '林忠弘', image: 'admin/林忠弘.jpg' },
  { name: '曾柏宇', image: 'admin/曾柏宇.jpg' },
  { name: '潘進德', image: 'admin/潘進德.jpg' },
  { name: '呂文祥', image: 'admin/呂文祥.jpg' },
  { name: '宋君達', image: 'admin/宋君達.jpg' },
  { name: '陳威仲', image: 'admin/陳威仲.jpg' },
  { name: '力秀麗', image: 'admin/力秀麗.jpg' },
  { name: '賴碧霞', image: 'admin/賴碧霞.jpg' },
  { name: '黃安瑜', image: 'admin/黃安瑜.jpg' },
  { name: '簡富渝', image: 'admin/簡富渝.jpg' },
  { name: '吳靜賢', image: 'admin/吳靜賢.jpg' },
  { name: '解貴鷦', image: 'admin/解貴鷦.jpg' },
  { name: '翁雅玲', image: 'admin/翁雅玲.jpg' },
  { name: '蔡麗紅', image: 'admin/蔡麗紅.jpg' },
  { name: '方昌圓', image: 'admin/方昌圓.jpg' },
  { name: '吳芯芯', image: 'admin/芯芯.jpg' },
  { name: '包惠玲', image: 'admin/包惠玲.jpg' },
  { name: '蘇孟琳', image: 'admin/蘇孟琳.jpg' },
  { name: '劉芷吟', image: 'admin/芷吟.jpg' },
  { name: '鄭如君', image: 'admin/鄭如君.jpg' }
]

function TeamMemberCard({ member }: { member: typeof adminTeam[0] }) {
  const isCouple = member.name.includes('夫婦')
  
  return (
    <div className={`team-member-card bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      isCouple ? 'col-span-full' : ''
    }`}>
      <div className={`member-image-wrapper relative ${
        isCouple ? 'h-80' : ''
      }`}>
        <Image 
          src={`/about/A-3/${member.image}`} 
          alt={member.name}
          fill
          className="object-contain"
        />
        <div className="absolute bottom-2 right-2 text-[#555] px-2 py-1 text-base font-medium bg-[#d4d4d49e] rounded">
          {member.name}
        </div>
      </div>

    </div>
  )
}

export default function AboutOurTeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('傳道同工團隊')

  const currentTeam = selectedDepartment === '傳道同工團隊' ? pastoralTeam : adminTeam

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
                  onClick={() => setSelectedDepartment(dept)}
                  className={`department-tab px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                    selectedDepartment === dept
                      ? 'text-[#fe7f4c] border-b-2 border-[#fe7f4c]' 
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
              {currentTeam.map((member, index) => (
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