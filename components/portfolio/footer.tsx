"use client"

import Link from "next/link"
import { Github, Linkedin, Facebook, Phone } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/Mikkie-Dennoh", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/dennis-muriithi-032baa3b0", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/mikkie.dennoh.2025", icon: Facebook, label: "Facebook" },
  { href: "tel:+254110643510", icon: Phone, label: "Phone" },
]

export function Footer() {
  return (
    <footer className="py-4 px-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground text-sm">
          {new Date().getFullYear()} Dennis Muriithi
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label={link.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <link.icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
