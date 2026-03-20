import { Palette, Video, Share2, Bot, Code2, Layers } from "lucide-react"

const skills = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visually stunning designs including logos, branding, posters, and marketing materials that capture attention.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Producing high-quality video content with professional editing, color grading, and motion graphics.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Growing brand presence through strategic content planning, scheduling, and engagement analytics.",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description: "Building intelligent applications using machine learning, AI APIs, and automation solutions.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Developing modern, responsive websites and web applications with React, Next.js, and TypeScript.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with a focus on user experience and accessibility.",
  },
]

export function About() {
  return (
    <div className="py-12 px-4 min-h-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          {"I'm a versatile creative professional passionate about bringing ideas to life through design, technology, and strategic thinking."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
