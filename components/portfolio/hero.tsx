"use client"

import Image from "next/image"

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {"Hi, I'm "}
              <span className="italic text-foreground">Dennis Muriithi</span>
            </h1>

            <p className="text-primary font-semibold text-base sm:text-lg mb-6">
              Full Stack Developer | Web Designer | AI Engineer
            </p>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web. 
              Creative design meets modern technology. 
              {"Let's create something impactful together."}
            </p>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-200 text-base cursor-pointer"
            >
              View My Work
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/60 shadow-2xl">
              <Image
                src="/images/dennis.jpeg"
                alt="Dennis Muriithi"
                width={384}
                height={384}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
