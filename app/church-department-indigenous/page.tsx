import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '原民牧區 | 高雄靈糧堂',
  description: '高雄靈糧堂原民牧區，提供原住民信徒的牧養和關懷，歡迎參加原民牧區的聚會和活動。',
  keywords: '高雄靈糧堂, 原民牧區, 原住民聚會, 教會牧養',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '原民牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂原民牧區，提供原住民信徒的牧養和關懷，歡迎參加原民牧區的聚會和活動。',
    url: 'https://conflux-tech.com/church-department-indigenous',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂原民牧區',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '原民牧區 | 高雄靈糧堂',
    description: '高雄靈糧堂原民牧區，提供原住民信徒的牧養和關懷，歡迎參加原民牧區的聚會和活動。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function ChurchDepartmentIndigenousPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="dt-hero-section">
          <img src="/church/B4/B4.png" alt="原民牧區" />
        </div>

        <section className="dt-2-col-side-section hero-section relative h-96 md:h-96 flex flex-col md:flex-row">
          {/* Right side - Orange background with text */}
          <div className="dt-right-side-section w-full h-48 md:h-full bg-[#fe7f4c] flex flex-col justify-center items-center text-white p-4 md:p-8">
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-2">原民牧區</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#172d2d', borderBottom: '1px solid #FFF', paddingBottom: '10px'}}>Welcome!</h2>
              {/* <div className="w-12 md:w-16 h-0.5 bg-white mx-auto mb-4"></div> */}
              <p className="text-base md:text-lg mb-4">原民牧區聚會時段</p>

            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-content-section bg-[#21807a] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg p-12 shadow-lg" style={{borderRadius: '40px'}}>
              <div className="prose prose-lg max-w-none text-[#444]">
                <div className="text-center space-y-6">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-[#07847f] mb-4">原住民—台灣的長子</h3>
                    <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                      <p>
                        數千年前～<br/>
                        乘著竹筏帆船，勇敢航向南島；
                      </p>
                      <p>
                        二十一世紀～<br/>
                        乘著聖靈的風，渴望擁抱南島。
                      </p>
                    </div>
                  </div>

                  {/* 原民牧區照片 */}
                  <div className="flex justify-center">
                    <div className="relative overflow-hidden rounded-lg shadow-lg max-w-2xl">
                      <Image
                        src="/church/indegenous-photo.jpg"
                        alt="原民牧區照片"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-lg">
                    <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                      <p>
                        我們是關鍵少數，<br/>
                        卻擁有多元族群，
                      </p>
                      <p>
                        期盼原漢同行，同心合一，<br/>
                        將福音傳遍南島，直到地極。
                      </p>
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
