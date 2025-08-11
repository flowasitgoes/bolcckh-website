'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import { MemberLogin, MemberRegister } from '@/components/ui/member-center'
import '@/styles/member-center.css'

export default function MemberCenterPage() {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/member-center/hero-image.png"
            alt="會友中心 - 雙手捧著花朵"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </section>

        {/* Member Center Dashboard Section */}
        <section className="member-dashboard-section">
          {/* Bottom Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-1 bg-[#21807a] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                會友中心
              </h2>
              
              {/* Navigation Menu */}
              <nav className="space-y-2">
                {/* 登入與註冊 - 預設選中 */}
                <a 
                  href="/member-center"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    登入與註冊
                  </div>
                </a>

                {/* 會友資料 */}
                <div className="space-y-1">
                  <div className="text-white/80 text-sm font-semibold px-4 py-2">
                    會友資料
                  </div>
                  
                  {/* 個人資料 */}
                  <a 
                    href="/member-center/personal-info"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      個人資料
                    </div>
                  </a>

                  {/* 密碼修改 */}
                  <a 
                    href="/member-center/password"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      密碼修改
                    </div>
                  </a>

                  {/* 奉獻紀錄查詢 */}
                  <a 
                    href="/member-center/offering-search"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      奉獻紀錄查詢
                    </div>
                  </a>
                </div>

                {/* Separator */}
                <div className="border-t border-white/20 my-4"></div>

                {/* 活動相關 */}
                <div className="text-white/80 text-sm font-semibold px-4 py-2">
                  活動相關
                </div>

                {/* 預約恩惠廳 */}
                <a 
                  href="/member-center/reservations"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    預約恩惠廳
                  </div>
                </a>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className={`${!showRegister ? 'member-center-login' : 'member-center-register'} right-content-area lg:col-span-3 bg-[#F3A149]`}>
              {showRegister ? (
                <MemberRegister onSwitchToLogin={() => setShowRegister(false)} />
              ) : (
                <MemberLogin onSwitchToRegister={() => setShowRegister(true)} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 