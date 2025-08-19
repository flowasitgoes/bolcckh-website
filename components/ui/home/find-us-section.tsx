import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface FindUsSectionProps {
  compact?: boolean
  showButton?: boolean
  className?: string
}

export function FindUsSection({ compact = false, showButton = true, className = '' }: FindUsSectionProps) {
  return (
    <section className={`${compact ? 'py-8' : 'py-16 lg:py-24'} bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#444] mb-2">Find Us</h2>
          <p className="text-teal-700 text-xl font-bold tracking-widest">找到我們</p>
        </div>

        <div className="w-full max-w-[1280px] mx-auto">
          <div className="relative aspect-video bg-[#6B7574] rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Bt53iUKUzZc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl w-full h-full"
            ></iframe>
          </div>

          {showButton && (
          <div className="text-center mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://bolcckh.vercel.app/about-contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 bg-orange-theme hover:bg-orange-600 text-white w-[260px] h-14 text-lg font-bold rounded-none"
            >
              更多交通資訊　→
            </a>
            <a 
              href="/home/bus-route.jpg" 
              download
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 bg-orange-theme hover:bg-orange-600 text-white w-[260px] h-14 text-lg font-bold rounded-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              下載地圖
            </a>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
