"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ExternalLink, Github, ArrowLeft, Code, Palette, Video, Share2, Bot, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projectCategories = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: "Full-stack web applications and websites",
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and Stripe payment integration. Built with modern technologies for optimal performance.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
      {
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates, team features, and progress tracking for enhanced productivity.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
      {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website showcasing skills and projects with smooth animations and clean design.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
      {
        title: "Blog Platform",
        description: "Full-featured blogging platform with CMS, SEO optimization, and social sharing capabilities.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
        tags: ["Next.js", "MDX", "Vercel"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    description: "Brand identity, logos, and visual designs",
    projects: [
      {
        title: "Brand Identity Package",
        description: "Complete brand identity including logo, color palette, typography, and brand guidelines for a tech startup.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
        tags: ["Adobe Illustrator", "Branding", "Logo Design"],
        github: "#",
        live: "#",
      },
      {
        title: "Social Media Graphics",
        description: "Eye-catching social media templates and posts for various platforms including Instagram, Facebook, and LinkedIn.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        tags: ["Canva", "Photoshop", "Social Media"],
        github: "#",
        live: "#",
      },
      {
        title: "Marketing Materials",
        description: "Professional flyers, brochures, and promotional materials for events and business marketing campaigns.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
        tags: ["Adobe InDesign", "Print Design", "Marketing"],
        github: "#",
        live: "#",
      },
      {
        title: "UI/UX Design",
        description: "User interface designs and prototypes for mobile apps and web applications with focus on user experience.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        tags: ["Figma", "Adobe XD", "Prototyping"],
        github: "#",
        live: "#",
      },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    icon: Video,
    color: "from-red-500 to-orange-500",
    description: "Professional video production and editing",
    projects: [
      {
        title: "Corporate Promotional Video",
        description: "High-quality promotional video showcasing company services, culture, and achievements for marketing purposes.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
        tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
        github: "#",
        live: "#",
      },
      {
        title: "YouTube Content Series",
        description: "Engaging YouTube video series with professional editing, transitions, and optimized thumbnails.",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
        tags: ["DaVinci Resolve", "YouTube", "Content Creation"],
        github: "#",
        live: "#",
      },
      {
        title: "Event Highlight Reel",
        description: "Dynamic highlight videos capturing key moments from corporate events, conferences, and celebrations.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
        tags: ["Final Cut Pro", "Color Grading", "Audio Mixing"],
        github: "#",
        live: "#",
      },
      {
        title: "Product Demo Videos",
        description: "Clear and engaging product demonstration videos that showcase features and benefits effectively.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
        tags: ["Screen Recording", "Voice Over", "Animation"],
        github: "#",
        live: "#",
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    icon: Share2,
    color: "from-green-500 to-teal-500",
    description: "Social media strategy and content creation",
    projects: [
      {
        title: "Instagram Growth Campaign",
        description: "Comprehensive Instagram strategy that increased followers by 300% through engaging content and hashtag optimization.",
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
        tags: ["Instagram", "Analytics", "Growth Strategy"],
        github: "#",
        live: "#",
      },
      {
        title: "LinkedIn B2B Marketing",
        description: "Professional LinkedIn marketing campaign for B2B lead generation with content strategy and engagement tactics.",
        image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop",
        tags: ["LinkedIn", "B2B", "Lead Generation"],
        github: "#",
        live: "#",
      },
      {
        title: "Content Calendar System",
        description: "Organized content calendar and scheduling system for consistent social media presence across multiple platforms.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
        tags: ["Scheduling", "Planning", "Multi-platform"],
        github: "#",
        live: "#",
      },
      {
        title: "Community Engagement",
        description: "Active community management strategy that boosted engagement rates and built loyal brand followers.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        tags: ["Community", "Engagement", "Brand Building"],
        github: "#",
        live: "#",
      },
    ],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    icon: Bot,
    color: "from-indigo-500 to-purple-500",
    description: "AI-powered applications and automation",
    projects: [
      {
        title: "AI Content Writer",
        description: "An AI-powered tool that helps create engaging content for various platforms using advanced language models.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        tags: ["OpenAI", "Next.js", "NLP"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
      {
        title: "Chatbot Assistant",
        description: "Intelligent customer service chatbot with natural language understanding and automated responses.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
        tags: ["LangChain", "Python", "Machine Learning"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
      {
        title: "Image Generation Tool",
        description: "AI-powered image generation application for creating custom graphics and artwork from text prompts.",
        image: "https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&h=400&fit=crop",
        tags: ["Stable Diffusion", "Python", "API"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
      {
        title: "Data Analysis Automation",
        description: "Automated data analysis pipeline using AI for insights extraction and visualization generation.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        tags: ["Python", "TensorFlow", "Data Science"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
    ],
  },
  {
    id: "freelance",
    title: "Freelance Projects",
    icon: Globe,
    color: "from-amber-500 to-yellow-500",
    description: "Various client projects and collaborations",
    projects: [
      {
        title: "Restaurant Website",
        description: "Modern restaurant website with online menu, reservation system, and delivery integration for local business.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        tags: ["WordPress", "WooCommerce", "SEO"],
        github: "#",
        live: "#",
      },
      {
        title: "Real Estate Platform",
        description: "Property listing platform with search filters, virtual tours, and agent contact features.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        tags: ["React", "Node.js", "Google Maps API"],
        github: "#",
        live: "#",
      },
      {
        title: "Fitness App Design",
        description: "Complete UI/UX design for a fitness tracking mobile application with workout plans and progress tracking.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        tags: ["Figma", "Mobile Design", "Health Tech"],
        github: "#",
        live: "#",
      },
      {
        title: "Event Management System",
        description: "Comprehensive event management platform for ticket sales, attendee management, and event analytics.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        github: "https://github.com/Mikkie-Dennoh",
        live: "#",
      },
    ],
  },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<typeof projectCategories[0] | null>(null)

  return (
    <div className="py-12 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore my work across different categories. Click on any category to see detailed projects.
        </p>

        {/* Project Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 text-left overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {category.projects.length} projects
                    </span>
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View all
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/Mikkie-Dennoh" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-24 pb-4 px-4 overflow-y-auto"
          onClick={() => setSelectedCategory(null)}
        >
          <div 
            className="bg-background rounded-2xl max-w-5xl w-full max-h-[calc(100vh-7rem)] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedCategory.color} p-6 text-white`}>
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <selectedCategory.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedCategory.title}</h3>
                  <p className="text-white/80">{selectedCategory.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCategory.projects.map((project) => (
                  <div
                    key={project.title}
                    className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.github !== "#" && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.live !== "#" && (
                          <Button size="sm" asChild>
                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </Link>
                          </Button>
                        )}
                      </div>
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
