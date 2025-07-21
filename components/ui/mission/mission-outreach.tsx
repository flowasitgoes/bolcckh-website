import Image from 'next/image'

export function MissionOutreach() {
  return (
    <section className="mission-outreach py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#21807a] mb-4">
            宣教事工
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我們致力於將福音傳到地極，透過各種宣教事工，讓更多人認識耶穌基督的愛。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 本地宣教 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mission/C1/C1-02.png"
                alt="本地宣教"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#21807a] mb-3">本地宣教</h3>
            <p className="text-gray-600 mb-4">
              在高雄地區開展福音事工，透過關懷、服務、佈道等方式，
              將神的愛帶給身邊的人。
            </p>
            <a href="#" className="text-[#21807a] font-semibold hover:underline">
              了解更多 →
            </a>
          </div>

          {/* 海外宣教 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mission/C1/C1-03.png"
                alt="海外宣教"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#21807a] mb-3">海外宣教</h3>
            <p className="text-gray-600 mb-4">
              支持海外宣教士，參與國際宣教事工，
              將福音傳到世界各地的未得之民。
            </p>
            <a href="#" className="text-[#21807a] font-semibold hover:underline">
              了解更多 →
            </a>
          </div>

          {/* 短宣隊 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mission/C1/C1-04.png"
                alt="短宣隊"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#21807a] mb-3">短宣隊</h3>
            <p className="text-gray-600 mb-4">
              組織短期宣教隊伍，前往各地進行福音佈道、
              醫療服務、教育支援等事工。
            </p>
            <a href="#" className="text-[#21807a] font-semibold hover:underline">
              了解更多 →
            </a>
          </div>

          {/* 宣教教育 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mission/C1/C1-05.png"
                alt="宣教教育"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#21807a] mb-3">宣教教育</h3>
            <p className="text-gray-600 mb-4">
              提供宣教相關的課程和訓練，裝備弟兄姊妹
              成為合神心意的宣教工人。
            </p>
            <a href="#" className="text-[#21807a] font-semibold hover:underline">
              了解更多 →
            </a>
          </div>

          {/* 宣教禱告 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mission/C1/C1-06.png"
                alt="宣教禱告"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#21807a] mb-3">宣教禱告</h3>
            <p className="text-gray-600 mb-4">
              建立宣教禱告網絡，為宣教士、宣教工場、
              未得之民代禱，支持宣教事工。
            </p>
            <a href="#" className="text-[#21807a] font-semibold hover:underline">
              了解更多 →
            </a>
          </div>

          {/* 宣教奉獻 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/mission/C2/C2-bn.png"
                alt="宣教奉獻"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#21807a] mb-3">宣教奉獻</h3>
            <p className="text-gray-600 mb-4">
              支持宣教事工的財務需要，透過奉獻參與
              神國的擴展，讓福音傳遍天下。
            </p>
            <a href="#" className="text-[#21807a] font-semibold hover:underline">
              了解更多 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 