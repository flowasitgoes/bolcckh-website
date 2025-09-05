'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/member-center.css'

export default function VenueReservationsPage() {
  const [formData, setFormData] = useState({
    gatheringName: '',
    rentalMethod: '單次',
    user: '',
    group: '',
    phone: '',
    attendees: '',
    venue: '601',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    applicant: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 處理場地借用申請邏輯
    console.log('提交場地借用申請', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleVenueChange = (venue: string) => {
    setFormData({
      ...formData,
      venue
    })
  }

  // 場地選項
  const venues = [
    { id: '601', name: '601 (100人)' },
    { id: '602', name: '602 (100人)' },
    { id: '603', name: '603 (100人)' },
    { id: '604', name: '604 (100人)' },
    { id: '605', name: '605 (100人)' },
    { id: '606', name: '606 (100人)' },
    { id: '607', name: '607 (100人)' },
    { id: '608', name: '608 (100人)' },
    { id: '609', name: '609 (100人)' },
    { id: '610', name: '610 (100人)' },
    { id: '611', name: '611 (100人)' },
    { id: '612', name: '612 (100人)' }
  ]

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



                {/* 活動場地預約 */}
                <a 
                  href="/member-center/venue-reservations"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    活動場地預約
                  </div>
                </a>

                {/* Separator */}
                <div className="border-t border-white/20 my-4"></div>

                {/* 小組長線上回報 */}
                <div className="space-y-1">
                  <div className="text-white/80 text-sm font-semibold px-4 py-2">
                    小組長線上回報
                  </div>
                  
                  {/* 子選項 */}
                  <a 
                    href="/member-center/small-group-report/weekly-report"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      小組週報表
                    </div>
                  </a>
                  <a 
                    href="/member-center/small-group-report/memorial-service"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      追思禮拜場地申請表
                    </div>
                  </a>
                  <a 
                    href="/member-center/small-group-report/wedding-ceremony"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    婚禮典禮場地申請單
                    </div>
                  </a>
                  <a 
                    href="/member-center/small-group-report/venue-change"
                    className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    場地異動申請表
                    </div>
                  </a>
                </div>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="member-center-login right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
              <div className="member-center-login-box">
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                      場地借用申請表 (一般場地)
                    </h2>
                    <p className="text-gray-600">
                      申請借用教會場地進行活動
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          聚會名稱
                        </label>
                        <input
                          type="text"
                          name="gatheringName"
                          value={formData.gatheringName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入聚會名稱"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          借用方式
                        </label>
                        <select
                          name="rentalMethod"
                          value={formData.rentalMethod}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          required
                        >
                          <option value="單次">單次</option>
                          <option value="定期">定期</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          使用者
                        </label>
                        <input
                          type="text"
                          name="user"
                          value={formData.user}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入使用者姓名"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          小組
                        </label>
                        <input
                          type="text"
                          name="group"
                          value={formData.group}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入小組名稱"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          手機
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入手機號碼"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          聚會人數約
                        </label>
                        <input
                          type="number"
                          name="attendees"
                          value={formData.attendees}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入預估人數"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    {/* 借用場地選擇 */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-4">
                        借用場地 (可複選)
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                        {venues.map((venue) => (
                          <label key={venue.id} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="venue"
                              value={venue.id}
                              checked={formData.venue === venue.id}
                              onChange={() => handleVenueChange(venue.id)}
                              className="w-4 h-4 text-[#21807a] border-gray-300 focus:ring-[#21807a]"
                            />
                            <span className="text-gray-700">{venue.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          借用日期
                        </label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                            required
                          />
                          <span className="text-gray-500">至</span>
                          <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          活動開始時間
                        </label>
                        <input
                          type="time"
                          name="startTime"
                          value={formData.startTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          活動結束時間
                        </label>
                        <input
                          type="time"
                          name="endTime"
                          value={formData.endTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          申請人
                        </label>
                        <input
                          type="text"
                          name="applicant"
                          value={formData.applicant}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入申請人姓名"
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit"
                        className="w-full bg-[#21807a] text-white py-3 rounded-lg hover:bg-[#1a6b66] transition-colors duration-200 font-semibold"
                      >
                        送出申請
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
