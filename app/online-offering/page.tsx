"use client"

import { useState } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import '@/styles/member-center.css'

export default function OnlineOfferingPage() {
  const [formData, setFormData] = useState({
    isMember: 'no',
    offeringType: '',
    paymentMethod: '',
    amount: '',
    name: '',
    phone: '',
    email: '',
    needReceipt: 'yes',
    identityType: 'individual',
    receiptTitle: '',
    idNumber: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // 這裡可以添加表單提交邏輯
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src="/offering/offering-landing-page-hero-bgImage.png"
            alt="線上奉獻 - 雙手捧著花朵"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">哥林多後書 9:7</h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-4">
                各人要隨本心所酌定的，不要作難，不要勉強，因為捐得樂意的人是神所喜愛的。
              </p>
            </div>
          </div>
        </section>

        {/* Online Offering Dashboard Section */}
        <section className="member-dashboard-section">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Left Sidebar - Navigation */}
            <div className="lg:col-span-1 bg-[#21807a] p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                | 線上奉獻
              </h2>
              
              {/* Navigation Menu */}
              <nav className="space-y-2">
                <a 
                  href="/online-offering"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 bg-white/20"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    線上奉獻
                  </div>
                </a>

                <div className="border-t border-white/20 my-4"></div>

                <a 
                  href="/offering-bank-transfer"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    銀行轉帳
                  </div>
                </a>

                <div className="border-t border-white/20 my-4"></div>

                <a 
                  href="/offering-inquiry"
                  className="block w-full text-left text-white rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    奉獻查詢
                  </div>
                </a>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="member-center-login right-content-area lg:col-span-3 bg-[#fe7f4c] p-6 md:p-8">
              <div className="member-center-login-box">
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                      線上奉獻表單
                    </h2>
                    <p className="text-gray-600">
                      請填寫以下資訊完成奉獻
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 您是高雄靈糧堂會友嗎？ */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <span className="text-red-500">*</span> 您是高雄靈糧堂會友嗎？
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isMember"
                            value="no"
                            checked={formData.isMember === 'no'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>否</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="isMember"
                            value="yes"
                            checked={formData.isMember === 'yes'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>是</span>
                        </label>
                      </div>
                    </div>

                    {/* 點選奉獻項目 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <span className="text-red-500">*</span> 點選奉獻項目
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { value: 'tithe', label: '十一奉獻' },
                          { value: 'building', label: '建堂奉獻' },
                          { value: 'thanksgiving', label: '感恩奉獻' },
                          { value: 'mission', label: '宣教奉獻' },
                          { value: 'benevolence', label: '慈惠奉獻' },
                          { value: 'other', label: '其他奉獻' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center">
                            <input
                              type="radio"
                              name="offeringType"
                              value={option.value}
                              checked={formData.offeringType === option.value}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 奉獻方式 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <span className="text-red-500">*</span> 奉獻方式
                      </label>
                      <div className="space-y-2">
                        {[
                          { value: 'credit', label: '信用卡付款' },
                          { value: 'recurring', label: '定期定額(每月)' },
                          { value: 'atm', label: 'ATM付款' }
                        ].map((option) => (
                          <label key={option.value} className="flex items-center">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={option.value}
                              checked={formData.paymentMethod === option.value}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 奉獻金額 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <span className="text-red-500">*</span> 奉獻金額
                      </label>
                      <div className="flex items-center">
                        <span className="text-gray-600 mr-2">新台幣</span>
                        <input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                          placeholder="請輸入金額"
                          required
                        />
                        <span className="text-gray-600 ml-2">元</span>
                      </div>
                    </div>

                    {/* 奉獻人資料 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <span className="text-red-500">*</span> 奉獻人資料
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">姓名:</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">手機號碼:</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* 是否需要奉獻收據 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <span className="text-red-500">*</span> 是否需要奉獻收據？
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="needReceipt"
                            value="yes"
                            checked={formData.needReceipt === 'yes'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>是</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="needReceipt"
                            value="no"
                            checked={formData.needReceipt === 'no'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>否</span>
                        </label>
                      </div>
                    </div>

                    {/* 身份別 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <span className="text-red-500">*</span> 身份別:
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="identityType"
                            value="individual"
                            checked={formData.identityType === 'individual'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>個人</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="identityType"
                            value="organization"
                            checked={formData.identityType === 'organization'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>組織</span>
                        </label>
                      </div>
                    </div>

                    {/* 收據抬頭 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        收據抬頭(同姓名):
                      </label>
                      <input
                        type="text"
                        name="receiptTitle"
                        value={formData.receiptTitle}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      />
                    </div>

                    {/* 身份證字號 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        身份證字號:
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
                      />
                    </div>

                    {/* 附記 */}
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-700 text-sm">
                        附記:教會將協助上傳奉獻紀錄至國稅局，申報綜合所得稅
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-[#21807a] text-white rounded-lg hover:bg-[#1a6b66] transition-colors font-semibold text-lg"
                      >
                        送出奉獻
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
