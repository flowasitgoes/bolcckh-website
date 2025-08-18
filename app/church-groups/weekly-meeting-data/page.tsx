import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: '本週小組聚會資料 | 高雄靈糧堂',
  description: '高雄靈糧堂本週小組聚會資料，提供最新的聚會資訊和相關資料。',
  keywords: '高雄靈糧堂, 小組聚會, 聚會資料, 教會生活',
}

export default function WeeklyMeetingDataPage() {
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
              本週小組聚會資料
            </h1>
            {/* <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto px-4">
              歡迎查看本週的小組聚會資料，了解最新的聚會安排和相關資訊。
            </p> */}
          </div>
        </section>

        {/* 小組聚會資料內容 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* 2025-08-17 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">2025-08-17</h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Welcome 歡迎</h3>
                    <p className="text-gray-700">– 透過破冰活動活絡關係。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Worship 敬拜</h3>
                    <p className="text-gray-700">– 透過詩歌讚美，歡迎上帝同在。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Word 話語分享 神對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p>1、詩71，詩人回顧從出母胎直到年老的歷程，多少次禱告蒙應允，多少次難關靠主過。當你回首至今，可以分享一個另你最難忘的恩典？一同向神獻上感謝。</p>
                      <p>2、羅馬書1:1是保羅的自我介紹，之後開始講論福音的內容。回到現今，你是如何介紹自己，開始傳講福音，可以試著說說看。</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Work 異象禱告 人對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p className="italic">奉主耶穌基督的名宣告：主雖然以艱難給我們當餅，以困苦給我們當水，我們的教師卻不再隱藏；我們的眼必看見我們的教師，我們或向左或向右，必聽見後邊有聲音說：「這是正路，要行在其間。」。阿們！</p>
                      <div className="space-y-2">
                        <p>1、請2~3人簡要分享過去一段時間你所經歷的主恩，或為主做工的見證，並為此一起獻上感恩的禱告。</p>
                        <p>2、為組員中病得醫治及家庭關係、經濟、工作有困難的突破禱告。</p>
                        <p>3、為家庭、職場、服事上都滿有從聖靈而來的恩膏、恩賜與能力，結出果子禱告。</p>
                        <p>4、為更切實活出君尊祭司的呼召禱告，求神幫助每個兄姊帶著拿細耳人的心志，不但渴慕、追求主，更在生命中散發基督的馨香之氣，並且使人與人、人與神和好。</p>
                        <p>5、為合一更深充滿在教會禱告，求主擴張我們愛的身量，使我們在每層關係上更加互相接納、寬容，並以和平彼此聯絡，竭力保守聖靈所賜合而為一的心。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 2025-08-10 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">2025-08-10</h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Welcome 歡迎</h3>
                    <p className="text-gray-700">– 透過破冰活動活絡關係。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Worship 敬拜</h3>
                    <p className="text-gray-700">– 透過詩歌讚美，歡迎上帝同在。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Word 話語分享 神對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p>1、一同頌讀詩篇62篇，我的心啊，你可以默默無聲，專心等候神嗎？如果正落入受人攻擊的景況中，大衛的禱告對你有何提醒，可以分享你的亮光。</p>
                      <p>2、你是一個有福的人嗎？一同從詩篇65篇來尋找答案(如赦罪、揀選…)，並分享為什麼？並為你們一同找出的答案向神獻上感恩。</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Work 異象禱告 人對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p className="italic">奉主耶穌基督的名宣告： 我們盡心盡意尋求雅威，雅威就被我們尋見，並賜力量給我們，又使我們四境平安。阿們！</p>
                      <div className="space-y-2">
                        <p>1、請2~3人簡要分享過去一段時間你所經歷的主恩，或為主做工的見證，並為此一起獻上感恩的禱告。</p>
                        <p>2、為組員中病得醫治及家庭關係、經濟、工作有困難的突破禱告。</p>
                        <p>3、為家庭、職場、服事上都滿有從聖靈而來的恩膏、恩賜與能力，結出果子禱告。</p>
                        <p>4、為更切實活出君尊祭司的呼召禱告，求神幫助每個兄姊帶著拿細耳人的心志，不但渴慕、追求主，更在生命中散發基督的馨香之氣，並且使人與人、人與神和好。</p>
                        <p>5、為合一更深充滿在教會禱告，求主擴張我們愛的身量，使我們在每層關係上更加互相接納、寬容，並以和平彼此聯絡，竭力保守聖靈所賜合而為一的心。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 2025-06-22 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">2025-06-22</h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Welcome 歡迎</h3>
                    <p className="text-gray-700">– 透過破冰活動活絡關係。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Worship 敬拜</h3>
                    <p className="text-gray-700">– 透過詩歌讚美，歡迎上帝同在。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Word 話語分享 神對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p>1、加拉太書第3章，提到「律法」與「福音」同等重要，可以一同讀這段經文，你看到的律法是什麼？你看到的福音是什麼？試著分享。</p>
                      <p>2、加6:1-5 提到彼此擔當，也當謹慎自己的行為，請回想有哪些人需要幫助、關心或鼓勵，可與小組家人一同去關心探訪。</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Work 異象禱告 人對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p className="italic">奉主耶穌基督的名宣告：我要竭力保守向基督所存純一清潔的心，不向虛妄、起誓不懷詭詐，就必站在雅威的聖所，蒙祂賜福。阿們！</p>
                      <div className="space-y-2">
                        <p>1、請2~3人簡要分享過去一段時間你所經歷的主恩，或為主做工的見證，並為此一起獻上感恩的禱告。</p>
                        <p>2、為組員中病得醫治及家庭關係、經濟、工作有困難的突破禱告。</p>
                        <p>3、為家庭、職場、服事上都滿有從聖靈而來的恩膏、恩賜與能力，結出果子禱告。</p>
                        <p>4、為神的話語真實扎根在每個神兒女的生命禱告，求聖靈耕耘弟兄姐妹的心田，挪去那些使人「聽見不接受」、「聽見接受但沒有根基」、「聽見接受卻受世俗誘惑影響」的人事物， 使每個心田成為好土，結實纍纍。</p>
                        <p>5、為合一更深充滿在教會禱告，求主擴張我們愛的身量，使我們在每層關係上更加互相接納、寬容，並以和平彼此聯絡，竭力保守聖靈所賜合而為一的心。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 2024-12-22 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">2024-12-22</h2>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Welcome 歡迎</h3>
                    <p className="text-gray-700">– 透過破冰活動活絡關係。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Worship 敬拜</h3>
                    <p className="text-gray-700">– 透過詩歌讚美，歡迎上帝同在。</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Word 話語分享 神對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p>1、從約阿施、希西家都曾修建耶和華的殿，聖殿存在的意義為何 ? (參代下24:4-14、29:3-27、34:8-33)，對於現今教會存在的意義有何相同之處 ? 請分享。</p>
                      <p>2、代下36:22-23，神激動波斯王塞魯士的心，頒發詔書使猶大被擄者，回國重建聖殿，神也使用外邦君王，來完成祂的計劃。你相信上帝在你生命中的計劃嗎 ? 不憑眼見，乃憑信心等候，請為神在你生命的計劃彼此代求。</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-2">Work 異象禱告 人對人</h3>
                    <div className="text-gray-700 space-y-3">
                      <p className="italic">奉主耶穌基督的名宣告：除了上帝以外，我們在天上別無倚靠，在地上也沒有所愛慕的，雖然我們的肉體和我們的心腸衰殘；但上帝是我們心裡的力量，又是我們的福分，直到永遠。阿們！</p>
                      <div className="space-y-2">
                        <p>1、請2~3人簡要分享過去一段時間你所經歷的主恩，或為主做工的見證， 並為此一起獻上感恩的禱告。</p>
                        <p>2、為組員中病得醫治及家庭關係、經濟、工作有困難的突破禱告。</p>
                        <p>3、為家庭、職場、服事上都滿有從聖靈而來的恩膏、恩賜與能力，結出果子禱告</p>
                        <p>4、為小組的福音行動禱告，求神感動兄姊熱切邀請未信主的朋友、家人或同事，參加聖誕傳愛活動，願他們都心受感動。</p>
                        <p>5、奉主名宣告 神的兒女既然蒙召，行事為人就與蒙召的恩相稱，凡事謙虛、溫柔忍耐，用愛心互相寬容，用和平彼此聯絡，竭力保守聖靈所賜合而為一的心。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-12" />

              {/* 小組介紹 */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">小組介紹</h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>高雄靈糧堂是一個健康的小組教會，小組教會是以『小組就是教會』為架構的教會。</p>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-4">小組是什麼</h3>
                    <p className="mb-4">就是以6至12個人為一個生活小組，每週聚集一次，透過聚會中的四項活動，來達到彼此分享、造就及勸勉，使得弟兄姊妹的信仰生活化，生活信仰化，生命一起成長。</p>
                    
                    <p className="mb-4">這四項活動有：</p>
                    <div className="space-y-2 text-left max-w-2xl mx-auto">
                      <p><strong>歡迎</strong> – 透過破冰活動活絡關係。</p>
                      <p><strong>敬拜</strong> – 透過詩歌讚美，歡迎上帝同在。</p>
                      <p><strong>神的話</strong> – 透過研讀聖經，分享牧者講道信息，達到信心的建造、安慰與勸勉。</p>
                      <p><strong>神的工</strong> – 透過異象分享及彼此代禱，經歷上帝的恩典。</p>
                    </div>
                  </div>

                  <p>此外，小組是在城市中福音的出口，透過開幸福小組，在我們的生活現場傳講神的福音及見證神的作為，使福音不再只是在教會中被傳揚，而是在我們的生活現場被傳揚領人歸主。</p>
                  
                  <p>我們鼓勵每一位弟兄姊妹，除了參與主日聚會之外，也能夠選擇加入一個小組，當我們在小組裡才能夠得到充分的牧養。</p>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[#07847f] mb-4">如何加入小組</h3>
                    <p>週間請您致電 <strong>07-3456868 分機149</strong>或撥打免付費專線 <strong>0800-000-830</strong> ，告訴我們您想加入小組，我們將為您安排合適您需要的小組。</p>
                    <p>主日請洽一樓大廳服務中心。</p>
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
