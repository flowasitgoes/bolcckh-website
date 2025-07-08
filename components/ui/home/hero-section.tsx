export function HeroSection() {
  return (
    <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/Home_bgBackground.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Overlay Image */}
      <div className="relative z-[2] container mx-auto px-4 h-full flex items-center justify-center">
        <img 
          src="/home/Home-02.png" 
          alt="Home overlay" 
          className="max-w-full max-h-full object-contain w-80 lg:w-[480px] h-auto"
        />
      </div>
    </section>
  )
}
