import Image from 'next/image'

export function MissionSermon() {
  return (
    <section className="mission-sermon py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#21807a] text-white p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                | 主崇信息精華
              </h2>
              <nav className="space-y-4">
                <a href="#" className="block text-white hover:text-orange-300 transition-colors py-2">
                  最新信息
                </a>
                <a href="#" className="block text-white hover:text-orange-300 transition-colors py-2">
                  系列講道
                </a>
                <a href="#" className="block text-white hover:text-orange-300 transition-colors py-2">
                  聖經研讀
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <div className="mb-6">
                <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/mission/C1/C1-01.png"
                    alt="主崇信息精華"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-2 text-center">
                  主崇信息精華 | 大衛：神所揀選的受膏者 |
                </h3>
                <p className="text-gray-600 text-center mb-6">2025.06.15</p>
                
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    本週起至八、九月，我們將透過聖經人物的生命故事，來認識耶穌基督，
                    並經歷祂在我們生命中的轉化大能。
                  </p>
                  
                  <h4 className="text-lg font-bold text-[#21807a] mb-3">
                    青山依舊在，幾度夕陽紅。慣看秋月春
                  </h4>
                  
                  <p className="mb-4">
                    透過回顧聖經人物的生命歷程，我們可以更深入地認識耶穌基督，
                    並明白神在我們生命中的美好計劃。
                  </p>
                  
                  <p className="mb-4">
                    舊約聖經透過預言、禮儀、律法、節期等各種方式，都指向耶穌基督。
                    每一個聖經人物的故事，都在向我們述說神的救恩計劃。
                  </p>
                  
                  <h4 className="text-lg font-bold text-[#21807a] mb-3">
                    青山依舊在，幾度夕陽紅。慣看秋月春
                  </h4>
                  
                  <p className="mb-4">
                    大衛王是神所揀選的受膏者，他的生命充滿了起伏與挑戰，
                    但神始終與他同在，並透過他成就了偉大的救恩計劃。
                  </p>
                  
                  <p>
                    讓我們一同學習大衛的信心與順服，在我們的生命中經歷神的同在與帶領。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 