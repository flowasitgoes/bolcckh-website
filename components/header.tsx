"use client"

import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMenuIndex, setOpenMenuIndex] = useState(-1) // 新增：目前展開的主選單索引

  const navItems = [
    { zh: "關於教會", en: "About", href: "/about", children: [
      { zh: "關於教會", href: "/about" },
      { zh: "過去與現在", href: "/about-history" },
      { zh: "全職團隊", href: "/about-our-team" },
      { zh: "聯絡我們", href: "/about-contact" },
    ] },
    { zh: "教會生活", en: "Church", href: "/church", children: [
      { zh: "教會生活", href: "/church" },
      { zh: "聚會資訊", href: "/church-groups" },
      { zh: "牧區族群", href: "/church-department" },
      { zh: "事工介紹與呼召", href: "/church-calling" },
      { zh: "牧養裝備", href: "/church-equip" },
      { zh: "門訓建造", href: "/church-discipleship" },
    ] },
    { zh: "宣教使命", en: "Mission", href: "#mission", children: [
      { zh: "宣教使命", href: "/mission" },
      { zh: "生命見證", href: "/mission-testimony" },
    ] },
    { zh: "教會消息", en: "News", href: "#news", children: [
      { zh: "主日直播", href: "#sunday-live" },
      { zh: "禮合會直播", href: "#ceremony-live" },
      { zh: "重溫信息", href: "#review" },
      { zh: "好文分享", href: "#articles" },
    ] },
    { zh: "支持奉獻", en: "Offering", href: "#offering", children: [
      { zh: "支持奉獻", href: "/offering" },
    ] },
    { zh: "部門介紹", en: "Department", href: "#department", children: [
      { zh: "會員中心", href: "#member" },
      { zh: "部門介紹", href: "#department" },
    ] },
  ]

  // 假設 active 狀態由路徑判斷，這裡可根據實際需求調整
  const activeIndex = -1 // 可根據 router 設定

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo區塊 */}
          <div className="flex items-center space-x-4">
            {/* <img src="/logo.png" alt="BOLCCKH" className="h-12 w-auto" /> */}
            <div className="flex flex-col justify-center">
              <img src="/header-logo.png" alt="BOLCCKH" className="h-16 header-log-img" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item, idx) => (
              <div
                key={item.en}
                className={`flex flex-col items-center px-6 h-full justify-center border-r border-gray-200 last:border-r-0 group relative ${idx === activeIndex ? 'text-orange-theme' : 'text-gray-800'}`}
              >
                <span className={`text-base font-bold mb-1 group-hover:text-orange-theme ${idx === activeIndex ? 'text-orange-theme' : ''}`}>{item.zh}</span>
                <span className={`text-sm text-orange-theme font-medium group-hover:underline group-hover:text-orange-600`}>{item.en}</span>
                {/* 下拉選單：僅關於教會有 */}
                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-56 bg-white/85 rounded-xl shadow-lg py-4 px-6 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150">
                    <ul className="space-y-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a href={child.href} className="block text-gray-800 hover:text-orange-theme font-medium py-1 px-2 rounded transition-colors duration-150 hover:underline cursor-pointer">
                            {child.zh}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {/* User icon */}
            <div className="member-center flex items-center pl-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-orange-theme hover:bg-orange-600 text-white rounded-full w-10 h-10"
                onClick={() => window.location.href = '/member-center'}
              >
                <User className="h-6 w-6" />
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item, idx) => (
                item.children ? (
                  <div key={item.en}>
                    <button
                      className="w-full flex justify-between items-center font-bold text-gray-700 hover:text-orange-theme transition-colors duration-200 focus:outline-none"
                      onClick={() => setOpenMenuIndex(openMenuIndex === idx ? -1 : idx)}
                      aria-expanded={openMenuIndex === idx}
                    >
                      <span>{item.zh}</span>
                    <span className={`transform transition-transform duration-200 ${openMenuIndex === idx ? 'rotate-90' : ''}`}>▶</span>
                    </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openMenuIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                      <ul className="pl-4 mt-2 space-y-2 border-l-2 border-orange-theme">
                      {item.children.map((child, childIdx) => (
                                                 <li key={child.href} className={`transform transition-all duration-300 ease-out ${
                           openMenuIndex === idx 
                             ? 'translate-x-0 opacity-100' 
                             : 'translate-x-4 opacity-0'
                         }`} style={{ transitionDelay: `${childIdx * 80}ms` }}>
                            <a
                              href={child.href}
                            className="block text-gray-700 hover:text-orange-theme py-1 px-2 rounded transition-colors duration-200"
                            >
                              {child.zh}
                            </a>
                          </li>
                        ))}
                      </ul>
                  </div>
                  </div>
                ) : (
                  <a
                    key={item.en}
                    href={item.href}
                  className={`block text-gray-700 hover:text-orange-theme transition-all duration-200 font-bold transform ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`} 
                  style={{ transitionDelay: `${idx * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div>{item.zh}</div>
                    <div className="text-orange-theme text-sm">{item.en}</div>
                  </a>
                )
              ))}
            <div className={`flex items-center space-x-4 pt-4 border-t transform transition-all duration-200 ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-orange-theme hover:bg-orange-600 text-white rounded-full w-10 h-10"
                onClick={() => {
                  window.location.href = '/member-center'
                  setIsMenuOpen(false)
                }}
              >
                  <User className="h-6 w-6" />
                </Button>
              </div>
            </nav>
          </div>
      </div>
    </header>
  )
}
