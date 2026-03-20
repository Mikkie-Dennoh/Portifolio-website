import Link from "next/link"
import { Phone, Github, Linkedin, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  { href: "tel:+254110643510", icon: Phone, label: "+254 110 643 510", name: "Phone" },
  { href: "https://wa.me/254110643510?text=Hello%20Dennis,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.", icon: MessageCircle, label: "+254 110 643 510", name: "WhatsApp" },
  { href: "https://github.com/Mikkie-Dennoh", icon: Github, label: "@Mikkie-Dennoh", name: "GitHub" },
  { href: "https://www.linkedin.com/in/dennis-muriithi-032baa3b0", icon: Linkedin, label: "Dennis Muriithi", name: "LinkedIn" },
  { href: "https://www.facebook.com/mikkie.dennoh.2025", icon: Facebook, label: "Mikkie Dennoh", name: "Facebook" },
]

export function Contact() {
  return (
    <div className="py-12 px-4 min-h-full flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {"Let's Work Together"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          {"Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {contactLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
            >
              <link.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="font-medium text-sm">{link.name}</p>
              <p className="text-muted-foreground text-xs mt-1 truncate">{link.label}</p>
            </Link>
          ))}
        </div>

        <Button size="lg" asChild className="px-8">
          <Link href="tel:+254110643510">
            <Phone className="w-5 h-5 mr-2" />
            Call Me Now
          </Link>
        </Button>
      </div>
    </div>
  )
}
