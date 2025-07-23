'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import { MemberLogin, MemberRegister } from '@/components/ui/member-center'

export default function MemberCenterPage() {
  const [activeSection, setActiveSection] = useState('login-register')
  const [showRegister, setShowRegister] = useState(false)

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
        if (showRegister) {
          return <MemberRegister onSwitchToLogin={() => setShowRegister(false)} />
        }
        return <MemberLogin onSwitchToRegister={() => setShowRegister(true)} />

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
              
              {/* <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="bg-[#21807a] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b66] transition-colors duration-200 font-semibold">
                  編輯資料
                </button>
              </div> */}
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
              {/* 會員資料 */}
              <div className="mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-4">姓名：</span>
                    <span className="text-gray-800 font-semibold">{memberData.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 font-medium mr-4">奉獻編號：</span>
                    <span className="text-gray-800 font-semibold">{memberData.donationId}</span>
                  </div>
                </div>
              </div>
              
              {/* 奉獻紀錄表格 */}
              <div className="overflow-x-auto">
                <table className="w-full border border-[#21807a] rounded-lg">
                  <thead>
                    <tr className="bg-[#21807a] text-white">
                      <th className="px-4 py-3 text-left font-semibold">奉獻日期</th>
                      <th className="px-4 py-3 text-left font-semibold">奉獻金額</th>
                      <th className="px-4 py-3 text-left font-semibold">奉獻收據編號</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#21807a]">
                      <td className="px-4 py-3 text-gray-800">113.06.01</td>
                      <td className="px-4 py-3 text-gray-800">5000</td>
                      <td className="px-4 py-3 text-gray-800">00001130601056</td>
                    </tr>
                    <tr className="border-b border-[#21807a]">
                      <td className="px-4 py-3 text-gray-800">113.05.15</td>
                      <td className="px-4 py-3 text-gray-800">3000</td>
                      <td className="px-4 py-3 text-gray-800">00001130515042</td>
                    </tr>
                    <tr className="border-b border-[#21807a]">
                      <td className="px-4 py-3 text-gray-800">113.04.20</td>
                      <td className="px-4 py-3 text-gray-800">2000</td>
                      <td className="px-4 py-3 text-gray-800">00001130420038</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* 統計資訊 */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">總奉獻金額：</span>
                  <span className="text-[#21807a] font-bold text-xl">10,000</span>
                </div>
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
              <form className="space-y-6">
                {/* 個人資料 */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label className="text-gray-700 font-medium w-32">使用人姓名：</label>
                    <input
                      type="text"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      placeholder="請輸入姓名"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <label className="text-gray-700 font-medium w-32">使用人電話：</label>
                    <input
                      type="tel"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      placeholder="請輸入電話號碼"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <label className="text-gray-700 font-medium w-32">預約日期：</label>
                    <input
                      type="date"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* 當日時段 */}
                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium">當日時段：</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="timeSlot"
                        value="male"
                        className="w-4 h-4 text-[#21807a] border-gray-300 focus:ring-[#21807a]"
                      />
                      <span className="ml-2 text-gray-700">男</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="timeSlot"
                        value="female"
                        className="w-4 h-4 text-[#21807a] border-gray-300 focus:ring-[#21807a]"
                      />
                      <span className="ml-2 text-gray-700">女</span>
                    </label>
                  </div>
                </div>

                {/* 選擇奉獻方式 */}
                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium">選擇奉獻方式：</label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="offeringMethod"
                        value="creditCard"
                        className="w-4 h-4 text-[#21807a] border-gray-300 focus:ring-[#21807a]"
                      />
                      <span className="ml-2 text-gray-700">信用卡</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="offeringMethod"
                        value="bankTransfer"
                        className="w-4 h-4 text-[#21807a] border-gray-300 focus:ring-[#21807a]"
                      />
                      <span className="ml-2 text-gray-700">銀行轉帳</span>
                    </label>
                  </div>
                </div>

                {/* 金額選定 */}
                <div className="space-y-3">
                  <label className="block text-gray-700 font-medium">金額選定：</label>
                  <div className="flex items-center">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="amount"
                        value="30000"
                        className="w-4 h-4 text-[#21807a] border-gray-300 focus:ring-[#21807a]"
                      />
                      <span className="ml-2 text-gray-700 font-semibold">新台幣30000元</span>
                    </label>
                  </div>
                </div>

                {/* 送出按鈕 */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-200 font-semibold text-lg"
                  >
                    送出預約
                  </button>
                </div>
              </form>
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
            <div className={`${activeSection === 'login-register' && !showRegister ? 'member-center-login' : 'member-center-register'} right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8`}>
              {renderRightContent()}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 