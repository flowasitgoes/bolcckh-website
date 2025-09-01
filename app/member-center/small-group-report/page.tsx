'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import '@/styles/member-center.css'

export default function SmallGroupReportPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [formData, setFormData] = useState({
    districtName: '',
    districtLeaderName: '',
    groupLeaderName: '',
    coreWorkerName: '',
    meetingDate: '',
    groupEstablishDate: '',
    plannedOpenGroupDate: '',
    members: [
      {
        name: '',
        sunday: false,
        group: false,
        equipping: false,
        disciple: false,
        tithe: false,
        remarks: '',
        specialCare: ''
      }
    ],
    meetingContent: {
      worship: false,
      prayer: false,
      word: false,
      care: false,
      service: false,
      evangelism: false
    },
    totalAdults: '',
    totalChildren: '',
    newcomers: [
      {
        name: '',
        gender: '男',
        birthYear: '',
        maritalStatus: '已婚',
        occupation: '學生'
      }
    ],
    groupEvaluation: '',
    groupActivities: ''
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleMemberChange = (index: number, field: string, value: any) => {
    const newMembers = [...formData.members]
    newMembers[index] = {
      ...newMembers[index],
      [field]: value
    }
    setFormData(prev => ({
      ...prev,
      members: newMembers
    }))
  }

  const addMember = () => {
    setFormData(prev => ({
      ...prev,
      members: [...prev.members, {
        name: '',
        sunday: false,
        group: false,
        equipping: false,
        disciple: false,
        tithe: false,
        remarks: '',
        specialCare: ''
      }]
    }))
  }

  const removeMember = (index: number) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        members: newMembers
      }))
    }
  }

  const handleMeetingContentChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      meetingContent: {
        ...prev.meetingContent,
        [field]: value
      }
    }))
  }

  const handleNewcomerChange = (index: number, field: string, value: any) => {
    const newNewcomers = [...formData.newcomers]
    newNewcomers[index] = {
      ...newNewcomers[index],
      [field]: value
    }
    setFormData(prev => ({
      ...prev,
      newcomers: newNewcomers
    }))
  }

  const addNewcomer = () => {
    setFormData(prev => ({
      ...prev,
      newcomers: [...prev.newcomers, {
        name: '',
        gender: '男',
        birthYear: '',
        maritalStatus: '已婚',
        occupation: '學生'
      }]
    }))
  }

  const removeNewcomer = (index: number) => {
    if (formData.newcomers.length > 1) {
      const newNewcomers = formData.newcomers.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        newcomers: newNewcomers
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('提交表單:', formData)
    // 這裡可以添加表單提交邏輯
    alert('週報已送出！')
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src="/member-center/hero-image.png"
            alt="會友中心 - 雙手捧著花朵"
            className="w-full h-full object-cover object-center"
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">小組長線上回報</h1>
              <p className="text-xl md:text-2xl">Small Group Leader Online Report</p>
            </div>
          </div>
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

                {/* 小組長線上回報 - 當前頁面 */}
                <a 
                  href="/member-center/small-group-report"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    小組長線上回報
                  </div>
                </a>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="right-content-area lg:col-span-3 bg-[#F3A149] p-6 md:p-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row border-b border-gray-200 mb-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab(0)}
                    className={`px-6 py-3 text-lg font-semibold transition-colors ${
                      activeTab === 0
                        ? 'text-[#21807a] border-b-2 md:border-b-2 border-[#21807a]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    小組週報表
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab(1)}
                    className={`px-6 py-3 text-lg font-semibold transition-colors ${
                      activeTab === 1
                        ? 'text-[#21807a] border-b-2 md:border-b-2 border-[#21807a]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    追思禮拜場地申請表
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab(2)}
                    className={`px-6 py-3 text-lg font-semibold transition-colors ${
                      activeTab === 2
                        ? 'text-[#21807a] border-b-2 md:border-b-2 border-[#21807a]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    婚禮典禮場地申請單
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab(3)}
                    className={`px-6 py-3 text-lg font-semibold transition-colors ${
                      activeTab === 3
                        ? 'text-[#21807a] border-b-2 md:border-b-2 border-[#21807a]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    報表四
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 0 && (
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-8 text-center">
                      小組週報表
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                  {/* 基本資料 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        區名
                      </label>
                      <input
                        type="text"
                        value={formData.districtName}
                        onChange={(e) => handleInputChange('districtName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        區長名字
                      </label>
                      <input
                        type="text"
                        value={formData.districtLeaderName}
                        onChange={(e) => handleInputChange('districtLeaderName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        小組長名字
                      </label>
                      <input
                        type="text"
                        value={formData.groupLeaderName}
                        onChange={(e) => handleInputChange('groupLeaderName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        核心同工名字
                      </label>
                      <input
                        type="text"
                        value={formData.coreWorkerName}
                        onChange={(e) => handleInputChange('coreWorkerName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        聚會日期
                      </label>
                      <input
                        type="date"
                        value={formData.meetingDate}
                        onChange={(e) => handleInputChange('meetingDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        現行小組成立日期
                      </label>
                      <input
                        type="date"
                        value={formData.groupEstablishDate}
                        onChange={(e) => handleInputChange('groupEstablishDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        預定開敞開小組日期
                      </label>
                      <input
                        type="date"
                        value={formData.plannedOpenGroupDate}
                        onChange={(e) => handleInputChange('plannedOpenGroupDate', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                      />
                    </div>
                  </div>

                  {/* 組員出席與狀況 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#333] mb-4">組員出席與狀況</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">組員姓名</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">主日</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">小組</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">裝備課程</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">輸子生活</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">十一</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">備註</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">特別關懷</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.members.map((member, index) => (
                            <tr key={index}>
                              <td className="border border-gray-300 px-3 py-2">
                                <input
                                  type="text"
                                  value={member.name}
                                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <input
                                  type="radio"
                                  checked={member.sunday}
                                  onChange={(e) => handleMemberChange(index, 'sunday', e.target.checked)}
                                  className="w-4 h-4 text-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <input
                                  type="radio"
                                  checked={member.group}
                                  onChange={(e) => handleMemberChange(index, 'group', e.target.checked)}
                                  className="w-4 h-4 text-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <input
                                  type="radio"
                                  checked={member.equipping}
                                  onChange={(e) => handleMemberChange(index, 'equipping', e.target.checked)}
                                  className="w-4 h-4 text-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <input
                                  type="radio"
                                  checked={member.disciple}
                                  onChange={(e) => handleMemberChange(index, 'disciple', e.target.checked)}
                                  className="w-4 h-4 text-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <input
                                  type="radio"
                                  checked={member.tithe}
                                  onChange={(e) => handleMemberChange(index, 'tithe', e.target.checked)}
                                  className="w-4 h-4 text-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2">
                                <input
                                  type="text"
                                  value={member.remarks}
                                  onChange={(e) => handleMemberChange(index, 'remarks', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2">
                                <input
                                  type="text"
                                  value={member.specialCare}
                                  onChange={(e) => handleMemberChange(index, 'specialCare', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <button
                                  type="button"
                                  onClick={() => removeMember(index)}
                                  className="text-red-600 hover:text-red-800 text-sm"
                                >
                                  刪除
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button
                      type="button"
                      onClick={addMember}
                      className="mt-4 px-4 py-2 bg-[#21807a] text-white rounded-md hover:bg-[#1a6b66] transition-colors"
                    >
                      新增組員
                    </button>
                  </div>

                  {/* 聚會內容 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#333] mb-4">聚會內容</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries({
                        worship: '禮拜',
                        prayer: '禱告',
                        word: '神的話',
                        care: '關心組員',
                        service: '服事',
                        evangelism: '傳福音'
                      }).map(([key, label]) => (
                        <label key={key} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.meetingContent[key as keyof typeof formData.meetingContent]}
                            onChange={(e) => handleMeetingContentChange(key, e.target.checked)}
                            className="w-4 h-4 text-[#21807a] rounded focus:ring-[#21807a]"
                          />
                          <span className="text-sm text-gray-700">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 總計 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        成人數
                      </label>
                      <input
                        type="number"
                        value={formData.totalAdults}
                        onChange={(e) => handleInputChange('totalAdults', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        兒童數
                      </label>
                      <input
                        type="number"
                        value={formData.totalChildren}
                        onChange={(e) => handleInputChange('totalChildren', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* 新來者簡介 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#333] mb-4">新來者簡介</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">姓名</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">性別</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">出生年份</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">婚姻狀況</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">職業</th>
                            <th className="border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.newcomers.map((newcomer, index) => (
                            <tr key={index}>
                              <td className="border border-gray-300 px-3 py-2">
                                <input
                                  type="text"
                                  value={newcomer.name}
                                  onChange={(e) => handleNewcomerChange(index, 'name', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2">
                                <select
                                  value={newcomer.gender}
                                  onChange={(e) => handleNewcomerChange(index, 'gender', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                >
                                  <option value="男">男</option>
                                  <option value="女">女</option>
                                </select>
                              </td>
                              <td className="border border-gray-300 px-3 py-2">
                                <input
                                  type="number"
                                  value={newcomer.birthYear}
                                  onChange={(e) => handleNewcomerChange(index, 'birthYear', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                  placeholder="1990"
                                />
                              </td>
                              <td className="border border-gray-300 px-3 py-2">
                                <select
                                  value={newcomer.maritalStatus}
                                  onChange={(e) => handleNewcomerChange(index, 'maritalStatus', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                >
                                  <option value="已婚">已婚</option>
                                  <option value="未婚">未婚</option>
                                  <option value="離婚">離婚</option>
                                  <option value="喪偶">喪偶</option>
                                </select>
                              </td>
                              <td className="border border-gray-300 px-3 py-2">
                                <select
                                  value={newcomer.occupation}
                                  onChange={(e) => handleNewcomerChange(index, 'occupation', e.target.value)}
                                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#21807a]"
                                >
                                  <option value="學生">學生</option>
                                  <option value="上班族">上班族</option>
                                  <option value="自由業">自由業</option>
                                  <option value="退休">退休</option>
                                  <option value="其他">其他</option>
                                </select>
                              </td>
                              <td className="border border-gray-300 px-3 py-2 text-center">
                                <button
                                  type="button"
                                  onClick={() => removeNewcomer(index)}
                                  className="text-red-600 hover:text-red-800 text-sm"
                                >
                                  刪除
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button
                      type="button"
                      onClick={addNewcomer}
                      className="mt-4 px-4 py-2 bg-[#21807a] text-white rounded-md hover:bg-[#1a6b66] transition-colors"
                    >
                      新增新來者
                    </button>
                  </div>

                  {/* 小組整體評估及描述 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      小組整體評估及描述
                    </label>
                    <textarea
                      value={formData.groupEvaluation}
                      onChange={(e) => handleInputChange('groupEvaluation', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                      placeholder="請描述小組整體狀況..."
                    />
                  </div>

                  {/* 小組活動或外展 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      小組活動或外展
                    </label>
                    <textarea
                      value={formData.groupActivities}
                      onChange={(e) => handleInputChange('groupActivities', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#21807a]"
                      placeholder="請描述小組活動或外展計畫..."
                    />
                  </div>

                  {/* 提交按鈕 */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#20807a] text-white rounded-lg hover:bg-[#1a6b66] transition-colors font-semibold text-lg"
                    >
                      送出週報
                    </button>
                  </div>
                </form>
                  </div>
                )}

                {/* Tab 1: 追思禮拜場地申請表 */}
                {activeTab === 1 && (
                  <div>
                    {/* Header */}
                    <div className="text-center py-6 border-b-2 border-gray-800 mb-6">
                      <div className="flex items-center justify-center mb-4">
   
                        <h1 className="text-xl font-bold">財團法人中國基督教靈糧世界佈道會高雄靈糧堂</h1>
                      </div>
                      <h2 className="text-lg font-semibold mb-4">本堂會友追思禮拜場地申請表</h2>
                      <div className="flex justify-end items-center space-x-2 text-sm">
                        <span>日期：</span>
                        <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                        <span>年</span>
                        <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                        <span>月</span>
                        <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                        <span>日</span>
                      </div>
                    </div>

                    <form className="space-y-6">
                  {/* Deceased Name */}
                  <div className="flex items-center space-x-2">
                    <span>故</span>
                    <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" placeholder="請輸入姓名" />
                    <span>追思禮拜</span>
                  </div>

                  {/* Venue Selection */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">借用場地：</span>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="venue" value="500" className="w-4 h-4" />
                        <span>尊貴廳(500人)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="venue" value="300" className="w-4 h-4" />
                        <span>恩惠廳(300人)</span>
                      </label>
                    </div>
                  </div>

                  {/* Ceremony Date and Time */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">儀式正式起/結時間：</span>
                      <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                      <span>年</span>
                      <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                      <span>月</span>
                      <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                      <span>日</span>
                      <span>星期(</span>
                      <input type="text" className="border-b border-gray-400 w-8 text-center" placeholder="" />
                      <span>)</span>
                      <label className="flex items-center space-x-1">
                        <input type="radio" name="ceremony_time" value="am" className="w-4 h-4" />
                        <span>am</span>
                      </label>
                      <label className="flex items-center space-x-1">
                        <input type="radio" name="ceremony_time" value="pm" className="w-4 h-4" />
                        <span>pm</span>
                      </label>
                      <input type="time" className="border-b border-gray-400 px-2" />
                      <span>至</span>
                      <input type="time" className="border-b border-gray-400 px-2" />
                      <span>止</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">佈置日期：</span>
                      <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                      <span>年</span>
                      <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                      <span>月</span>
                      <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                      <span>日</span>
                      <span>星期(</span>
                      <input type="text" className="border-b border-gray-400 w-8 text-center" placeholder="" />
                      <span>)</span>
                      <label className="flex items-center space-x-1">
                        <input type="radio" name="setup_time" value="am" className="w-4 h-4" />
                        <span>am</span>
                      </label>
                      <label className="flex items-center space-x-1">
                        <input type="radio" name="setup_time" value="pm" className="w-4 h-4" />
                        <span>pm</span>
                      </label>
                      <input type="time" className="border-b border-gray-400 px-2" />
                      <span>至</span>
                      <input type="time" className="border-b border-gray-400 px-2" />
                      <span>止</span>
                    </div>
                  </div>

                  {/* Basic Equipment */}
                  <div className="border-2 border-gray-800 p-4 space-y-3">
                    <div>
                      <span className="font-medium">基本設備：</span>
                      <span className="text-sm">電子琴/桌子1張(講臺)/家屬來賓告示牌(含夫子3組)/會禮場地告示(1F、B1、B2)</span>
                    </div>
                    <div>
                      <span className="font-medium">勾選器材：</span>
                      <label className="inline-flex items-center space-x-1 mr-4">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>詩袍30件</span>
                      </label>
                      <label className="inline-flex items-center space-x-1">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>講義30本</span>
                      </label>
                    </div>
                  </div>

                  {/* Additional Equipment */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>其他設備 (例：對講機或高昂的物品等)</span>
                      <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>音控自備人員</span>
                        <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>音控教會支援同工</span>
                        <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>PPT自備人員</span>
                        <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>PPT教會支援同工</span>
                        <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-dashed border-gray-400 pt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <span>借用申請人：</span>
                        <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>聯絡電話：</span>
                        <input type="tel" className="border-b border-gray-400 flex-1 px-2 py-1" />
                      </div>
                    </div>

                                         <div className="grid grid-cols-3 gap-4">
                       <div className="flex items-center space-x-2">
                         <span>牧區：</span>
                         <input type="text" className="border-b border-gray-400 w-2/4 px-2 py-1" />
                       </div>
                       <div className="flex items-center space-x-2">
                         <span>小組名稱：</span>
                         <input type="text" className="border-b border-gray-400 w-2/4 px-2 py-1" />
                       </div>
                       <div className="flex items-center space-x-2">
                         <span>牧區協理同工：</span>
                         <input type="text" className="border-b border-gray-400 w-2/4 px-2 py-1" />
                       </div>
                     </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <span>總召集人：</span>
                        <input type="text" className="border-b border-gray-400 w-2/4  px-2 py-1" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>聯絡電話：</span>
                        <input type="tel" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        <span className="text-sm">(總召集人指當日現場主要負責人)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">本人對場地借用需知（請詳閱背面），確實明白並願意遵守實行。家屬同意簽名：</span>
                        <input type="text" className="border-b border-gray-400 w-32 px-2 py-1 ml-2" />
                      </div>
                      



                    </div>
                  </div>

                  {/* Pricing Table */}
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

                    {/* Final Section */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span>保證金 $</span>
                        <input type="number" className="border-b border-gray-400 w-24 px-2 py-1" />
                        <span>借用人同意將此場地保證金轉為場地使用感恩奉獻 簽名：</span>
                        <input type="text" className="border-b border-gray-400 w-32 px-2 py-1" />
                      </div>
                      

                    </div>
                    
                    <div className="text-right mt-4">
                      <span className="text-sm">高靈 1140701</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button type="submit" className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors">
                      提交申請表
                    </button>
                  </div>
                </form>
                  </div>
                )}

                {/* Tab 2: 婚禮典禮場地申請單 */}
                {activeTab === 2 && (
                  <div>
                    {/* Header */}
                    <div className="text-center py-6 border-b-2 border-gray-800 mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <h1 className="text-xl font-bold">財團法人中國基督教靈糧世界佈道會高雄靈糧堂</h1>
                      </div>
                      <h2 className="text-lg font-semibold mb-4">本堂會友結婚典禮場地申請表</h2>
                      <div className="flex justify-end items-center space-x-2 text-sm">
                        <span>日期：</span>
                        <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                        <span>年</span>
                        <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                        <span>月</span>
                        <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                        <span>日</span>
                      </div>
                    </div>

                    <form className="space-y-6">
                      {/* 新郎資料 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <span>新郎姓名：</span>
                          <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>聯絡電話：</span>
                          <input type="tel" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>本堂會友：</span>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>是</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>不是</span>
                          </label>
                        </div>
                      </div>

                      {/* 新娘資料 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <span>新娘姓名：</span>
                          <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>聯絡電話：</span>
                          <input type="tel" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>本堂會友：</span>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>是</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>不是</span>
                          </label>
                        </div>
                      </div>

                      {/* 父母資料 */}
                      <div className="flex items-center space-x-2">
                        <span>父母姓名：</span>
                        <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        <span>為本堂會友。</span>
                      </div>

                      {/* 場地選擇 */}
                      <div className="flex items-center space-x-4">
                        <span className="font-medium">借用場地：</span>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="venue" value="500" className="w-4 h-4" />
                          <span>尊貴廳(500人)</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="venue" value="300" className="w-4 h-4" />
                          <span>恩惠廳(300人)</span>
                        </label>
                      </div>

                      {/* 典禮時間 */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="font-medium">典禮正式起/訖時間：</span>
                          <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                          <span>年</span>
                          <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                          <span>月</span>
                          <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                          <span>日</span>
                          <span>星期(</span>
                          <input type="text" className="border-b border-gray-400 w-8 text-center" placeholder="" />
                          <span>)</span>
                          <label className="flex items-center space-x-1">
                            <input type="radio" name="ceremony_time" value="am" className="w-4 h-4" />
                            <span>am</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="radio" name="ceremony_time" value="pm" className="w-4 h-4" />
                            <span>pm</span>
                          </label>
                          <input type="time" className="border-b border-gray-400 px-2" />
                          <span>至</span>
                          <input type="time" className="border-b border-gray-400 px-2" />
                          <span>止</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                          <span className="font-medium">佈置日期：</span>
                          <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                          <span>年</span>
                          <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                          <span>月</span>
                          <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                          <span>日</span>
                          <span>星期(</span>
                          <input type="text" className="border-b border-gray-400 w-8 text-center" placeholder="" />
                          <span>)</span>
                          <label className="flex items-center space-x-1">
                            <input type="radio" name="setup_time" value="am" className="w-4 h-4" />
                            <span>am</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="radio" name="setup_time" value="pm" className="w-4 h-4" />
                            <span>pm</span>
                          </label>
                          <input type="time" className="border-b border-gray-400 px-2" />
                          <span>至</span>
                          <input type="time" className="border-b border-gray-400 px-2" />
                          <span>止</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                          <span className="font-medium">彩排日期：</span>
                          <input type="number" className="border-b border-gray-400 w-16 text-center" placeholder="年" />
                          <span>年</span>
                          <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="月" />
                          <span>月</span>
                          <input type="number" className="border-b border-gray-400 w-12 text-center" placeholder="日" />
                          <span>日</span>
                          <span>星期(</span>
                          <input type="text" className="border-b border-gray-400 w-8 text-center" placeholder="" />
                          <span>)</span>
                          <label className="flex items-center space-x-1">
                            <input type="radio" name="rehearsal_time" value="am" className="w-4 h-4" />
                            <span>am</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="radio" name="rehearsal_time" value="pm" className="w-4 h-4" />
                            <span>pm</span>
                          </label>
                          <input type="time" className="border-b border-gray-400 px-2" />
                          <span>至</span>
                          <input type="time" className="border-b border-gray-400 px-2" />
                          <span>止</span>
                        </div>
                      </div>

                      {/* 基本設備 */}
                      <div className="border-2 border-gray-800 p-4 space-y-3">
                        <div>
                          <span className="font-medium">基本設備：</span>
                          <span className="text-sm">電子琴/桌子2張(台前、婚禮)/新娘休息室(含桌椅一組)/男女來賓座位席告示(含桌子3組)</span>
                        </div>
                        <div>
                          <span className="text-sm">請選場地告示(1F、B1、B2)</span>
                        </div>
                      </div>

                      {/* 勾選器材 */}
                      <div className="border-2 border-gray-800 p-4 space-y-3">
                        <div>
                          <span className="font-medium">勾選器材：</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>紅地毯</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>詩袍30件</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>譜夾30本</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>拍照用塑膠椅10張</span>
                          </label>
                        </div>
                      </div>

                      {/* 其他支援 */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">其他支援：</span>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>對講機</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>排列需要音控影視同工支援</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>需要其他物品</span>
                          </label>
                          <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>音控自備人員</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>音控教會支援同工</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>PPT自備人員</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <span>PPT教會支援同工</span>
                          </div>
                        </div>
                      </div>

                      {/* 聯絡資訊 */}
                      <div className="border-t border-dashed border-gray-400 pt-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <span>借用申請人：</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>聯絡電話：</span>
                            <input type="tel" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex items-center space-x-2">
                            <span>牧區：</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>小組名稱：</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>牧區協理同工：</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <span>總召集人：</span>
                            <input type="text" className="border-b border-gray-400 flex-1 px-2 py-1" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>聯絡電話：</span>
                            <input type="tel" className="border-b border-gray-400 flex-1 px-2 py-1" />
                            <span className="text-sm">(總召集人指當日現場主要負責人)</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium">本人對場地借用實知（請詳閱背面），確實明白並願意遵守實行。申請人同意簽名：</span>
                            <input type="text" className="border-b border-gray-400 w-32 px-2 py-1 ml-2" />
                          </div>
                          



                        </div>
                      </div>

                      {/* 場地感恩奉獻參考表 */}
                      <div className="border-t border-dashed border-gray-400 pt-4">
                        <h3 className="text-center font-medium mb-4">場地感恩奉獻參考表（本堂非營利組織）</h3>
                        <p className="text-sm text-center mb-4">單位：新台幣／使用時間以4小時為1單位（含排練、佈置）、週周六時場地使用到下午4:00止，敬請會眾使用時間！</p>
                        
                        <table className="w-full border-collapse border border-gray-400 mb-4">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-400 p-2">借用性質</th>
                              <th className="border border-gray-400 p-2">申請人資格</th>
                              <th className="border border-gray-400 p-2">借用場地</th>
                              <th className="border border-gray-400 p-2">保證金（含餐廳）</th>
                              <th className="border border-gray-400 p-2">保證金（不含餐廳）</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-400 p-2 text-center" rowSpan={2}>婚禮</td>
                              <td className="border border-gray-400 p-2 text-center" rowSpan={2}>本堂會友</td>
                              <td className="border border-gray-400 p-2">尊貴廳(500人)</td>
                              <td className="border border-gray-400 p-2 text-center">$20,000</td>
                              <td className="border border-gray-400 p-2 text-center">$15,000</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-400 p-2">恩惠廳(300人)</td>
                              <td className="border border-gray-400 p-2 text-center">$17,000</td>
                              <td className="border border-gray-400 p-2 text-center">$12,000</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="text-xs space-y-1">
                          <p><strong>注：</strong>1.保證書責廳、恩惠廳，才可以提供借用加場地(B1餐廳)，借用B1餐廳(3小時為一單位)。</p>
                          <p>2.保證金請於場地申請日起5日內完成匯款手續確認，場地借用才得以生效。</p>
                          <p className="ml-4">匯款帳戶：合作金庫各分行 帳號：0510871004577 戶名：高雄靈糧堂 匯款及ATM轉帳手續務必來電</p>
                          <p className="ml-4">(07)345-6868#156或傳真(07)345-6527至教會，以確認入帳記錄，暫收保證金於場地營辦設</p>
                          <p className="ml-4">備使用狀況/無缺損，經總務部確認良好無異常，場地借用人同意將此筆保證金轉為場地使用感恩奉獻。</p>
                        </div>

                        {/* Final Section */}
                        <div className="mt-6 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span>保證金 $</span>
                            <input type="number" className="border-b border-gray-400 w-24 px-2 py-1" />
                            <span>借用人同意將此筆場地保證金轉為場地使用感恩奉獻 簽名</span>
                            <input type="text" className="border-b border-gray-400 w-32 px-2 py-1" />
                          </div>
                          
                        </div>

                        <div className="text-right mt-4">
                          <span className="text-sm">高靈 1120601</span>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-6">
                        <button type="submit" className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors">
                          提交申請表
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Tab 3: 報表四 */}
                {activeTab === 3 && (
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-8 text-center">
                      報表四
                    </h1>
                    <p className="text-center text-gray-600">報表四內容將在這裡顯示</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
