export function MissionMainContent() {
  return (
    <section className="mission-main-content">
      {/* Left Block */}
      <div className="w-1/2 flex flex-col">
        {/* Text Area - Orange background */}
        <div className="h-full bg-[#fe7f4c] flex items-center justify-center p-6 md:p-8">
          <div className="text-white text-center max-w-sm">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{borderBottom: '1px solid #FFF', paddingBottom: '10px'}}>
              廣傳福音 效法基督
            </h3>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              耶穌進前來，對他們說：「天上地下所有的權柄都賜給我了。
              所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗。
              凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」（馬太福音 28:18-20）
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Block - Book image */}
      <div className="w-1/2">
        <img
          src="/mission/C1/C1-02.png"
          alt="模糊的書本圖片"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
} 