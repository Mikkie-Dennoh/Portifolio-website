"use client"

import { useState } from "react"
import { Palette, Video, Share2, Bot, Code2, Layers, X, ExternalLink } from "lucide-react"

interface PortfolioWork {
  title: string
  description: string
  image: string
  link?: string
}

interface Skill {
  icon: typeof Palette
  title: string
  description: string
  works: PortfolioWork[]
}

const skills: Skill[] = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visually stunning designs including logos, branding, posters, and marketing materials that capture attention.",
    works: [
      {
        title: "Brand Identity Design",
        description: "Complete brand identity package including logo, color palette, and brand guidelines for startups and businesses.",
        image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
      },
      {
        title: "Marketing Posters",
        description: "Eye-catching promotional posters for events, products, and campaigns with modern typography.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      },
      {
        title: "Social Media Graphics",
        description: "Engaging social media post designs, stories, and cover images optimized for each platform.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      },
      {
        title: "Business Card Design",
        description: "Professional and creative business card designs that leave lasting impressions.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Producing high-quality video content with professional editing, color grading, and motion graphics.",
    works: [
      {
        title: "YouTube Content",
        description: "Full video production including editing, color grading, transitions, and thumbnail design for YouTubers.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      },
      {
        title: "Promotional Videos",
        description: "Compelling promotional videos for businesses with motion graphics and professional voiceover integration.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
      },
      {
        title: "Social Media Reels",
        description: "Short-form video content optimized for TikTok, Instagram Reels, and YouTube Shorts.",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      },
      {
        title: "Event Highlights",
        description: "Professional event coverage and highlight reels for weddings, conferences, and corporate events.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Growing brand presence through strategic content planning, scheduling, and engagement analytics.",
    works: [
      {
        title: "Content Strategy",
        description: "Comprehensive social media strategies including content calendars, hashtag research, and audience analysis.",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
      },
      {
        title: "Community Management",
        description: "Active community engagement, responding to comments, and building brand loyalty through authentic interactions.",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
      },
      {
        title: "Analytics & Reporting",
        description: "Detailed performance reports with insights on engagement, reach, and growth metrics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      },
      {
        title: "Influencer Campaigns",
        description: "Coordinating influencer partnerships and managing sponsored content campaigns.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description: "Building intelligent applications using machine learning, AI APIs, and automation solutions.",
    works: [
      {
        title: "AI Chatbots",
        description: "Custom AI-powered chatbots for customer service, lead generation, and user engagement.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      },
      {
        title: "Machine Learning Models",
        description: "Training and deploying ML models for prediction, classification, and data analysis.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      },
      {
        title: "AI Content Generation",
        description: "Implementing AI tools for automated content creation, image generation, and copywriting.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      },
      {
        title: "Process Automation",
        description: "Building intelligent automation workflows using AI to streamline business operations.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Developing modern, responsive websites and web applications with React, Next.js, and TypeScript.",
    works: [
      {
        title: "E-commerce Websites",
        description: "Full-featured online stores with payment integration, inventory management, and user accounts.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      },
      {
        title: "Portfolio Websites",
        description: "Custom portfolio sites for creatives, professionals, and businesses to showcase their work.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      },
      {
        title: "Web Applications",
        description: "Complex web apps with user authentication, databases, and real-time features.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
      },
      {
        title: "Landing Pages",
        description: "High-converting landing pages optimized for lead generation and product launches.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with a focus on user experience and accessibility.",
    works: [
      {
        title: "Mobile App Design",
        description: "User-centered mobile app interfaces for iOS and Android with intuitive navigation.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      },
      {
        title: "Dashboard Design",
        description: "Data-rich dashboard interfaces for SaaS products with clear data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Interactive prototypes and wireframes to test user flows before development.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
      },
      {
        title: "Design Systems",
        description: "Comprehensive design systems with reusable components and style guidelines.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      },
    ],
  },
]

export function About() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  return (
    <div className="py-12 px-4 min-h-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
          {"I'm a versatile creative professional passionate about bringing ideas to life through design, technology, and strategic thinking."}
        </p>
        <p className="text-primary text-center text-sm mb-12">
          Click on any skill to view my portfolio works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => setSelectedSkill(skill)}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View {skill.works.length} works</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Modal */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-card border border-border rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <selectedSkill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedSkill.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedSkill.works.length} portfolio works</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedSkill.works.map((work, index) => (
                  <div
                    key={index}
                    className="group rounded-xl overflow-hidden bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {work.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {work.description}
                      </p>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-primary text-sm font-medium hover:underline"
                        >
                          View Project <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
