import Image from 'next/image'

export function MissionHero() {
  return (
    <section className="mission-hero relative h-96 md:h-[500px] lg:h-[600px] flex">
      {/* Left Side - Person reading on pier */}
      <div className="w-1/2 relative">
        <Image
          src="/mission/C1/C1-01.png"
          alt="人在碼頭看書"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Right Side - Orange background with text */}
      <div className="w-1/2 bg-[#fe7f4c] flex items-center justify-center p-8 md:p-12">
        <div className="text-white text-center max-w-md">
          
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            建造榮耀的教會
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" style={{borderBottom: '1px solid #FFF', paddingBottom: '10px'}}  >
            迎接神國的降臨
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            我們要在地上，建造一間合上帝心意的教會，要讓他的國降臨在這個地上。
          </p>
        </div>
      </div>
    </section>
  )
} 