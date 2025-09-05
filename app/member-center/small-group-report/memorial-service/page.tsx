'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/member-center.css'

export default function MemorialServicePage() {
  const [formData, setFormData] = useState({
    year: '',
    month: '',
    day: '',
    deceasedName: '',
    venue: '',
    ceremonyYear: '',
    ceremonyMonth: '',
    ceremonyDay: '',
    ceremonyWeek: '',
    ceremonyTime: '',
    ceremonyStartTime: '',
    ceremonyEndTime: '',
    setupYear: '',
    setupMonth: '',
    setupDay: '',
    setupWeek: '',
    setupTime: '',
    setupStartTime: '',
    setupEndTime: '',
    equipment: {
      robes: false,
      materials: false
    },
    otherEquipment: '',
    soundControl: '',
    soundControlSupport: '',
    ppt: '',
    pptSupport: '',
    applicantName: '',
    applicantPhone: '',
    district: '',
    groupName: '',
    coordinator: '',
    chiefOrganizer: '',
    chiefOrganizerPhone: '',
    familySignature: '',
    deposit: '',
    depositSignature: ''
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleEquipmentChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      equipment: {
        ...prev.equipment,
        [field]: value
      }
    }))
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
          alt="追思禮拜場地申請表 - 雙手捧著花朵"
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
                  className="block w-full text-left text-white rounded-lg px-4 py-2 ml-4 transition-colors duration-200 bg-white/20"
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
          <div className="right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <div className="text-center py-6 border-b-2 border-gray-800 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <h1 className="text-xl font-bold">財團法人中國基督教靈糧世界佈道會高雄靈糧堂</h1>
                </div>
                <h2 className="text-lg font-semibold mb-4">本堂會友追思禮拜場地申請表</h2>
                <div className="flex justify-end items-center space-x-2 text-sm">
                  <span>日期：</span>
                  <input 
                    className="border-b border-gray-400 w-16 text-center" 
                    placeholder="年" 
                    type="number"
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                  />
                  <span>年</span>
                  <input 
                    className="border-b border-gray-400 w-12 text-center" 
                    placeholder="月" 
                    type="number"
                    value={formData.month}
                    onChange={(e) => handleInputChange('month', e.target.value)}
                  />
                  <span>月</span>
                  <input 
                    className="border-b border-gray-400 w-12 text-center" 
                    placeholder="日" 
                    type="number"
                    value={formData.day}
                    onChange={(e) => handleInputChange('day', e.target.value)}
                  />
                  <span>日</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span>故</span>
                  <input 
                    className="border-b border-gray-400 flex-1 px-2 py-1" 
                    placeholder="請輸入姓名" 
                    type="text"
                    value={formData.deceasedName}
                    onChange={(e) => handleInputChange('deceasedName', e.target.value)}
                  />
                  <span>追思禮拜</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">借用場地：</span>
                    <label className="flex items-center space-x-2">
                      <input 
                        className="w-4 h-4" 
                        type="radio" 
                        value="500" 
                        name="venue"
                        checked={formData.venue === '500'}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                      />
                      <span>尊貴廳(500人)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        className="w-4 h-4" 
                        type="radio" 
                        value="300" 
                        name="venue"
                        checked={formData.venue === '300'}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                      />
                      <span>恩惠廳(300人)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">儀式正式起/結時間：</span>
                    <input 
                      className="border-b border-gray-400 w-16 text-center" 
                      placeholder="年" 
                      type="number"
                      value={formData.ceremonyYear}
                      onChange={(e) => handleInputChange('ceremonyYear', e.target.value)}
                    />
                    <span>年</span>
                    <input 
                      className="border-b border-gray-400 w-12 text-center" 
                      placeholder="月" 
                      type="number"
                      value={formData.ceremonyMonth}
                      onChange={(e) => handleInputChange('ceremonyMonth', e.target.value)}
                    />
                    <span>月</span>
                    <input 
                      className="border-b border-gray-400 w-12 text-center" 
                      placeholder="日" 
                      type="number"
                      value={formData.ceremonyDay}
                      onChange={(e) => handleInputChange('ceremonyDay', e.target.value)}
                    />
                    <span>日</span>
                    <span>星期(</span>
                    <input 
                      className="border-b border-gray-400 w-8 text-center" 
                      placeholder="" 
                      type="text"
                      value={formData.ceremonyWeek}
                      onChange={(e) => handleInputChange('ceremonyWeek', e.target.value)}
                    />
                    <span>)</span>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="radio" 
                        value="am" 
                        name="ceremony_time"
                        checked={formData.ceremonyTime === 'am'}
                        onChange={(e) => handleInputChange('ceremonyTime', e.target.value)}
                      />
                      <span>am</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="radio" 
                        value="pm" 
                        name="ceremony_time"
                        checked={formData.ceremonyTime === 'pm'}
                        onChange={(e) => handleInputChange('ceremonyTime', e.target.value)}
                      />
                      <span>pm</span>
                    </label>
                    <input 
                      className="border-b border-gray-400 px-2" 
                      type="time"
                      value={formData.ceremonyStartTime}
                      onChange={(e) => handleInputChange('ceremonyStartTime', e.target.value)}
                    />
                    <span>至</span>
                    <input 
                      className="border-b border-gray-400 px-2" 
                      type="time"
                      value={formData.ceremonyEndTime}
                      onChange={(e) => handleInputChange('ceremonyEndTime', e.target.value)}
                    />
                    <span>止</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">佈置日期：</span>
                    <input 
                      className="border-b border-gray-400 w-16 text-center" 
                      placeholder="年" 
                      type="number"
                      value={formData.setupYear}
                      onChange={(e) => handleInputChange('setupYear', e.target.value)}
                    />
                    <span>年</span>
                    <input 
                      className="border-b border-gray-400 w-12 text-center" 
                      placeholder="月" 
                      type="number"
                      value={formData.setupMonth}
                      onChange={(e) => handleInputChange('setupMonth', e.target.value)}
                    />
                    <span>月</span>
                    <input 
                      className="border-b border-gray-400 w-12 text-center" 
                      placeholder="日" 
                      type="number"
                      value={formData.setupDay}
                      onChange={(e) => handleInputChange('setupDay', e.target.value)}
                    />
                    <span>日</span>
                    <span>星期(</span>
                    <input 
                      className="border-b border-gray-400 w-8 text-center" 
                      placeholder="" 
                      type="text"
                      value={formData.setupWeek}
                      onChange={(e) => handleInputChange('setupWeek', e.target.value)}
                    />
                    <span>)</span>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="radio" 
                        value="am" 
                        name="setup_time"
                        checked={formData.setupTime === 'am'}
                        onChange={(e) => handleInputChange('setupTime', e.target.value)}
                      />
                      <span>am</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="radio" 
                        value="pm" 
                        name="setup_time"
                        checked={formData.setupTime === 'pm'}
                        onChange={(e) => handleInputChange('setupTime', e.target.value)}
                      />
                      <span>pm</span>
                    </label>
                    <input 
                      className="border-b border-gray-400 px-2" 
                      type="time"
                      value={formData.setupStartTime}
                      onChange={(e) => handleInputChange('setupStartTime', e.target.value)}
                    />
                    <span>至</span>
                    <input 
                      className="border-b border-gray-400 px-2" 
                      type="time"
                      value={formData.setupEndTime}
                      onChange={(e) => handleInputChange('setupEndTime', e.target.value)}
                    />
                    <span>止</span>
                  </div>
                </div>

                <div className="border-2 border-gray-800 p-4 space-y-3">
                  <div>
                    <span className="font-medium">基本設備：</span>
                    <span className="text-sm">電子琴/桌子1張(講臺)/家屬來賓告示牌(含夫子3組)/會禮場地告示(1F、B1、B2)</span>
                  </div>
                  <div>
                    <span className="font-medium">勾選器材：</span>
                    <label className="inline-flex items-center space-x-1 mr-4">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox"
                        checked={formData.equipment.robes}
                        onChange={(e) => handleEquipmentChange('robes', e.target.checked)}
                      />
                      <span>詩袍30件</span>
                    </label>
                    <label className="inline-flex items-center space-x-1">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox"
                        checked={formData.equipment.materials}
                        onChange={(e) => handleEquipmentChange('materials', e.target.checked)}
                      />
                      <span>講義30本</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      className="w-4 h-4" 
                      type="checkbox" 
                    />
                    <span>其他設備 (例：對講機或高昂的物品等)</span>
                    <input 
                      className="border-b border-gray-400 flex-1 px-2 py-1" 
                      type="text"
                      value={formData.otherEquipment}
                      onChange={(e) => handleInputChange('otherEquipment', e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox" 
                      />
                      <span>音控自備人員</span>
                      <input 
                        className="border-b border-gray-400 flex-1 px-2 py-1" 
                        type="text"
                        value={formData.soundControl}
                        onChange={(e) => handleInputChange('soundControl', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox" 
                      />
                      <span>音控教會支援同工</span>
                      <input 
                        className="border-b border-gray-400 flex-1 px-2 py-1" 
                        type="text"
                        value={formData.soundControlSupport}
                        onChange={(e) => handleInputChange('soundControlSupport', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox" 
                      />
                      <span>PPT自備人員</span>
                      <input 
                        className="border-b border-gray-400 flex-1 px-2 py-1" 
                        type="text"
                        value={formData.ppt}
                        onChange={(e) => handleInputChange('ppt', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        className="w-4 h-4" 
                        type="checkbox" 
                      />
                      <span>PPT教會支援同工</span>
                      <input 
                        className="border-b border-gray-400 flex-1 px-2 py-1" 
                        type="text"
                        value={formData.pptSupport}
                        onChange={(e) => handleInputChange('pptSupport', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-400 pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <span>借用申請人：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="text"
                        value={formData.applicantName}
                        onChange={(e) => handleInputChange('applicantName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <span>聯絡電話：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="tel"
                        value={formData.applicantPhone}
                        onChange={(e) => handleInputChange('applicantPhone', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <span>牧區：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="text"
                        value={formData.district}
                        onChange={(e) => handleInputChange('district', e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <span>小組名稱：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="text"
                        value={formData.groupName}
                        onChange={(e) => handleInputChange('groupName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <span>牧區協理同工：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="text"
                        value={formData.coordinator}
                        onChange={(e) => handleInputChange('coordinator', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <span>總召集人：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="text"
                        value={formData.chiefOrganizer}
                        onChange={(e) => handleInputChange('chiefOrganizer', e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <span>聯絡電話：</span>
                      <input 
                        className="border-b border-gray-400 w-full px-2 py-1" 
                        type="tel"
                        value={formData.chiefOrganizerPhone}
                        onChange={(e) => handleInputChange('chiefOrganizerPhone', e.target.value)}
                      />
                      <span className="text-sm">(總召集人指當日現場主要負責人)</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-medium">本人對場地借用需知（請詳閱背面），確實明白並願意遵守實行。家屬同意簽名：</span>
                      <input 
                        className="border-b border-gray-400 w-full md:w-32 px-2 py-1 mt-2 md:mt-0 md:ml-2" 
                        type="text"
                        value={formData.familySignature}
                        onChange={(e) => handleInputChange('familySignature', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-400 pt-4">
                  <h3 className="text-center font-medium mb-4">場地感恩奉獻參考表（本堂非營利組織）</h3>
                  <p className="text-sm text-center mb-4">單位：新台幣 /使用時間以4小時為1單位（含佈置、佈置）。週間六時場地使用到下午4:00止，敬請留意使用時間！</p>
                  <table className="w-full border-collapse border border-gray-400 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-400 p-2">借用性質</th>
                        <th className="border border-gray-400 p-2">申請人資格</th>
                        <th className="border border-gray-400 p-2">借用場地</th>
                        <th className="border border-gray-400 p-2">保證金</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 p-2 text-center" rowSpan={2}>追思</td>
                        <td className="border border-gray-400 p-2 text-center" rowSpan={2}>本堂會友</td>
                        <td className="border border-gray-400 p-2">尊貴廳(500人)</td>
                        <td className="border border-gray-400 p-2 text-center">$15,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-2">恩惠廳(300人)</td>
                        <td className="border border-gray-400 p-2 text-center">$12,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-xs space-y-1">
                    <p><strong>註：</strong>1. 教會另提供影音設備組得分享，請參閱附件二、三。</p>
                    <p>2. 保證金請於場地申請日起5日內完成匯款手續確認，場地借用才得以生效。</p>
                    <p className="ml-4">匯款帳戶：合作金庫客雅分行 帳號：0510871004577 戶名：高雄靈糧堂 匯款及ATM轉帳請務必來電</p>
                    <p className="ml-4">(07)345-6868#156 或 傳真(07)345-6527 至教會，以確認入帳記錄）會收保證金於場地告知設</p>
                    <p className="ml-4">借使用恢復/無缺損，經總務部確認後歸還費用，場地借用人同意將此保證金轉為場地使用感恩奉獻。</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-2">
                      <div className="flex items-center space-x-2">
                        <span>保證金 $</span>
                        <input 
                          className="border-b border-gray-400 w-24 px-2 py-1" 
                          type="number"
                          value={formData.deposit}
                          onChange={(e) => handleInputChange('deposit', e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-2">
                        <span>借用人同意將此場地保證金轉為場地使用感恩奉獻 簽名：</span>
                        <input 
                          className="border-b border-gray-400 w-full md:w-32 px-2 py-1" 
                          type="text"
                          value={formData.depositSignature}
                          onChange={(e) => handleInputChange('depositSignature', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <span className="text-sm">高靈 1140701</span>
                  </div>
                </div>

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
