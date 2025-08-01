import Image from 'next/image'

export function MissionVideo() {
  return (
    <section className="mission-video py-12 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/3ry61kI3G7M?list=RD3ry61kI3G7M&start_radio=1"
            title="生根建造 2025 BOLCCKH"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Video info below the video */}
        {/* <div className="text-center mt-6">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#444] mb-2">
            生根建造 2025 BOLCCKH
          </h3>
          <div className="space-y-1 text-sm md:text-base text-gray-600">
            <p>[第一堂]</p>
            <p>超自然 3/16 AM08:30</p>
            <p>Supernatural grace rain</p>
            <p className="font-semibold">周聖光牧師</p>
          </div>
        </div> */}
      </div>
    </section>
  )
} 