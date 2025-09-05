'use client'

import '@/styles/member-center.css'

interface MemberRegisterProps {
  onSwitchToLogin: () => void
}

export function MemberRegister({ onSwitchToLogin }: MemberRegisterProps) {
  return (
    <div className="member-center-login right-content-area lg:col-span-3 bg-[#fe7f4c]">
      <div className="member-center-login-box grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LINE 會友登入 */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4 text-center">
            使用LINE會友註冊
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
        
                {/* 手機會友註冊 */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-6 text-center border-b border-[#21807a] pb-4">
            手機會友註冊
          </h3>
                  <form className="space-y-6">
          {/* 手機門號 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              手機門號 <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              placeholder="請輸入手機號碼" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent" 
              required
            />
          </div>
          
          {/* 驗證碼 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              驗證碼 <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="請輸入驗證碼" 
                maxLength={4}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent" 
                required
              />
              <button 
                type="button" 
                className="bg-[#21807a] text-white px-4 py-3 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold whitespace-nowrap"
              >
                獲得驗證碼
              </button>
            </div>
          </div>
          
          {/* 姓名 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              姓名 <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="請輸入姓名" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent" 
              required
            />
          </div>
          
          {/* 性別 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              性別 <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300" 
                  required 
                  name="gender" 
                  value="male"
                />
                <span className="ml-2 text-gray-700">男</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  className="w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300" 
                  required 
                  name="gender" 
                  value="female"
                />
                <span className="ml-2 text-gray-700">女</span>
              </label>
            </div>
          </div>
          
          {/* 設定密碼 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              設定密碼 <span className="text-red-500">*</span>
            </label>
            <input 
              type="password" 
              placeholder="請設定密碼" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent" 
              required
            />
          </div>
          
          {/* 確認密碼 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              確認密碼 <span className="text-red-500">*</span>
            </label>
            <input 
              type="password" 
              placeholder="請再次輸入密碼" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21807a] focus:border-transparent" 
              required
            />
          </div>
          
          {/* 同意條款 */}
          <div className="flex items-start">
            <input 
              type="checkbox" 
              id="agree" 
              className="mt-1 w-4 h-4 text-[#21807a] focus:ring-[#21807a] border-gray-300 rounded" 
              required
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
              我同意
              <a href="#" className="text-[#21807a] hover:underline"> 服務條款 </a>
              和
              <a href="#" className="text-[#21807a] hover:underline"> 隱私政策</a>
            </label>
          </div>
          
          {/* 註冊按鈕 */}
          <button 
            type="submit" 
            className="w-full bg-[#21807a] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b66] transition-colors duration-300 font-semibold text-lg"
          >
            註冊
          </button>
        </form>
        
        {/* 返回登入連結 */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            已有帳號？
            <button 
              onClick={onSwitchToLogin}
              className="text-[#21807a] hover:underline font-semibold"
            >
              立即登入
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
} 