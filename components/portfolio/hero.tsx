"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const roles = [
  "Full Stack Developer",
  "Web Designer",
  "Graphic Designer",
  "Video Editor",
  "Social Media Manager",
  "AI Engineer",
]

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  return (
    <div className="min-h-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <h1 
              className={`
                text-4xl sm:text-5xl lg:text-6xl font-bold mb-6
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              {"Hi, I'm "}
              <span className="italic text-foreground">Dennis Muriithi</span>
            </h1>

            {/* Animated Roles */}
            <div 
              className={`
                h-8 mb-6 transition-all duration-700 delay-200 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <p className="text-primary font-semibold text-base sm:text-lg">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Description */}
            <p 
              className={`
                text-muted-foreground text-base sm:text-lg mb-8 max-w-xl leading-relaxed
                transition-all duration-700 delay-300 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              I build accessible, pixel-perfect digital experiences for the web. 
              Creative design meets modern technology. 
              {"Let's create something impactful together."}
            </p>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate('projects')}
              className={`
                inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg 
                hover:scale-105 hover:shadow-lg hover:shadow-primary/20
                active:scale-95
                transition-all duration-300 ease-out delay-500 text-base cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              View My Work
            </button>
          </div>

          {/* Right Column - Image */}
          <div 
            className={`
              order-1 lg:order-2 flex justify-center lg:justify-end
              transition-all duration-1000 delay-300 ease-out
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
            `}
          >
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/20 blur-xl animate-pulse" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/60 shadow-2xl shadow-primary/20 group-hover:border-primary transition-colors duration-500">
                <Image
                  src="/images/dennis.jpeg"
                  alt="Dennis Muriithi"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-bounce delay-100" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/20 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
