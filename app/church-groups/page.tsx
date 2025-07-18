import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// 四個內容面板資料
const groupPanels = [
  {
    title: '本週小組聚會資料',
    bgColor: 'bg-black',
    image: null
  },
  {
    title: '聚會時間',
    subtitle: 'Meeting time',
    bgColor: 'bg-[#8B4513]',
    image: '/church/B2/section-01-B02_工作區域 1 複本.png'
  },
  {
    title: '禱告時段',
    subtitle: 'Prayer time',
    bgColor: 'bg-[#D2691E]',
    image: '/church/B2/section-02-B02_工作區域 1 複本 2.png'
  },
  {
    title: '參加小組聚會',
    subtitle: 'Join small group meeting',
    bgColor: 'bg-[#21807a]',
    image: '/church/B2/section-03-B02_工作區域 1 複本 3.png'
  }
]

// 聚會注意事項資料
const meetingGuidelines = [
  {
    number: '01',
    content: '進入教會之 B1 / B2汽車停車場及左營國中租用之汽車停車場須憑證——「高雄靈糧堂汽車停車證」才能進場停車，請弟兄姊妹留意並接受交通指揮義工之查驗；若您是尚未申請停車證之新家人，請於主日會後至一樓服務中心登記申請並在下週主日領取。'
  },
  {
    number: '02',
    content: '提醒騎機車來教會參加主日的弟兄姊妹，請將您的機車停放在教會一樓正門廣場、教會右側大中二路機車停車場、或重立路682巷機車棚；請勿將您的機車任意放在文川路74巷道路兩側或週邊透天厝騎樓，影響住戶的進出，請發揮我們的愛心，共同配合！'
  },
  {
    number: '03',
    content: '提醒主日開車進入左營國中停車場的停放時間是早上6:30至下午2:30，並請按交通指揮的引導在指定位置停車（共56個停車格）；請弟兄姊妹不要超過停車時間（下午2:30前要移車）避免造成學校管理上的困擾與不便，敬請大家務必在愛心裡配合！'
  },
  {
    number: '04',
    content: '教會暨本棟大樓係全面禁煙區，提醒弟兄姊妹勿在本棟大樓內或大樓週邊吸煙，請大家務必遵守並在愛心裡配合，謝謝！'
  },
  {
    number: '05',
    content: '0～3歲的孩童請由家長陪同至親子室聚會，為顧及孩童安全，請勿將孩童單獨留在親子室，也請勿將孩童帶至榮耀廳；3～12歲的孩童請帶至一樓慈愛廳參加兒童崇拜。謝謝兄姊在愛心裡的配合。'
  },
  {
    number: '06',
    content: '提醒兄姊進入榮耀廳聚會時，除一般白開水外，勿將咖啡、飲料、茶或食物帶進會堂，避免不小心傾倒，造成清潔上的困難或有異味；會堂外亦不提供飲料、食物置放籃，請在進入會堂前至五樓交誼廳飲用或食用完畢後再進入會堂參加聚會，敬請兄姊配合，讓我們共同愛護上帝的家。'
  }
]

function GroupPanel({ panel }: { panel: typeof groupPanels[0] }) {
  return (
    <div className={`group-panel ${panel.bgColor} aspect-square flex flex-col items-center justify-center text-white relative overflow-hidden`}>
      {panel.image && (
        <Image 
          src={panel.image} 
          alt={panel.title}
          fill
          className="object-cover object-center"
        />
      )}
      {!panel.image && (
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-center mb-2">{panel.title}</h3>
          <p className="text-lg text-center opacity-90">{panel.subtitle}</p>
        </div>
      )}
    </div>
  )
}

function GuidelineItem({ guideline }: { guideline: typeof meetingGuidelines[0] }) {
  return (
    <div className="group-panel-item bg-white rounded-lg p-6 mb-4 shadow-sm">
      <div className="flex flex-col">
        <p className="text-gray-800 leading-relaxed mb-4">{guideline.content}</p>
        <div className="self-end">
          <Image 
            src={`/church/B2/${guideline.number}.png`}
            alt={`Guideline ${guideline.number}`}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default function ChurchGroupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 頁首大圖 */}
        <div className="church-groups-hero-banner w-full h-96 relative">
          <Image 
            src="/church/B2/B2-bn.png" 
            alt="小組聚會" 
            fill 
            className="object-cover object-center" 
          />
        </div>

        {/* 四個內容面板 */}
        <section className="group-panels-section">
          <div className="group-panels-section-container grid grid-cols-1 md:grid-cols-2 gap-12">
            {groupPanels.map((panel, index) => (
              <GroupPanel key={index} panel={panel} />
            ))}
          </div>
        </section>

        {/* 聚會注意事項 */}
        <section className="meeting-guidelines-section bg-[#fe7f4c]">
          <div className="meeting-guidelines-section-container max-w-4xl mx-auto px-4 md:px-0 py-16">
            <div className="mb-12">
              <h2 className="text-center text-2xl font-bold text-white mb-2">聚會注意事項</h2>
              <p className="text-2xl font-bold text-gray-800">Meeting Guidelines</p>
            </div>
            
            <div className="meeting-guidelines-container space-y-4">
              {meetingGuidelines.map((guideline, index) => (
                <GuidelineItem key={index} guideline={guideline} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 