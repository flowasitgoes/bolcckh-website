"use client"

import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { zh: "關於教會", en: "About", href: "#about" },
    { zh: "教會生活", en: "Church", href: "#church" },
    { zh: "宣教使命", en: "Mission", href: "#mission" },
    { zh: "教會消息", en: "News", href: "#news" },
    { zh: "支持奉獻", en: "Offering", href: "#offering" },
    { zh: "部門介紹", en: "Department", href: "#department" },
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
              <span className="font-bold text-3xl tracking-widest text-gray-900 leading-tight">BOLCCKH</span>
              <span className="text-xs text-gray-500 tracking-wide mt-1">Bread of Life Christian Church in Kaohsiung</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item, idx) => (
              <div
                key={item.en}
                className={`flex flex-col items-center px-6 h-full justify-center border-r border-gray-200 last:border-r-0 group ${idx === activeIndex ? 'text-orange-500' : 'text-gray-800'}`}
              >
                <span className={`text-base font-bold mb-1 group-hover:text-orange-500 ${idx === activeIndex ? 'text-orange-500' : ''}`}>{item.zh}</span>
                <span className={`text-sm text-orange-500 font-medium group-hover:underline group-hover:text-orange-600`}>{item.en}</span>
              </div>
            ))}
            {/* User icon */}
            <div className="flex items-center pl-6">
              <Button variant="ghost" size="icon" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10">
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
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.en}
                  href={item.href}
                  className="block text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-bold">{item.zh}</div>
                  <div className="text-orange-500 text-sm">{item.en}</div>
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Button variant="ghost" size="icon" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10">
                  <User className="h-6 w-6" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
