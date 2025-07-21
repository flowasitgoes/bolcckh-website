import Image from 'next/image'

export function MissionImageGrid() {
  const testimonies = [
    {
      image: "/mission/C1/C1-03.png",
      alt: "敬拜的人"
    },
    {
      image: "/mission/C1/C1-04.png",
      alt: "禱告的手"
    },
    {
      image: "/mission/C1/C1-05.png",
      alt: "禱告的女孩"
    },
    {
      image: "/mission/C1/C1-06.png",
      alt: "禱告珠"
    }
  ]

  return (
    <section className="mission-image-grid">
      <div className="flex w-full">
        {testimonies.map((testimony, index) => (
          <div key={index} className="w-1/4 relative">
            <Image
              src={testimony.image}
              alt={testimony.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
} 