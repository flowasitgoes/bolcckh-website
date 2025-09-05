import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '成人牧區 | 高雄靈糧堂',
  description: '高雄靈糧堂成人牧區，提供成人信徒的牧養和關懷，歡迎參加成人牧區的聚會和活動。',
  keywords: '高雄靈糧堂, 成人牧區, 成人聚會, 教會牧養',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '成人牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂成人牧區，提供成人信徒的牧養和關懷，歡迎參加成人牧區的聚會和活動。',
    url: 'https://conflux-tech.com/church-department-adult',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂成人牧區',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '成人牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂成人牧區，提供成人信徒的牧養和關懷，歡迎參加成人牧區的聚會和活動。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function ChurchDepartmentAdultPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="dt-hero-section">
          <img src="/church/B4/B4.png" alt="成人牧區" />
        </div>

        <section className="dt-2-col-side-section hero-section relative h-96 md:h-96 flex flex-col md:flex-row">
          {/* Left side - Image */}
          {/* <div className="dt-left-side-section w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
            <Image 
              src="/church/B4/B4-01-01.png" 
              alt="成人牧區" 
              fill
              className="object-contain object-center" 
              priority
            />
          </div> */}
          {/* Right side - Orange background with text */}
          <div className="dt-right-side-section w-full h-48 md:h-full bg-[#fe7f4c] flex flex-col justify-center items-center text-white p-4 md:p-8">
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-2">成人牧區</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#172d2d', borderBottom: '1px solid #FFF', paddingBottom: '10px'}}>Welcome!</h2>
              {/* <div className="w-12 md:w-16 h-0.5 bg-white mx-auto mb-4"></div> */}
              <p className="text-base md:text-lg mb-4">成人牧區主日崇拜時段</p>
              <div className="bg-[#21807a] px-4 md:px-6 py-2 md:py-3 rounded">
                <p className="text-lg md:text-xl font-semibold">每週日上午08:30 & 10:30 – 2F 榮耀廳
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content-section bg-[#21807a] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg p-12 shadow-lg" style={{borderRadius: '40px'}}>
              <div className="prose prose-lg max-w-none text-[#444]">
                {/* <p className="text-lg leading-relaxed mb-6">
                  成人牧區是高雄靈糧堂的核心牧區之一，我們致力於為成人信徒提供全面的牧養和關懷。我們相信每個成人都需要在信仰上成長，在生活中經歷神的同在。
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  每週日上午08:30和10:30，我們在2F榮耀廳舉行成人牧區主日崇拜。透過敬拜、禱告、神的話語分享，讓每位成人信徒都能在靈命上得到建造和更新。
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  成人牧區提供多元化的聚會和活動，包括小組聚會、查經班、禱告會等，讓弟兄姊妹能夠在小組生活中彼此扶持，共同成長。我們也注重家庭關懷，提供婚姻輔導、親子教育等服務。
                </p>
                
                <p className="text-lg leading-relaxed mb-12">
                  成人牧區的使命是裝備成人信徒，在家庭、職場、教會中活出基督的樣式，成為神國度的精兵。
                </p> */}

                {/* 成人牧區各區介紹 */}
                <div className="space-y-12">
                  {/* 成人一區 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-6">成人一區</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-lg leading-relaxed text-gray-700">
                        這裡有著從學校畢業進入社會的年輕人及社會的中堅、壯年、到退休都有的全年齡層牧區。我們注重全人關懷、靈命成長與信仰生活化的基督家庭，並積極參與各樣的裝備與服事，使用恩賜來服事與成全。我們關注身、心靈的健康，在工作、婚姻家庭日常生活之間也常以節期餐聚、郊遊彼此聯絡、火熱傳福音見證主，感謝主，這是一個溫馨充滿動力的地方。
                      </p>
                    </div>
                  </div>

                  {/* 成人二區 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-6">成人二區</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        成人二區擁有一批心志堅定、靈性成熟的區長團隊，以及順服委身的小組長團隊，在因應教會事工大量需要人力的時候，總是樂意快速動員、參與服事，顯出以教會為家的溫馨感。
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700">
                        此外，我們的小組也以成全和造就組員生命成熟為目標，讓弟兄姊妹能在穩定中成長為基督精兵，與教會同一心靈、同一腳蹤，朝建造 榮耀的教會前進。
                      </p>
                    </div>
                  </div>

                  {/* 成人三區 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-6">成人三區</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        成三區擁有不同的年齡層，就像一棵茂密的大樹，樹上結滿果子，不斷成長，各類動物皆可來棲息在其中。
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        成三區也是個注重門訓、透明敞開的牧區，我們看重屬靈的生命、看重每一個人與神的關係、也看重生命的果子。
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700">
                        成三區擁有彼此扶持、恩賜互相配搭的團隊，透過團隊服事，我們享受在服事中。
                      </p>
                    </div>
                  </div>

                  {/* 成人四區 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-6">成人四區</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                        <p><strong>帶領人認識上帝</strong><br/>
                        明白福音的核心<br/>
                        而非活在屬靈的價值觀或使命的宣言裡</p>
                        
                        <p><strong>建造人成為主門徒</strong><br/>
                        清楚傳福音的使命<br/>
                        讓神的旨意行在地上如同行在天上</p>
                        
                        <p><strong>以神為首</strong><br/>
                        <strong>以神為樂</strong><br/>
                        <strong>效法基督耶穌捨己</strong><br/>
                        <strong>傳揚基督耶穌是主</strong></p>
                      </div>
                    </div>
                  </div>

                  {/* 成人五區 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-6">成人五區</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                        <p className="font-semibold text-[#07847f]">
                          住在主愛裡  留在恩典處  站在真理上  活在遮蓋下  行在神蹟中
                        </p>
                        
                        <p>2017年由高雄靈糧堂成一牧區分殖，傳承了愛心與增長的恩膏，渴慕屬靈更新的活水充滿。</p>
                        
                        <p>弟兄不斷興起  婦女成了大軍  家庭職場翻轉  結出福音果子</p>
                        
                        <p className="italic">奉耶穌基督的名宣告，成五牧區必要興起，成為神榮耀的祭司，成為神合用的器皿！</p>
                      </div>
                    </div>
                  </div>

                  {/* 成人六區 */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-6">成人六區</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                        <p>成人六區是一群愛家、愛教會、愛演戲、喜樂、活潑、有創意的團隊，注重夫妻、親子關係，常聚餐、探訪連結，各小區服事不分彼此，互相幫補配搭，互相連結支援，是家人相愛互相包容的大家庭。</p>
                        
                        <p>我們亦秉持–造就門徒–成為生命根基穩固的基督精兵，同心合意興旺福音，並承接生養眾多結果增長的使命，堅定順服委身，跟隨教會異象而行！</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
