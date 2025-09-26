import { Facebook, Instagram } from "lucide-react"
import { SiLine } from "react-icons/si"
import footerStyles from '@/styles/footer-section.module.css'

export function Footer() {
  return (
    <footer className="bg-[#1e3737] text-white pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className={footerStyles.footerNavWrapper + " flex flex-col lg:flex-row justify-between gap-10"}>
          {/* 左側 LOGO、Email、社群icon */}
          <div className="flex-1 min-w-[320px] flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-6">
              {/* <img src="/logo.png" alt="BOLCCKH" className="h-12 mr-4" /> */}
              <div>
                <img src="/footer-logo.png" alt="BOLCCKH" className={footerStyles.footerLogo} />
              </div>
            </div>
            {/* Email 訂閱欄 */}
            <form className="flex w-full max-w-md bg-white rounded-md overflow-hidden mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-[#444] outline-none bg-white"
              />
              <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-4 flex items-center justify-center">
                <img src="/footer-link-btn.png" alt="Submit" className="w-6 h-6" />
              </button>
            </form>
            {/* 社群icon */}
            <div className="flex space-x-6 mb-8 lg:mb-0">
              <a 
                href="https://lin.ee/TdJiEoj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-theme rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
                title="高雄靈糧堂LINE@"
              >
                <SiLine className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://facebook.com/bolcckh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-theme rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
                title="高雄靈糧堂官方臉書"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/bolcc.kh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-theme rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
                title="高雄靈糧堂官方IG"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              {/* <a href="#" className="bg-orange-theme rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition">
                <img src="/icon-thread.svg" alt="Thread" className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* 右側 Contact 與多欄導覽 */}
          <div className={footerStyles.footerNav}>
            {/* Contact 區塊 */}
            <div className={footerStyles.footerNavCol}>
              <div className="font-bold text-lg mb-4">Contact</div>
              <div className="mb-2 text-orange-footer">聯絡電話</div>
              <div className="mb-2">07-3456868</div>
              <div className="mb-2 text-orange-footer">免付費電話</div>
              <div className="mb-2">0800-000-830</div>
              <div className="mb-2 text-orange-footer">傳真</div>
              <div className="mb-2">07-3456527</div>
              <div className="mb-2 text-orange-footer">地址</div>
              <div className="mb-2 text-sm text-gray-200">高雄市左營區文川路157號</div>
            </div>
            {/* 多欄導覽 */}
            <div className={footerStyles.footerNavCol}>
              <div className={footerStyles.footerNavTitle}>關於教會</div>
              <ul className={footerStyles.footerNavList}>
                <li><a href="/about-history">過去與現在</a></li>
                <li><a href="/about-our-team">全職團隊</a></li>
                <li><a href="/about-contact">聯絡我們</a></li>
                <li><a href="/about-files">檔案專區</a></li>
              </ul>
            </div>
            <div className={footerStyles.footerNavCol}>
              <div className={footerStyles.footerNavTitle}>教會生活</div>
              <ul className={footerStyles.footerNavList}>
                <li><a href="/church-groups">聚會資訊</a></li>
                <li><a href="/church-department">牧區族群</a></li>
                <li><a href="/ministry-calling">事工介紹與呼召</a></li>
                <li><a href="/church-discipleship/discipleship-school-upper-register">牧養裝備</a></li>
                <li><a href="/church-discipleship">門訓建造</a></li>
              </ul>
            </div>
            <div className={footerStyles.footerNavCol}>
              <div className={footerStyles.footerNavTitle}>宣教使命</div>
              <ul className={footerStyles.footerNavList}>
                <li><a href="/mission-testimony">生命見證</a></li>
                <li><a href="/mission-austronesian">南島趴趴走</a></li>
              </ul>
            </div>
            <div className={footerStyles.footerNavCol}>
              <div className={footerStyles.footerNavTitle}>教會消息</div>
              <ul className={footerStyles.footerNavList}>
                <li><a href="/news/sunday-live">主日直播</a></li>
                <li><a href="/news/prayer-meeting">禮合會直播</a></li>
                <li><a href="/news/message-review">重溫信息</a></li>
                <li><a href="/news/good-articles">好文分享</a></li>
              </ul>
              <div className={footerStyles.footerNavTitle + " mt-6 mb-4"}>支持奉獻</div>
              <ul className={footerStyles.footerNavList}>
                <li><a href="/offering">前往奉獻</a></li>
                <li><a href="/online-offering">線上奉獻</a></li>
                <li><a href="/member-center">會友中心</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 版權宣告 */}
      <div className="bg-[#172d2d] py-6 mt-12">
        <div className={footerStyles.footerCopyright + " text-center text-gray-200 text-base tracking-wide"}>
          Copyright 2025 Bread of Life Christian in Kaohsiung. All rights reserved.
        </div>
      </div>
      {/* Created by TJ-Tech */}
      <div className="bg-[#0a1515] py-3">
        <div className="text-center text-gray-300 text-sm">
          Created by <a href="https://porfolio.tj-tech.pro/" target="_blank" rel="noopener noreferrer" className="text-orange-theme hover:text-orange-400 transition-colors">TJ-Tech.</a>
        </div>
      </div>
    </footer>
  )
}
