import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from 'next/link'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '見證詳情 | 高雄靈糧堂 - 生命見證',
  description: '高雄靈糧堂生命見證詳情，分享弟兄姊妹經歷上帝的真實故事。',
  keywords: '高雄靈糧堂, 生命見證, 經歷上帝, 見證詳情',
}

// 見證數據
const testimonies = [
  {
    id: 1,
    title: "全家信主 - 侯淑樺 姊妹",
    subtitle: "全家信主 家師",
    image: "/mission/C2/C2-07.png",
    date: "2025.01.15",
    content: `
      在我們教會中，侯淑樺姊妹的見證特別令人感動。她原本是一個對信仰持懷疑態度的人，
      但在一次偶然的機會中，她參加了教會的聚會，從此生命有了根本的轉變。

      侯姊妹原本經營一家小餐廳，生活忙碌而充實，但內心卻常常感到空虛和不安。
      她說：「那時候我總覺得人生缺少了什麼，雖然物質生活不錯，但心裡卻沒有真正的平安。」

      在一次朋友的邀請下，侯姊妹來到了教會。她回憶說：「第一次參加聚會時，
      我被弟兄姊妹們的熱情和真誠所感動，特別是當大家一起唱詩歌時，
      我感受到了一種前所未有的平安和喜樂。」

      經過幾個月的參與，侯姊妹決定接受耶穌基督為她個人的救主。
      她說：「當我真正認識耶穌的那一刻，我感覺整個人都被更新了，
      原本的焦慮和不安都消失了，取而代之的是滿滿的平安和喜樂。」

      更令人感動的是，侯姊妹的歸主也影響了她的家人。
      她的丈夫原本對信仰持保留態度，但看到妻子的改變後，
      也開始對信仰產生興趣。經過一段時間的觀察和了解，
      她的丈夫也接受了耶穌基督。

      現在，侯姊妹的全家都已經歸主，包括她的兩個孩子。
      她說：「看到全家人都認識主，這是我最大的喜樂。
      我們每天一起禱告，一起讀經，家庭關係比從前更加和睦。」

      侯姊妹現在也在教會中服事，擔任兒童主日學的老師。
      她說：「能夠服事神，服事弟兄姊妹，這是我最大的榮幸。
      我希望能夠透過我的見證，幫助更多的人認識主。」

      這個見證讓我們看見，上帝如何透過一個人來祝福整個家庭，
      如何讓愛和恩典在家庭中流動。每個見證都是獨特的，
      但都指向同一位上帝，祂是生命的源頭，是愛的泉源，
      是我們唯一的盼望。
    `
  },
  {
    id: 2,
    title: "從絕望到盼望 - 張明德 弟兄",
    subtitle: "生命轉變 見證",
    image: "/mission/C2/C2-07.png",
    date: "2025.01.10",
    content: `
      張明德弟兄的見證是一個從絕望到盼望的典型例子。
      他原本是一名成功的企業主管，但在一次經濟危機中，
      他失去了所有的一切，包括工作、房子和積蓄。

      張弟兄回憶說：「那時候我感覺整個世界都崩塌了，
      我對未來完全失去了希望，甚至想過要結束自己的生命。
      我無法面對家人，無法面對朋友，整天把自己關在家裡。」

      在最絕望的時候，張弟兄的一位基督徒朋友邀請他參加教會的聚會。
      起初他並不願意，但在朋友的堅持下，他勉強答應了。

      張弟兄說：「第一次參加聚會時，我被牧師的話語深深觸動。
      牧師說，上帝從來沒有放棄任何一個人，即使在最困難的時候，
      祂仍然與我們同在，祂的愛和恩典是無條件的。」

      這句話給了張弟兄極大的安慰和鼓勵。他開始每天禱告，
      將自己的困難和憂慮都交託給上帝。他說：「當我開始禱告時，
      我感覺心裡的負擔漸漸減輕了，我開始有了新的盼望。」

      經過一段時間的禱告和等待，張弟兄重新找到了工作，
      雖然薪水不如從前，但他感到非常滿足。他說：「現在我明白，
      真正的財富不是金錢，而是與上帝的關係，是內心的平安。」

      張弟兄現在也在教會中服事，擔任小組長。
      他常常用自己的經歷來鼓勵其他遇到困難的弟兄姊妹。
      他說：「我希望能夠透過我的見證，告訴大家，
      無論遇到什麼困難，都不要放棄希望，因為上帝與我們同在。」

      這個見證讓我們看見，上帝如何透過困難來塑造我們的生命，
      如何在我們最軟弱的時候給我們力量，
      如何將我們的絕望轉變為盼望。
    `
  },
  {
    id: 3,
    title: "醫治與恢復 - 李美玲 姊妹",
    subtitle: "疾病得醫治 見證",
    image: "/mission/C2/C2-07.png",
    date: "2025.01.05",
    content: `
      李美玲姊妹的見證是一個關於醫治與恢復的感人故事。
      她原本是一名護士，但在一次意外中，她受了重傷，
      導致下半身癱瘓，無法行走。

      李姊妹回憶說：「那時候我感覺整個世界都變了，
      我無法接受這個事實，我常常問上帝為什麼要讓我經歷這樣的苦難。
      我對未來失去了希望，甚至想過要放棄治療。」

      在醫院治療期間，李姊妹遇到了一位基督徒護士，
      這位護士常常為她禱告，並鼓勵她不要放棄希望。
      李姊妹說：「這位護士的愛心和關懷讓我深受感動，
      她告訴我，上帝愛我，祂不會放棄我。」

      在護士的鼓勵下，李姊妹開始禱告，將自己的病情交託給上帝。
      她說：「當我開始禱告時，我感覺心裡有了平安，
      我不再害怕，不再絕望，我相信上帝會醫治我。」

      經過長期的治療和復健，加上無數的禱告，
      李姊妹的身體漸漸有了好轉。她說：「這是一個奇蹟，
      醫生都說我的恢復速度超出了他們的預期。」

      現在，李姊妹已經可以正常行走，雖然還需要一些輔助工具，
      但她感到非常感恩。她說：「這個經歷讓我更深刻地認識了上帝，
      我明白祂的愛是無條件的，祂的醫治是奇妙的。」

      李姊妹現在也在教會中服事，擔任關懷小組的組長。
      她常常用自己的經歷來安慰和鼓勵其他有需要的弟兄姊妹。
      她說：「我希望能夠透過我的見證，告訴大家，
      上帝是醫治的神，祂能夠醫治我們身體和心靈的創傷。」

      這個見證讓我們看見，上帝如何透過疾病來彰顯祂的大能，
      如何在我們最軟弱的時候給我們力量，
      如何將我們的痛苦轉變為祝福。
    `
  },
  {
    id: 4,
    title: "工作蒙祝福 - 王建國 弟兄",
    subtitle: "事業發展 見證",
    image: "/mission/C2/C2-07.png",
    date: "2024.12.28",
    content: `
      王建國弟兄的見證是一個關於工作蒙祝福的故事。
      他原本是一名普通的上班族，工作穩定但沒有太大的發展空間。
      他一直希望能夠有更好的工作機會，但總是沒有合適的機會。

      王弟兄回憶說：「那時候我對工作感到不滿意，
      我常常抱怨工作環境不好，薪水不高，沒有發展前景。
      我試過換工作，但都沒有找到滿意的。」

      在一次教會的禱告會中，王弟兄聽到牧師分享關於工作的信息。
      牧師說，我們的工作是上帝給我們的呼召，
      我們要在工作中榮耀上帝，無論做什麼都要盡心盡力。

      這句話讓王弟兄深受啟發。他開始改變對工作的態度，
      不再抱怨，而是認真工作，努力提升自己的能力。
      他說：「當我開始以正確的態度對待工作時，
      我發現工作變得更有意義，我也更有動力。」

      經過一段時間的努力，王弟兄的工作表現得到了上司的認可，
      他被提拔為部門主管，薪水和福利都有了大幅提升。
      他說：「這完全是上帝的恩典，我沒有想到會有這樣的機會。」

      現在，王弟兄在公司中擔任重要職位，他不僅工作出色，
      也常常在同事中分享自己的信仰見證。
      他說：「我希望能夠透過我的工作來榮耀上帝，
      讓更多的人認識主。」

      王弟兄現在也在教會中服事，擔任職場小組的組長。
      他常常用自己的經歷來鼓勵其他在職場中的弟兄姊妹。
      他說：「我希望能夠透過我的見證，告訴大家，
      上帝會祝福我們的工作，只要我們以正確的態度對待工作。」

      這個見證讓我們看見，上帝如何透過工作來祝福我們，
      如何在我們的工作中彰顯祂的榮耀，
      如何讓我們的工作成為見證祂的機會。
    `
  },
  {
    id: 5,
    title: "家庭關係修復 - 陳雅婷 姊妹",
    subtitle: "家庭和好 見證",
    image: "/mission/C2/C2-07.png",
    date: "2024.12.20",
    content: `
      陳雅婷姊妹的見證是一個關於家庭關係修復的感人故事。
      她原本有一個幸福的家庭，但因為一些誤會和溝通不良，
      家庭關係變得緊張，甚至到了破裂的邊緣。

      陳姊妹回憶說：「那時候我們家裡的氣氛很緊張，
      我和丈夫常常吵架，孩子們也受到影響，
      整個家庭都籠罩在陰影中。」

      在一次偶然的機會中，陳姊妹參加了教會的婚姻輔導課程。
      在課程中，她學到了很多關於溝通和原諒的功課。
      她說：「這個課程讓我明白，很多問題都是因為溝通不良造成的，
      我們需要學會傾聽，學會原諒，學會愛。」

      陳姊妹開始改變自己，她學會了先道歉，學會了傾聽丈夫的心聲，
      學會了用愛的方式來處理衝突。她說：「當我開始改變時，
      我發現丈夫也開始改變，我們的關係漸漸好轉。」

      經過一段時間的努力，陳姊妹的家庭關係得到了完全的恢復。
      她說：「現在我們家的氣氛比從前更好，
      我們學會了互相理解，互相支持，互相愛護。」

      更令人感動的是，陳姊妹的改變也影響了她的丈夫，
      他開始對信仰產生興趣，最終也接受了耶穌基督。
      現在，他們全家都已經歸主，家庭關係更加和睦。

      陳姊妹現在也在教會中服事，擔任婚姻輔導的義工。
      她常常用自己的經歷來幫助其他有婚姻問題的夫妻。
      她說：「我希望能夠透過我的見證，告訴大家，
      上帝能夠修復破碎的關係，只要我們願意改變。」

      這個見證讓我們看見，上帝如何透過愛來修復關係，
      如何在我們最困難的時候給我們力量，
      如何讓我們的家庭成為見證祂的地方。
    `
  },
  {
    id: 6,
    title: "靈命成長 - 林志豪 弟兄",
    subtitle: "屬靈生命 見證",
    image: "/mission/C2/C2-07.png",
    date: "2024.12.15",
    content: `
      林志豪弟兄的見證是一個關於靈命成長的故事。
      他原本是一名基督徒，但對信仰的認識很膚淺，
      常常只是參加聚會，但沒有真正地追求靈命的成長。

      林弟兄回憶說：「那時候我對信仰的認識很表面，
      我只是知道一些基本的教義，但沒有真正地經歷上帝，
      我的靈命一直停留在初信的階段。」

      在一次教會的門訓課程中，林弟兄被邀請參加。
      起初他並不願意，覺得太麻煩，但在朋友的鼓勵下，
      他勉強答應了。

      在門訓課程中，林弟兄學到了很多關於信仰的功課。
      他開始每天讀經，每天禱告，開始真正地追求靈命的成長。
      他說：「當我開始認真地追求上帝時，
      我發現我的生命有了很大的改變。」

      經過一段時間的學習和實踐，林弟兄的靈命有了顯著的成長。
      他開始在教會中服事，擔任小組長，帶領查經班。
      他說：「現在我明白，服事不是負擔，而是榮幸，
      能夠服事上帝，服事弟兄姊妹，這是我最大的喜樂。」

      林弟兄現在也在教會中擔任重要的職位，
      他常常用自己的經歷來鼓勵其他弟兄姊妹追求靈命成長。
      他說：「我希望能夠透過我的見證，告訴大家，
      靈命的成長需要我們主動追求，需要我們付出時間和努力。」

      這個見證讓我們看見，上帝如何透過門訓來塑造我們的生命，
      如何在我們追求祂的時候給我們成長，
      如何讓我們的生命成為見證祂的工具。

      林弟兄說：「靈命的成長是一個持續的過程，
      我們需要不斷地學習，不斷地實踐，
      不斷地追求上帝，這樣我們的生命才能越來越像基督。」
    `
  }
]

interface PageProps {
  params: {
    id: string
  }
}

export default function TestimonyDetailPage({ params }: PageProps) {
  const testimony = testimonies.find(t => t.id === parseInt(params.id))

  if (!testimony) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-600 mb-4">見證不存在</h1>
            <Link 
              href="/mission-testimony/experience-god"
              className="text-[#21807a] hover:underline"
            >
              返回見證列表
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src="/mission/C2/C2-bn.png"
          alt="生命見證"
          className="w-full h-auto object-cover"
        />
      </div>

      <main className="bg-gray-50">
        <div className="w-full">
          <div className="mission-layout">
            {/* Left Sidebar Navigation */}
            <div className="mission-sidebar bg-[#21807a]">
              <div className="p-6">

                <nav className="space-y-0 p-6">
                  <Link 
                    href="/mission-testimony"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    神的作為 何等美好
                  </Link>
                  <Link 
                    href="/mission-testimony/experience-god"
                    className="block text-white px-4 py-3 border-l-4 border-l-[#F3A149] border-b border-b-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    經歷上帝 生命歸主
                  </Link>
                  <Link 
                    href="/mission-testimony/prayers"
                    className="block text-white px-4 py-3 border-b border-white/20 hover:bg-[#1a6860] transition-colors"
                  >
                    禱告蒙應允
                  </Link>
                  <Link 
                    href="/mission-testimony/witness"
                    className="block text-white px-4 py-3 hover:bg-[#1a6860] transition-colors"
                  >
                    門訓見證
                  </Link>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="mission-content">
              {/* Breadcrumb */}
              <nav className="mission-breadcrumb text-sm text-gray-600 p-12">
                <Link href="/" className="hover:text-[#21807a]">首頁</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/mission-testimony" className="hover:text-[#21807a]">生命見證</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/mission-testimony/experience-god" className="hover:text-[#21807a]">經歷上帝 生命歸主</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">{testimony.title}</span>
              </nav>

              {/* Article Content */}
              <div className="bg-white shadow-sm">
                {/* Main Image */}
                <div className="w-full mb-8">
                  <img
                    src={testimony.image}
                    alt={testimony.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="article-content-wrapper">
                  {/* Article Header */}
                  <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#444] mb-4">
                      {testimony.title}
                    </h1>
                    <p className="text-gray-600">{testimony.date}</p>
                  </div>

                  {/* Article Content */}
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    {testimony.content.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>

                  {/* Back to List Button */}
                  <div className="mt-8 text-center">
                    <Link 
                      href="/mission-testimony/experience-god"
                      className="inline-flex items-center px-6 py-3 bg-[#21807a] text-white rounded-lg hover:bg-[#1a6860] transition-colors"
                    >
                      <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      返回見證列表
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 