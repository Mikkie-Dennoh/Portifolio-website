import { FileText, Download, GraduationCap, Award, Languages, Briefcase, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

const resumeData = {
  personalInfo: {
    name: "Dennis Muriithi",
    title: "Full Stack Developer | Graphic Designer | Video Editor | Social Media Manager | AI Engineer",
    phone: "+254 110 643 510",
    email: "dennismuriithi@email.com",
    location: "Kenya",
    github: "github.com/Mikkie-Dennoh",
    linkedin: "linkedin.com/in/dennis-muriithi-032baa3b0",
  },
  summary: "Versatile creative professional passionate about bringing ideas to life through design, technology, and strategic thinking. I build accessible, pixel-perfect digital experiences for the web where creative design meets modern technology.",
  experience: [
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
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University",
      period: "2018 - 2022",
    },
  ],
  certifications: [
    "Google Digital Marketing Certificate",
    "Meta Social Media Marketing",
    "Adobe Certified Professional",
    "AI & Machine Learning Fundamentals",
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Swahili", level: "Native" },
  ],
  skills: {
    design: ["Graphic Design", "UI/UX Design", "Adobe Creative Suite", "Figma", "Brand Strategy"],
    development: ["Web Development", "React", "Next.js", "TypeScript", "Python"],
    media: ["Video Editing", "Motion Graphics", "Content Creation", "Social Media Management"],
    ai: ["AI Engineering", "Machine Learning", "OpenAI API", "LangChain", "TensorFlow"],
  },
}

export function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Resume
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A summary of my qualifications, education, and professional background.
        </p>

        {/* Download Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </a>
        </div>

        {/* Resume Preview Card */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-12">
          {/* Header */}
          <div className="bg-primary/10 p-6 md:p-8 border-b border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {resumeData.personalInfo.name}
            </h3>
            <p className="text-primary font-medium text-sm md:text-base mb-4">
              {resumeData.personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                {resumeData.personalInfo.phone}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {resumeData.personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-primary" />
                {resumeData.personalInfo.github}
              </span>
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-primary" />
                Dennis Muriithi
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="p-6 md:p-8 border-b border-border">
            <h4 className="font-semibold text-lg mb-3 text-foreground">Professional Summary</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="p-6 md:p-8 border-b border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-lg text-foreground">Work Experience</h4>
            </div>
            <div className="space-y-6">
              {resumeData.experience.map((exp) => (
                <div key={exp.title} className="border-l-2 border-primary/30 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h5 className="font-semibold text-foreground">{exp.title}</h5>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="p-6 md:p-8 border-b border-border">
            <h4 className="font-semibold text-lg mb-6 text-foreground">Technical Skills</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h5 className="text-sm font-medium text-primary mb-3">Design</h5>
                <ul className="space-y-1">
                  {resumeData.skills.design.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-primary mb-3">Development</h5>
                <ul className="space-y-1">
                  {resumeData.skills.development.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-primary mb-3">Media</h5>
                <ul className="space-y-1">
                  {resumeData.skills.media.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-primary mb-3">AI & ML</h5>
                <ul className="space-y-1">
                  {resumeData.skills.ai.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education, Certifications, Languages */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Education */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Education</h4>
              </div>
              {resumeData.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-medium text-sm text-foreground">{edu.degree}</p>
                  <p className="text-primary text-xs">{edu.school}</p>
                  <p className="text-muted-foreground text-xs">{edu.period}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Certifications</h4>
              </div>
              <ul className="space-y-2">
                {resumeData.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <FileText className="w-3 h-3 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground text-xs">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Languages className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Languages</h4>
              </div>
              <div className="space-y-2">
                {resumeData.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{lang.name}</span>
                    <span className="text-primary text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
