import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Graphic Designer",
    company: "Freelance",
    period: "2020 - Present",
    description: "Creating stunning visual designs including logos, branding materials, social media graphics, and marketing collateral for diverse clients.",
    skills: ["Adobe Photoshop", "Illustrator", "Canva", "Figma"],
  },
  {
    title: "Video Editor",
    company: "Freelance",
    period: "2021 - Present",
    description: "Producing engaging video content for YouTube, social media, and corporate clients. Expertise in color grading, motion graphics, and storytelling.",
    skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"],
  },
  {
    title: "Social Media Manager",
    company: "Freelance",
    period: "2021 - Present",
    description: "Managing social media accounts, creating content strategies, scheduling posts, and analyzing engagement metrics to grow brand presence.",
    skills: ["Content Strategy", "Analytics", "Meta Business", "Hootsuite"],
  },
  {
    title: "AI Engineer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing AI-powered applications, integrating machine learning models, and building intelligent automation solutions for businesses.",
    skills: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          My professional journey and the skills I bring to every project.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 hidden md:block" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                        <p className="text-muted-foreground text-xs">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
