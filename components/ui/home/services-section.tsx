"use client"

import { Building2, Users, Award, FileText, Heart, BookOpen, Trophy, Settings } from "lucide-react"
import styles from '@/styles/services-section.module.css'

export function ServicesSection() {

  const services = [
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 0.png", 
      title: "主日週報",
      href: "https://drive.google.com/drive/folders/1t8h37AhnVgz4ABBHNZUm6mB3lizdSsso"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 1.png", 
      title: "講道信息",
      href: "https://bolcckh.vercel.app/news/sunday-live"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 2.png", 
      title: "我要奉獻",
      href: "https://bolcckh.vercel.app/offering"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 3.png", 
      title: "牧區介紹",
      href: "https://bolcckh.vercel.app/church-department"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 4.png", 
      title: "認識我們",
      href: "https://bolcckh.vercel.app/about"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 5.png", 
      title: "活動訊息",
      href: "https://bolcckh.vercel.app/news"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 6.png", 
      title: "領袖訓練",
      href: "/church-discipleship"
    },
    { 
      icon: "/home/icon/加粗_工作區域 1 複本 7.png", 
      title: "社區關懷",
      href: "/news/community-care"
    },
  ]

  return (
    <section className="relative py-16 lg:py-24 bg-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Welcome Home !</h2>
          </div>
          <div className={styles.serviceContent}>
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.serviceItem} group transition-all duration-300 bg-transparent hover:bg-white/10 block`}
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
              </a>
            ))}
          </div>
        </div>
      </section>
  )
}
