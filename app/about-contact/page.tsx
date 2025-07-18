import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FindUsSection } from '@/components/ui/home'

// 聯絡資訊圖片
const contactImages = [
  'A4-ct-02.png',
  'A4-ct-03.png',
  'A4-ct-04.png',
  'A4-ct-05.png'
]

// 週日公車時刻表
const busSchedule = {
  title: '- 紅16 高雄靈糧堂站 -',
  subtitle: '發車時刻表',
  description: '由高鐵左營站延駛高雄靈糧堂站『週日』特別班次',
  schedules: [
    {
      direction: '高鐵左營站->高雄靈糧堂站',
      times: ['08:04、10:05、10:35、12:04', '12:25、12:45、13:34']
    },
    {
      direction: '高雄靈糧堂站->高雄應用大學站',
      times: ['08:07、10:08、10:38、12:08', '12:28、12:48、13:37']
    }
  ]
}

function ContactInfoCard({ image, index }: { image: string, index: number }) {
  const isAddressCard = index === 3; // 第四張卡片 (索引為3)
  
  const cardContent = (
    <div className={`contact-info-card-wrapper-item contact-info-card rounded-lg p-6 text-center ${isAddressCard ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : ''}`}>
      <Image 
        src={`/about/A-4/${image}`} 
        alt="聯絡資訊"
        width={200}
        height={150}
        className="object-contain w-full"
      />
    </div>
  );

  if (isAddressCard) {
    return (
      <a 
        href="https://maps.app.goo.gl/wf7tt5L7igxhSdP87" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

function BusScheduleCard() {
  return (
    <div className="bus-schedule-card bg-white rounded-lg p-8 shadow-md">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#21807a]">{busSchedule.title} {busSchedule.subtitle}</h3>
      </div>
      
      <p className="text-gray-600 text-center mb-8">{busSchedule.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {busSchedule.schedules.map((schedule, index) => (
          <div key={index} className={`schedule-column ${index === 0 ? 'border-r border-gray-300' : ''}`}>
            <h4 className="schedule-column-title font-semibold text-gray-800 mb-4 text-center">{schedule.direction}</h4>
            <div className="space-y-2 text-center">
              {schedule.times.map((time, timeIndex) => (
                <div key={timeIndex} className="text-gray-700 text-sm">{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button className="bg-orange-500 text-white px-8 py-3  hover:bg-orange-600 transition-colors duration-200 font-medium">
          詳細公車路線圖 →
        </button>
      </div>
    </div>
  )
}

export default function AboutContactPage() {
  return (
    <div className="about-contact-container min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1" style={{ backgroundColor: 'white' }}>
        {/* 頁首大圖 */}
        <div className="contact-hero-banner w-full relative">
          <Image 
            src="/about/A-4/A4-topB.png" 
            alt="聯絡我們" 
            fill 
            className="object-cover object-center" 
          />
        </div>

        {/* 聯絡資訊區塊 */}
        <section className="contact-info-section py-16">
          <div className="contact-info-section-wrapper max-w-6xl mx-auto px-4">
            <div className="contact-info-section-title text-center mb-12">
              <h2 className="text-lg text-[#21807a] mb-2">聯絡資訊</h2>
              <p className="text-3xl font-bold text-gray-800">Contact Information</p>
            </div>
            
            {/* 橙色背景的聯絡資訊卡片 */}
            <div className="contact-info-card-wrapper rounded-lg p-8 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactImages.map((image, index) => (
                  <ContactInfoCard key={index} image={image} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 找到我們區塊 */}
        <FindUsSection compact={true} showButton={false} className="about-contact-find-us-section" />

        {/* 週日公車資訊區塊 */}
        <section className="bus-info-section py-16 bg-[#21807a]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">週日公車資訊</h2>
            </div>
            
            <BusScheduleCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 