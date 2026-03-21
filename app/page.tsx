"use client"

import { useState } from "react"
import { Navigation } from "@/components/portfolio/navigation"
import { SectionWrapper } from "@/components/portfolio/section-wrapper"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Blog } from "@/components/portfolio/blog"
import { Resume } from "@/components/portfolio/resume"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"


export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  return (
    <main className="h-screen overflow-hidden bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <SectionWrapper isActive={activeSection === "home"}>
        <Hero onNavigate={handleNavigate} />
        
      </SectionWrapper>

      <SectionWrapper isActive={activeSection === "about"}>
        <About />
        
      </SectionWrapper>

      <SectionWrapper isActive={activeSection === "experience"}>
        <Experience />
        
      </SectionWrapper>

      <SectionWrapper isActive={activeSection === "projects"}>
        <Projects />
        
      </SectionWrapper>

      <SectionWrapper isActive={activeSection === "blog"}>
        <Blog />
        
      </SectionWrapper>

      <SectionWrapper isActive={activeSection === "resume"}>
        <Resume />
        
      </SectionWrapper>

      <SectionWrapper isActive={activeSection === "contact"}>
        <Contact />
        <Footer />
      </SectionWrapper>
    </main>
  )
}
