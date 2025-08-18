import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: '參加小組聚會 | 高雄靈糧堂',
  description: '高雄靈糧堂小組聚會資訊，歡迎參加我們的小組聚會，與弟兄姊妹建立美好的團契關係。',
  keywords: '高雄靈糧堂, 小組聚會, 團契生活, 教會小組',
}

export default function JoinSmallGroupPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Main Content Section */}
        <section 
          className="flex justify-center items-center relative"
          style={{ 
            minHeight: '540px',
            background: '#F3A149',
            flexDirection: 'column',
            textAlign: 'center',
            fontSize: '30px'
          }}
        >
          {/* 返回按鈕 */}
          <div className="absolute top-4 left-4 z-10">
            <a 
              href="/church-groups"
              className="inline-flex items-center text-white hover:text-white/80 transition-colors duration-200 font-semibold bg-black/20 rounded-lg px-3 py-1 text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回
            </a>
          </div>
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              參加小組聚會
            </h1>
            {/* <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto px-4">
              歡迎參加高雄靈糧堂的小組聚會，與弟兄姊妹一同學習、分享、成長，建立美好的團契關係。
            </p> */}
          </div>
        </section>

        {/* 小組介紹內容 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* 小組教會介紹 */}
              <div className="text-center">
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  高雄靈糧堂是一個健康的小組教會，小組教會是以『小組就是教會』為架構的教會。
                </p>
              </div>

              {/* 小組是什麼 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">小組是什麼</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    就是以6至12個人為一個生活小組，每週聚集一次，透過聚會中的四項活動，來達到彼此分享、造就及勸勉，使得弟兄姊妹的信仰生活化，生活信仰化，生命一起成長。
                  </p>
                  
                  <div>
                    <p className="mb-4">這四項活動有：</p>
                    <div className="space-y-3 text-left max-w-2xl mx-auto">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong className="text-[#07847f]">歡迎</strong> – 透過破冰活動活絡關係。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong className="text-[#07847f]">敬拜</strong> – 透過詩歌讚美，歡迎上帝同在。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong className="text-[#07847f]">神的話</strong> – 透過研讀聖經，分享牧者講道信息，達到信心的建造、安慰與勸勉。</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong className="text-[#07847f]">神的工</strong> – 透過異象分享及彼此代禱，經歷上帝的恩典。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 福音使命 */}
              <div className="text-center">
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    此外，小組是在城市中福音的出口，透過開幸福小組，在我們的生活現場傳講神的福音及見證神的作為，使福音不再只是在教會中被傳揚，而是在我們的生活現場被傳揚領人歸主。
                  </p>
                  
                  <p>
                    我們鼓勵每一位弟兄姊妹，除了參與主日聚會之外，也能夠選擇加入一個小組，當我們在小組裡才能夠得到充分的牧養。
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 如何加入小組 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">如何加入小組</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="mb-4">
                      週間請您致電 <strong className="text-[#07847f]">07-3456868 分機149</strong>或撥打免付費專線 <strong className="text-[#07847f]">0800-000-830</strong> ，告訴我們您想加入小組，我們將為您安排合適您需要的小組。
                    </p>
                    <p>
                      主日請洽一樓大廳服務中心。
                    </p>
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
