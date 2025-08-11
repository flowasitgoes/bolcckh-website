'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/member-center.css'

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    applicantName: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
    estimatedAttendees: '',
    eventDescription: '',
    specialRequirements: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 處理預約邏輯
    console.log('提交預約', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
                {/* 登入與註冊 */}
                <a 
                  href="/member-center"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
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
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
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
            <div className="member-center-login right-content-area lg:col-span-3 bg-[#F3A149] p-6 md:p-8">
              <div className="member-center-login-box">
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                      預約恩惠廳
                    </h2>
                    <p className="text-gray-600">
                      預約使用恩惠廳進行活動
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          申請人姓名
                        </label>
                        <input
                          type="text"
                          name="applicantName"
                          value={formData.applicantName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入申請人姓名"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          聯絡電話
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入聯絡電話"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          活動日期
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          活動時間
                        </label>
                        <select
                          name="eventTime"
                          value={formData.eventTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          required
                        >
                          <option value="">請選擇時間</option>
                          <option value="09:00-12:00">09:00-12:00</option>
                          <option value="13:00-16:00">13:00-16:00</option>
                          <option value="18:00-21:00">18:00-21:00</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          活動類型
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          required
                        >
                          <option value="">請選擇活動類型</option>
                          <option value="小組聚會">小組聚會</option>
                          <option value="禱告會">禱告會</option>
                          <option value="讀書會">讀書會</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          預估人數
                        </label>
                        <input
                          type="number"
                          name="estimatedAttendees"
                          value={formData.estimatedAttendees}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入預估人數"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        活動說明
                      </label>
                      <textarea
                        name="eventDescription"
                        value={formData.eventDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                        placeholder="請詳細說明活動內容"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        特殊需求
                      </label>
                      <textarea
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                        placeholder="如有特殊需求請說明"
                      />
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit"
                        className="w-full bg-[#21807a] text-white py-3 rounded-lg hover:bg-[#1a6b66] transition-colors duration-200 font-semibold"
                      >
                        送出預約
                      </button>
                    </div>
                  </form>
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