import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const events = [
  { year: '1989/09月', desc: '於鼓山區民泰街成立高雄禮拜堂' },
  { year: '1990/01月', desc: '由台北靈糧堂遮蓋成立高雄靈糧堂' },
  { year: '1992/05月', desc: '因民泰街場地不符使用，租用龍華大飯店11樓聚會' },
  { year: '1993/04月', desc: '購買高雄市左營區富國路158號4樓' },
  { year: '1994/01月', desc: '高雄市左營區富國路158號4樓獻堂感恩禮拜，周神助牧師啟鑰' },
  { year: '1997/08月', desc: '拓植分堂屏東靈糧堂' },
  { year: '1999/12月', desc: '因富國路場地不符使用，租用左營區保靖街40號聚會' },
  { year: '2003/09月', desc: '拓植分堂鳳山活泉靈糧堂' },
  { year: '2009/05月', desc: '導入雙翼養育系統' },
  { year: '2009/09月', desc: '購地於左營區文川路與大中路口' },
  { year: '2009/10月', desc: '拓殖分堂楠梓靈糧堂' },
  { year: '2011/11月', desc: '高雄市左營區文川路正式動土興建地下2層地上10層的主建築' },
  { year: '2014/04月', desc: '遷移至新堂高雄市左營區文川路157號－南島國際大樓聚會' },
  { year: '2015/01月', desc: '通過 ISO 9001:2008 牧養管理系統驗證' },
  { year: '2015/09月', desc: '於南島國際大樓榮耀廳新堂感恩禮拜' },
  { year: '2016/03月', desc: '導入 CIS 識別系統' },
  { year: '2016/12月', desc: '正式與中華音神學院簽約成立高雄分校' },
]

const images = [
  'A2-img_工作區域 1 複本.png',
  'A2-img_工作區域 1.png',
  'A2-img_工作區域 1 複本 2.png',
  'A2-img_工作區域 1 複本 3.png',
  'A2-img_工作區域 1 複本 4.png',
  'A2-img_工作區域 1 複本 7.png',
  'A2-img_工作區域 1 複本 5.png',
  'A2-img_工作區域 1 複本 6.png',
  'A2-img_工作區域 1 複本 8.png',
  'A2-img_工作區域 1 複本 9.png',
  'A2-img_工作區域 1 複本 10.png',
  'A2-img_工作區域 1 複本 11.png',
  'A2-img_工作區域 1 複本 12.png',
  'A2-img_工作區域 1 複本 13.png',
  'A2-img_工作區域 1 複本 16.png',
  'A2-img_工作區域 1 複本 14.png',
  'A2-img_工作區域 1 複本 15.png',
  'A2-img_工作區域 1 複本 17.png',
]

function TimelineItem({ img, year, desc, reverse, idx }: { img: string, year: string, desc: string, reverse?: boolean, idx: number }) {
  const isEven = idx % 2 === 0
  const textAlign = isEven ? 'text-left' : 'text-right'
  const flexDirection = isEven ? '' : 'flex-row-reverse'
  const alignItems = isEven ? '' : 'items-end'
  
  return (
    <div className={`about-history-item-wrapper flex w-full items-center mb-16 ${reverse ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="w-1/2 flex justify-center">
        <Image src={`/about/A-2/${img}`} alt={`歷史事件${idx+1}`} width={320} height={200} className="object-cover" />
      </div>
      <div className={`history-item-wrapper w-1/2 px-6 text-gray-700 text-lg ${textAlign} ${alignItems}`}>
        
        <div className={`history-item-date-and-line-wrapper flex ${flexDirection}`}>
          <div className="history-item-date mb-2 font-bold">{year}</div>
          <div className="history-item-line-wrapper">
            <div className="history-item-line"></div>
          </div>
        </div>

        <div className="history-item-desc">{desc}</div>
      </div>
    </div>
  )
}

export default function AboutHistoryPage() {
  return (
    <div className="about-history-container min-h-screen bg-white pb-20 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 頁首大圖 */}
        <div className="about-history-photo-banner w-full h-64 relative">
          <Image src="/about/A-2/Ａ2-topB.png" alt="about history banner" fill className="object-cover object-center" />
        </div>
        {/* 標題區 */}
        <div className=" max-w-3xl mx-auto text-center py-12">
          <div className="text-2xl md:text-4xl font-bold mb-2 text-[#21807a]">我們的簡史<br /><span className="text-lg md:text-2xl text-gray-700 font-normal">Our History</span></div>
        </div>
        {/* 垂直時間軸 */}
        <div className="history-image-box relative max-w-4xl mx-auto">
          {/* 中央細線 */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0" />
          <div className="relative z-10">
            {events.map((event, idx) => (
              <TimelineItem
                key={images[idx]}
                img={images[idx]}
                year={event.year}
                desc={event.desc}
                idx={idx}
                reverse={idx % 2 === 1}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 