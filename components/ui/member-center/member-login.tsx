'use client'

import { useState } from 'react'
import '@/styles/member-center.css'

interface MemberLoginProps {
  onSwitchToRegister: () => void
}

export function MemberLogin({ onSwitchToRegister }: MemberLoginProps) {
  return (
    <div className="member-center-login-box grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LINE會友登入 */}
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
        <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4 text-center border-b border-[#21807a] pb-4">
          使用LINE會友登入
        </h3>
        <div className="line-image-wrap text-center">
          <button className="bg-transparent hover:bg-gray-50 transition-colors duration-300 p-4 rounded-lg">
            <img 
              alt="LINE" 
              loading="lazy" 
              width="80" 
              height="80" 
              decoding="async" 
              className="mx-auto" 
              style={{color: 'transparent'}} 
              src="/offering/offering-line.png"
            />
          </button>
        </div>
      </div>
      
      {/* 手機會友登入 */}
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
        <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-6 text-center">
          手機會友登入
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              手機號碼
            </label>
            <input 
              type="tel" 
              placeholder="請輸入手機號碼" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              密碼
            </label>
            <input 
              type="password" 
              placeholder="請輸入密碼" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-[#21807a] focus:ring-[#21807a]"
              />
              <span className="ml-2 text-sm text-gray-600">記住我</span>
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold"
          >
            登入
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            還沒有帳號？
            <button 
              onClick={onSwitchToRegister}
              className="text-[#21807a] hover:underline font-semibold"
            >
              立即註冊
            </button>
          </p>
        </div>
      </div>
    </div>
  )
} 