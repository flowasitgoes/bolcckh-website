'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'

export default function MemberCenterPage() {
  const [activeSection, setActiveSection] = useState('login-register')

  // 模擬會員資料
  const memberData = {
    name: '薛憲聰',
    phone: '0919394300',
    email: 'rott497@gmail.com',
    donationId: '7503114134',
    accountLevel: '會友',
    discipleshipCourse: '門徒大學一年級'
  }

  // 渲染右側內容區域
  const renderRightContent = () => {
    switch (activeSection) {
      case 'login-register':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-white/90">
                歡迎來到高雄靈糧堂會員中心
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* 會員登入 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#21807a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-2">
                    會員登入
                  </h3>
                  <p className="text-gray-600">
                    已有會員帳號？請登入
                  </p>
                </div>
                <a 
                  href="/member-center/login"
                  className="block w-full bg-[#21807a] text-white text-center py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
                >
                  立即登入
                </a>
              </div>

              {/* 會員註冊 */}
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#21807a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-2">
                    會員註冊
                  </h3>
                  <p className="text-gray-600">
                    還沒有會員帳號？立即註冊
                  </p>
                </div>
                <a 
                  href="/member-center/register"
                  className="block w-full bg-[#21807a] text-white text-center py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
                >
                  立即註冊
                </a>
              </div>
            </div>
          </div>
        )

      case 'personal-info':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                個人資料
              </h2>
              <p className="text-white/90">
                查看和管理您的個人資料
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">姓名：</span>
                    <span className="text-gray-800 font-semibold">{memberData.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">手機號碼：</span>
                    <span className="text-gray-800 font-semibold">{memberData.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">Email：</span>
                    <span className="text-gray-800 font-semibold">{memberData.email}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">奉獻編號：</span>
                    <span className="text-gray-800 font-semibold">{memberData.donationId}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">帳號等級：</span>
                    <span className="text-gray-800 font-semibold">{memberData.accountLevel}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium w-24">門訓課程：</span>
                    <span className="text-gray-800 font-semibold">{memberData.discipleshipCourse}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="bg-[#21807a] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b66] transition-colors duration-200 font-semibold">
                  編輯資料
                </button>
              </div>
            </div>
          </div>
        )

      case 'change-password':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                密碼修改
              </h2>
              <p className="text-white/90">
                修改您的登入密碼
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    目前密碼
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    placeholder="請輸入目前密碼"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    新密碼
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    placeholder="請輸入新密碼"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    確認新密碼
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    placeholder="請再次輸入新密碼"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-200 font-semibold"
                >
                  修改密碼
                </button>
              </form>
            </div>
          </div>
        )

      case 'donation-records':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                奉獻紀錄查詢
              </h2>
              <p className="text-white/90">
                查看您的奉獻歷史記錄
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-gray-600">奉獻紀錄功能開發中...</p>
              </div>
            </div>
          </div>
        )

      case 'reserve-grace-hall':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                預約恩惠廳
              </h2>
              <p className="text-white/90">
                預約教會恩惠廳使用
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600">預約功能開發中...</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/member-center/hero-image.png"
            alt="會員中心 - 雙手捧著花朵"
            fill
            className="object-cover object-center"
            priority
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
                <button 
                  onClick={() => setActiveSection('login-register')}
                  className={`block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 ${
                    activeSection === 'login-register' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    登入與註冊
                  </div>
                </button>

                {/* 會友資料 */}
                <div className="space-y-1">
                  <div className="text-white/80 text-sm font-semibold px-4 py-2">
                    會友資料
                  </div>
                  
                  {/* 個人資料 */}
                  <button 
                    onClick={() => setActiveSection('personal-info')}
                    className={`block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 ${
                      activeSection === 'personal-info' ? 'bg-white/20' : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      個人資料
                    </div>
                  </button>

                  {/* 密碼修改 */}
                  <button 
                    onClick={() => setActiveSection('change-password')}
                    className={`block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 ${
                      activeSection === 'change-password' ? 'bg-white/20' : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      密碼修改
                    </div>
                  </button>

                  {/* 奉獻紀錄查詢 */}
                  <button 
                    onClick={() => setActiveSection('donation-records')}
                    className={`block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 ${
                      activeSection === 'donation-records' ? 'bg-white/20' : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      奉獻紀錄查詢
                    </div>
                  </button>
                </div>

                {/* Separator */}
                <div className="border-t border-white/20 my-4"></div>

                {/* 活動相關 */}
                <div className="text-white/80 text-sm font-semibold px-4 py-2">
                  活動相關
                </div>

                {/* 預約恩惠廳 */}
                <button 
                  onClick={() => setActiveSection('reserve-grace-hall')}
                  className={`block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 ${
                    activeSection === 'reserve-grace-hall' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    預約恩惠廳
                  </div>
                </button>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
              {renderRightContent()}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 