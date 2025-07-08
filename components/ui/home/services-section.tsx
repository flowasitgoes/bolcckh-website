import { Building2, Users, Award, FileText, Heart, BookOpen, Trophy, Settings } from "lucide-react"
import styles from '@/styles/services-section.module.css'

export function ServicesSection() {
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

  return (
    <section className="relative py-16 lg:py-24 bg-teal-600">
      {/* 桌機版社交欄位（右側） */}
      <div className={styles.serviceSocial}>
        <img src="/home/service-content/Home-16.png" alt="線上諮詢" className={styles.serviceSocialImg} />
        <img src="/home/service-content/Home-17.png" alt="本週讀經進度" className={styles.serviceSocialImg} />
      </div>
      
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
        {/* mobile 版社交欄位（下方） */}
        <div className={styles.serviceSocialMobile}>
          <img src="/home/service-content/mobile/0708-09.png" alt="線上諮詢" className={styles.serviceSocialImg} />
          <img src="/home/service-content/mobile/0708-10.png" alt="本週讀經進度" className={styles.serviceSocialImg} />
        </div>
      </div>
    </section>
  )
}
