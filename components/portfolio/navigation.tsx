"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
]

interface NavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-xl md:text-2xl font-bold text-foreground"
          >
            Dennis<span className="text-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    activeSection === link.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`block text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      activeSection === link.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
