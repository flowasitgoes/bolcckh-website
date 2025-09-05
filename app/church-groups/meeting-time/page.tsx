import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: '聚會時間 | 高雄靈糧堂',
  description: '高雄靈糧堂聚會時間安排，提供各項聚會的詳細時間資訊。',
  keywords: '高雄靈糧堂, 聚會時間, 教會聚會, 主日崇拜',
}

export default function MeetingTimePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Main Content Section */}
        <section 
          className="flex justify-center items-center relative"
          style={{ 
            minHeight: '540px',
            background: '#fe7f4c',
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
              聚會時間
            </h1>
            {/* <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto px-4">
              了解高雄靈糧堂各項聚會的詳細時間安排，歡迎您參與我們的聚會。
            </p> */}
          </div>
        </section>

        {/* 聚會時間內容 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* 國語崇拜 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">國語崇拜</h2>
                
                <div className="space-y-4 text-lg">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">每週日上午</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>第一堂 08:30</strong></p>
                      <p><strong>第二堂 10:30</strong></p>
                      <p><strong>2F榮耀廳</strong></p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    每週最期待的時光，就是與屬靈家人一同敬拜神、聆聽神的話語、領受神的心意；活出福音的使命，邁向教會的異象！
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 台語崇拜 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">台語崇拜</h2>
                
                <div className="space-y-4 text-lg">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">每週四早上 10:00</h3>
                    <p className="text-gray-700"><strong>4F 恩惠廳</strong></p>
                  </div>
                  
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    真實經歷神，身心更強健，擴張神國度。
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 印尼語團契 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">印尼語團契</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">每週日中午12:30</h3>
                  <p className="text-gray-700"><strong>8F 815教室</strong></p>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 學生牧區 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">高雄靈糧堂學生牧區</h2>
                
                <div className="space-y-8">
                  {/* 學生崇拜 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">學生崇拜</h3>
                    
                    <div className="space-y-4 text-lg">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">學生牧區崇拜</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>每週六下午 03:00</strong></p>
                          <p><strong>7F 喜樂廳</strong></p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        每一週我們獻上黃金時間，用單純的心敬拜上帝，<br/>
                        用熱情的態度歡迎新家人，<br/>
                        用慷慨的靈獻上一切，用專注的心領受神的話。
                      </p>
                    </div>
                  </div>

                  {/* 兒童崇拜 */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">兒童崇拜</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">天國小牧人 – 6~12歲孩童</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>每週日早上 08:30＆10:30</strong></p>
                          <p><strong>1F 慈愛廳</strong></p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">天國小活石 – 3~6歲孩童</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>每週日早上 10:30</strong></p>
                          <p><strong>1F 慈愛廳</strong></p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">親子同心崇拜 – 0~3歲孩童</h4>
                        <div className="space-y-2 text-gray-700">
                          <p><strong>每週日早上 08:30 & 10:30</strong></p>
                          <p><strong>3F 榮耀廳親子室</strong></p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        我不再無聊 因為這裡有你(妳)(祢)<br/>
                        我可以大聲笑、大聲唱 因為祢(你)(妳)是我的安慰<br/>
                        這裡有我們共同的回憶 我們在基督裡彼此相愛
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 聚會場地使用注意事項 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#07847f] mb-6">高雄靈糧堂兒童牧區</h2>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">聚會場地使用注意事項</h3>
                <h4 className="text-xl font-bold text-gray-700 mb-6">Important Service Information</h4>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700 text-left max-w-3xl mx-auto">
                  <p>進入教會之 B1 / B2汽車停車場及左營國中租用之汽車停車場須憑證─「高雄靈糧堂汽車停車證」才能進場停車，請兄姊特別留意並接受交通指揮義工之查驗；若您是尚未申請停車證之新家人，請於主日會後至一樓服務中心登記申請並在下週主日領取。</p>
                  
                  <p>提醒騎機車來教會參加主日的弟兄姊妹，請將您的機車停放在教會一樓正門廣場、教會右側大中二路機車停車場、或重立路682巷機車棚；請勿將您的機車任意放在文川路74巷道路兩側或週邊透天厝騎樓，影響住戶的進出，請發揮我們的愛心，共同配合！</p>
                  
                  <p>提醒主日開車進入左營國中停車場的停放時間是早上 6:30至下午2:30，並請按交通指揮的引導在指定位置停車(共56個停車格)；請弟兄姊妹不要超過停車時間(下午2:30前要移車 )避免造成學校管理上的困擾與不便，敬請大家務必在愛心裡配合！</p>
                  
                  <p>教會暨本棟大樓係全面禁煙區，提醒弟兄姊妹勿在本棟大樓內或大樓週邊吸煙，請大家務必遵守並在愛心裡配合，謝謝！</p>
                  
                  <p>0～3歲的孩童請由家長陪同至親子室聚會，為顧及孩童安全，請勿將孩童單獨留在親子室，也請勿將孩童帶至榮耀廳，3~12歲的孩童請帶至一樓慈愛廳參加兒童崇拜。謝謝兄姊在愛心裏的配合。</p>
                  
                  <p>提醒兄姊進入榮耀廳聚會時，除一般白開水外，勿將咖啡、飲料、茶或食物帶進會堂，避免不小心傾倒，造成清潔上的困難或有異味；會堂外亦不提供飲料、食物置放籃，請在進入會堂前至五樓交誼廳飲用或食用完畢後再進入會堂參加聚會，敬請兄姊配合，讓我們共同愛護上帝的家。</p>
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
