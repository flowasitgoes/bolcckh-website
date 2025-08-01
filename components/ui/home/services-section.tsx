"use client"

import { Building2, Users, Award, FileText, Heart, BookOpen, Trophy, Settings } from "lucide-react"
import { useState } from "react"
import styles from '@/styles/services-section.module.css'

export function ServicesSection() {
  const [isBookOpen, setIsBookOpen] = useState(false)

  const services = [
    { icon: "/home/icon/0708-01.png", title: "主日週報" },
    { icon: "/home/icon/0708-02.png", title: "講道信息" },
    { icon: "/home/icon/0708-03.png", title: "我要奉獻" },
    { icon: "/home/icon/0708-04.png", title: "牧區介紹" },
    { icon: "/home/icon/0708-05.png", title: "認識我們" },
    { icon: "/home/icon/0708-06.png", title: "活動訊息" },
    { icon: "/home/icon/0708-07.png", title: "領袖訓練" },
    { icon: "/home/icon/0708-08.png", title: "社區關懷" },
  ]

  const handleBookClick = () => {
    setIsBookOpen(!isBookOpen)
  }

  return (
    <>
      {/* 固定位置的讀經進度區塊（適用於所有螢幕尺寸） */}
      <div className={styles.serviceSocial}>
        <div className={styles.socialContentWrap}>
          
          <div className={styles.socialContentItemWrap}>
            <img src="/home/service-content/Home-16.png" alt="線上諮詢" className={styles.serviceSocialImg} />
          </div>

          <div className={`${styles.socialContentItemWrapBook} ${isBookOpen ? styles.bookOpen : ''}`}>
            <div className={styles.socialContentItemWrapInnerBox}>
              <div className="text-sm leading-relaxed">
                <div className="mb-2 text-white">10/08 尼希米記7章01–73節</div>
                <div className="mb-2 text-[#333]">10/09 尼希米記8章01-18節</div>
                <div className="mb-2 text-white">10/10 尼希米記9章01-21節</div>
                <div className="mb-2 text-[#333]">10/11 尼希米記10章22-38節</div>
                <div className="mb-2 text-white">10/12 尼希米記11章01-39節</div>
                <div className="mb-2 text-[#333]">10/13 尼希米記12章01-36節</div>
                <div className="mb-2 text-white">10/14 尼希米記13章01-26節</div>
              </div>
            </div>
            <div 
              className={styles.socialContentItemWrapInnerLabel}
              onClick={handleBookClick}
              style={{ cursor: 'pointer' }}
            >
              <img src="/home/service-content/Home-17.png" alt="本週讀經進度" className={styles.serviceSocialImg} />
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-16 lg:py-24 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Welcome Home !</h2>
          </div>
          <div className={styles.serviceContent}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.serviceItem} group transition-all duration-300 bg-transparent hover:bg-white/10`}
              >
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className={`${styles.serviceIcon} mb-4`}
                  draggable="false"
                />
                <h3 className="text-white text-lg lg:text-2xl tracking-wide text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
