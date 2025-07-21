import Link from 'next/link'

export function MissionTestimony() {
  return (
    <section className="mission-testimony py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#21807a] text-white p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                | 神的作為何等美好
              </h2>
              <nav className="space-y-4">
                <Link 
                  href="/mission/testimony/experience-god"
                  className="block text-white hover:text-orange-300 transition-colors py-2"
                >
                  經歷上帝生命歸主
                </Link>
                <Link 
                  href="/mission/testimony/prayer-answered"
                  className="block text-white hover:text-orange-300 transition-colors py-2"
                >
                  禱告蒙應允
                </Link>
                <Link 
                  href="/mission/testimony/discipleship"
                  className="block text-white hover:text-orange-300 transition-colors py-2"
                >
                  門訓見證
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <nav className="text-sm text-gray-600 mb-4">
                <span>首頁</span>
                <span className="mx-2">{'>'}</span>
                <span className="text-[#21807a]">生命見證</span>
              </nav>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#21807a] mb-4">
                生命見證
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                在這裡，我們分享弟兄姊妹們真實的生命見證，見證神在我們生命中的奇妙作為。
                每一個見證都是神恩典的彰顯，讓我們一同經歷神的愛與大能。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#21807a] mb-3">經歷上帝生命歸主</h4>
                  <p className="text-gray-600 text-sm">
                    分享弟兄姊妹如何經歷上帝，生命得到轉變歸向主的見證。
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#21807a] mb-3">禱告蒙應允</h4>
                  <p className="text-gray-600 text-sm">
                    見證神如何垂聽禱告，在困難中賜下恩典與幫助。
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-[#21807a] mb-3">門訓見證</h4>
                  <p className="text-gray-600 text-sm">
                    分享在門徒訓練過程中的成長與突破，見證神話語的能力。
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