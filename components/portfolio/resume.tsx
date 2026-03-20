import { FileText, Download, GraduationCap, Award, Languages, Briefcase } from "lucide-react"

const resumeData = {
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
        <div className="flex justify-center mb-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Education</h3>
            </div>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-medium text-foreground">{edu.degree}</p>
                  <p className="text-primary text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-xs">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {resumeData.certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Languages</h3>
            </div>
            <div className="space-y-4">
              {resumeData.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-primary text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Core Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Graphic Design",
              "Video Editing",
              "Social Media Management",
              "AI Engineering",
              "Web Development",
              "UI/UX Design",
              "Content Creation",
              "Brand Strategy",
              "Adobe Creative Suite",
              "Python",
              "React",
              "Next.js",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
