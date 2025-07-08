import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function FindUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Find Us</h2>
          <p className="text-teal-700 text-xl font-bold tracking-widest">找到我們</p>
        </div>

        <div className="w-full max-w-[1280px] mx-auto">
          <div className="relative aspect-video bg-[#6B7574] rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jp4dbtAlbnA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl w-full h-full"
            ></iframe>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-[260px] h-14 text-lg font-bold rounded-none">
              更多交通資訊　→
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
