interface SectionWrapperProps {
  children: React.ReactNode
  isActive: boolean
  className?: string
}

export function SectionWrapper({ children, isActive, className = "" }: SectionWrapperProps) {
  if (!isActive) return null

  return (
    <div className={`h-[calc(100vh-5rem)] overflow-y-auto pt-20 ${className}`}>
      {children}
    </div>
  )
}
