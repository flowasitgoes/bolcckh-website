import Image from 'next/image'

export function AboutSchedule() {
  return (
    <section className="flex flex-col md:flex-row w-full">
      <div className="flex-1 min-h-[220px] md:min-h-[320px] relative">
        <Image src="/about/07-left-normal-backgroundImage.png" alt="聚會時間" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-2xl md:text-3xl font-bold font-handwriting">聚會時間</div>
        </div>
      </div>
      <div className="flex-1 bg-[#ff8552] text-white flex flex-col justify-center p-8 md:p-20" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="text-lg md:text-xl font-bold mb-4">國語聚會</div>
        <div className="mb-2">每週日 8:30am、10:30am（崇拜中心主禮堂）1F/2F同步</div>
        <div className="text-lg md:text-xl font-bold mt-6 mb-4">台語聚會</div>
        <div className="mb-2">每週日 10:00am（4F主堂）</div>
        <div className="text-lg md:text-xl font-bold mt-6 mb-4">學生聚會</div>
        <div className="mb-2">每週日 3:00pm（7F學生活動）</div>
        <div className="text-lg md:text-xl font-bold mt-6 mb-4">兒童聚會</div>
        <div className="mb-2">每週日 8:30am、10:30am（1F兒童教室）</div>
        <div className="text-lg md:text-xl font-bold mt-6 mb-4">印尼團契</div>
        <div className="mb-2">每週日 12:30pm（6F615教室）</div>
      </div>
    </section>
  )
} 