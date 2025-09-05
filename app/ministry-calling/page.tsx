import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '事工介紹與呼召 | 高雄靈糧堂',
  description: '高雄靈糧堂事工介紹與呼召，邀請您加入我們，一起在高靈這片屬靈航空母艦中，建造生命、服事眾人、傳揚福音至地極。',
  keywords: '高雄靈糧堂, 事工介紹, 呼召, 兒童事工, 社區關懷, 媒體傳播',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '事工介紹與呼召 | 高雄靈糧堂',
    description: '高雄靈糧堂事工介紹與呼召，邀請您加入我們，一起在高靈這片屬靈航空母艦中，建造生命、服事眾人、傳揚福音至地極。',
    url: 'https://conflux-tech.com/ministry-calling',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂事工介紹與呼召',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '事工介紹與呼召 | 高雄靈糧堂',
    description: '高雄靈糧堂事工介紹與呼召，邀請您加入我們，一起在高靈這片屬靈航空母艦中，建造生命、服事眾人、傳揚福音至地極。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function MinistryCallingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/church/ministry-calling/01-hero-banner.png" 
              alt="事工介紹與呼召背景" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              事工介紹與呼召
            </h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed">
              「我們不是被呼召來『做教會』,而是被呼召活出教會。」
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              加入我們,一起在高靈這片屬靈航空母艦中,建造生命、服事眾人、傳揚福音至地極
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#21807a] py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                教會的使命呼召
              </h2>
            </div>
            <div className="text-white text-lg md:text-xl leading-relaxed space-y-6 text-center">
              <p>
                高雄靈糧堂的使命:成為屬靈的「航空母艦」,航向南島語系,將福音播種到地極。
              </p>
              <p>
                這呼召不只是牧師的,更是我們每一位弟兄姊妹的共同領受。
              </p>
              <p className=" text-[#fe7f4c]">
                「你們所做的,我要做比這更大的事」————約翰福音 14:12
              </p>
            </div>
          </div>
        </section>

        {/* Ministry Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* 兒童事工 */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
                <div className="absolute inset-0">
                  <Image 
                    src="/church/ministry-calling/03-left-image.png" 
                    alt="兒童事工" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
 
              </div>

                            {/* 社區關懷 */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
                <div className="absolute inset-0">
                  <Image 
                    src="/church/ministry-calling/04-middle-image.png" 
                    alt="社區關懷" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
 
              </div>

                            {/* 媒體傳播 */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80">
                <div className="absolute inset-0">
                  <Image 
                    src="/church/ministry-calling/05-right-image.png" 
                    alt="媒體傳播" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
 
              </div>
            </div>
          </div>
        </section>

        {/* Testimony Section */}
        <section className="bg-[#21807a] py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              靈命見證
            </h2>
            <div className="text-white text-lg md:text-xl leading-relaxed">
              <p className="text-[#fe7f4c]">
                「當我參與社區關懷,看到街友因一句暖心問候回眸, 我領悟到,原來傳福音不只是講道,而是有被聽見、被接納的可能。」
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/church/ministry-calling/06-middle-bannner-image.png" 
              alt="呼召背景" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              你願意一起嗎?
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-4 mb-12">
              <p>
                如果你渴望在屬靈成長中實際付出,願意為教會、為南島宣教投入時間與才幹,
              </p>
              <p>
                請按下面按鈕,我們邀請你來參加「事工說明會」,
              </p>
              <p>
                或留下你的聯繫方式,我們一起禱告、配搭、行動。
              </p>
            </div>
            <button className="bg-[#fe7f4c] hover:bg-[#e89440] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300">
              我要參加說明會
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
