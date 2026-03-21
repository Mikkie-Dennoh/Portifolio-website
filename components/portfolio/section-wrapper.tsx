"use client"

import { useEffect, useState } from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  isActive: boolean
  className?: string
}

export function SectionWrapper({ children, isActive, className = "" }: SectionWrapperProps) {
  const [shouldRender, setShouldRender] = useState(isActive)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isActive) {
      setShouldRender(true)
      // Small delay to trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
    } else {
      setIsAnimating(false)
      // Wait for exit animation to complete
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  if (!shouldRender) return null

  return (
    <div 
      className={`
        h-[calc(100vh-5rem)] overflow-y-auto pt-20 
        transition-all duration-500 ease-out
        ${isAnimating 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-[0.98]'
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}
