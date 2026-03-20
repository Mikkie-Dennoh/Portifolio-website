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
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Dennis Muriithi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
