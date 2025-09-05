'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/member-center.css'

export default function VenueChangePage() {
  const [formData, setFormData] = useState({
    changeType: {
      cancel: false,
      changeLocation: false,
      changeTime: false,
      other: false
    },
    year: '',
    month: '',
    day: '',
    originalMeetings: [
      {
        name: '',
        date: '',
        venue: '',
        time: ''
      }
    ],
    originalVenueNotes: '',
    newMeetings: [
      {
        name: '',
        date: '',
        venue: '',
        time: ''
      }
    ],
    newVenueNotes: ''
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleChangeTypeChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      changeType: {
        ...prev.changeType,
        [field]: value
      }
    }))
  }

  const handleOriginalMeetingChange = (index: number, field: string, value: any) => {
    const newMeetings = [...formData.originalMeetings]
    newMeetings[index] = {
      ...newMeetings[index],
      [field]: value
    }
    setFormData(prev => ({
      ...prev,
      originalMeetings: newMeetings
    }))
  }

  const handleNewMeetingChange = (index: number, field: string, value: any) => {
    const newMeetings = [...formData.newMeetings]
    newMeetings[index] = {
      ...newMeetings[index],
      [field]: value
    }
    setFormData(prev => ({
      ...prev,
      newMeetings: newMeetings
    }))
  }

  const addOriginalMeeting = () => {
    setFormData(prev => ({
      ...prev,
      originalMeetings: [...prev.originalMeetings, {
        name: '',
        date: '',
        venue: '',
        time: ''
      }]
    }))
  }

  const addNewMeeting = () => {
    setFormData(prev => ({
      ...prev,
      newMeetings: [...prev.newMeetings, {
        name: '',
        date: '',
        venue: '',
        time: ''
      }]
    }))
  }

  const removeOriginalMeeting = (index: number) => {
    if (formData.originalMeetings.length > 1) {
      const newMeetings = formData.originalMeetings.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        originalMeetings: newMeetings
      }))
    }
  }

  const removeNewMeeting = (index: number) => {
    if (formData.newMeetings.length > 1) {
      const newMeetings = formData.newMeetings.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        newMeetings: newMeetings
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // 這裡可以添加表單提交邏輯
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/member-center/hero-image.png"
          alt="場地異動申請表 - 雙手捧著花朵"
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
                className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  活動場地預約
                </div>
              </a>

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
                  className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 bg-white/20"
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
          <div className="right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6 border-b-2 border-gray-800 pb-4">
                <div className="text-2xl font-bold">高雄靈糧堂 - 場地異動申請表</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6">
                  <span className="font-medium">異動性質：</span>
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox"
                        checked={formData.changeType.cancel}
                        onChange={(e) => handleChangeTypeChange('cancel', e.target.checked)}
                      />
                      <span>取消場地</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox"
                        checked={formData.changeType.changeLocation}
                        onChange={(e) => handleChangeTypeChange('changeLocation', e.target.checked)}
                      />
                      <span>變更地點</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox"
                        checked={formData.changeType.changeTime}
                        onChange={(e) => handleChangeTypeChange('changeTime', e.target.checked)}
                      />
                      <span>變更時間</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox"
                        checked={formData.changeType.other}
                        onChange={(e) => handleChangeTypeChange('other', e.target.checked)}
                      />
                      <span>其他</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end items-center space-x-2">
                  <span>年</span>
                  <input 
                    className="border-b border-gray-400 w-16 text-center" 
                    placeholder="" 
                    type="number"
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                  />
                  <span>月</span>
                  <input 
                    className="border-b border-gray-400 w-12 text-center" 
                    placeholder="" 
                    type="number"
                    value={formData.month}
                    onChange={(e) => handleInputChange('month', e.target.value)}
                  />
                  <span>日 p.</span>
                </div>

                <div className="space-y-6">
                  <div className="border border-gray-400">
                    <div className="bg-gray-100 border-b border-gray-400 p-3 text-center font-bold">（原訂）申請項目</div>
                    <div className="p-3 space-y-4">
                      {formData.originalMeetings.map((meeting, index) => (
                        <div key={index} className="border border-gray-400 p-3">
                          <div className="mb-2 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>{index + 1}. 聚會名稱：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-48 px-2 py-1" 
                                type="text"
                                value={meeting.name}
                                onChange={(e) => handleOriginalMeetingChange(index, 'name', e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>日期：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-24 px-2 py-1" 
                                type="text"
                                value={meeting.date}
                                onChange={(e) => handleOriginalMeetingChange(index, 'date', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>借用場地：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-48 px-2 py-1" 
                                type="text"
                                value={meeting.venue}
                                onChange={(e) => handleOriginalMeetingChange(index, 'venue', e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>時間：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-24 px-2 py-1" 
                                type="text"
                                value={meeting.time}
                                onChange={(e) => handleOriginalMeetingChange(index, 'time', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="border border-gray-400 p-3">
                        <div className="mb-2">場地備註：</div>
                        <textarea 
                          className="w-full h-16 border border-gray-400 p-2 resize-none"
                          value={formData.originalVenueNotes}
                          onChange={(e) => handleInputChange('originalVenueNotes', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-400">
                    <div className="bg-gray-100 border-b border-gray-400 p-3 text-center font-bold">（新借）申請項目</div>
                    <div className="p-3 space-y-4">
                      {formData.newMeetings.map((meeting, index) => (
                        <div key={index} className="border border-gray-400 p-3">
                          <div className="mb-2 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>{index + 1}. 聚會名稱：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-48 px-2 py-1" 
                                type="text"
                                value={meeting.name}
                                onChange={(e) => handleNewMeetingChange(index, 'name', e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>日期：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-24 px-2 py-1" 
                                type="text"
                                value={meeting.date}
                                onChange={(e) => handleNewMeetingChange(index, 'date', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>借用場地：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-48 px-2 py-1" 
                                type="text"
                                value={meeting.venue}
                                onChange={(e) => handleNewMeetingChange(index, 'venue', e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                              <span>時間：</span>
                              <input 
                                className="border-b border-gray-400 w-full md:w-24 px-2 py-1" 
                                type="text"
                                value={meeting.time}
                                onChange={(e) => handleNewMeetingChange(index, 'time', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="border border-gray-400 p-3">
                        <div className="mb-2">場地備註：</div>
                        <textarea 
                          className="w-full h-16 border border-gray-400 p-2 resize-none"
                          value={formData.newVenueNotes}
                          onChange={(e) => handleInputChange('newVenueNotes', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 p-3 text-sm">
                  注意事項：新借場地為尊貴廳、恩惠廳或管制場地，請重新填寫場地借用申請單。
                </div>

                <div className="text-right text-sm font-bold">R-GE-08-P03A</div>

                <div className="text-center pt-6">
                  <button 
                    type="submit" 
                    className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors"
                  >
                    提交申請表
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
