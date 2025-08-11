"use client"

import { useState } from "react"
import styles from '@/styles/reading-progress.module.css'

export function ReadingProgress() {
  const [isBookOpen, setIsBookOpen] = useState(false)

  const handleBookClick = () => {
    setIsBookOpen(!isBookOpen)
  }

  return (
    <div className={styles.readingProgress}>
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
  )
}
