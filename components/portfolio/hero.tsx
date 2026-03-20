"use client"

import Image from "next/image"
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
]

const roles = [
  "Full Stack Developer",
  "Web Designer",
  "Graphic Designer",
  "Video Editor",
  "Social Media Manager",
  "AI Engineer",
]

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'instant'
      })
    }
    setMobileMenuOpen(false)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-xl md:text-2xl font-bold text-foreground"
            >
              Dennis<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      index === 0 ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
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
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`block text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                        index === 0 ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column - Text */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {"Hi, I'm "}
                <span className="italic text-foreground">Dennis Muriithi</span>
              </h1>

              {/* Roles */}
              <p className="text-primary font-semibold text-base sm:text-lg mb-6 leading-relaxed">
                {roles.join(" • ")}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the web. 
                Creative design meets modern technology. 
                {"Let's create something impactful together."}
              </p>

              {/* CTA Button */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base cursor-pointer"
              >
                View My Work
              </a>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/60 shadow-2xl shadow-primary/20">
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
      </div>
    </section>
  )
}
