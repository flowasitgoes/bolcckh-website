export function DepartmentHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <img
        src="/department/01-row-1-hero-background-banner.png"
        alt="部門介紹"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          
        </h1>
      </div>
    </section>
  )
} 