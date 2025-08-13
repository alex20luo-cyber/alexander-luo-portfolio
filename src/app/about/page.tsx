import { Code, Palette, Zap, Users, Globe, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: ["React", "TypeScript", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "MUI", "SCSS", "LESS"]
  },
  {
    category: "Backend & APIs",
    icon: Globe,
    skills: ["Java/Spring Boot", "Node.js", "REST/GraphQL", "MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Zap,
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "ECS", "RDS", "S3"]
  },
  {
    category: "Testing & Quality",
    icon: Smartphone,
    skills: ["Jest", "Cypress", "Playwright", "Mocha", "React Testing Library"]
  },
  {
    category: "Tools & Methodologies",
    icon: Users,
    skills: ["Git", "CI/CD", "Agile", "Jira", "Kanban", "Confluence"]
  },
  {
    category: "Mobile & Accessibility",
    icon: Palette,
    skills: ["React Native", "iOS", "Android", "ARIA", "WCAG", "Responsive Design"]
  }
]

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            UX Engineer passionate about creating accessible, performant, and user-centered digital experiences.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a Senior Software Engineer with 7 years of experience designing and delivering scalable, 
                user-centric web applications. My journey has taken me from full-stack development to 
                specializing in frontend engineering and UX, where I bridge the gap between design and 
                technical implementation.
              </p>
              <p>
                At Indeed, I work on enterprise-level applications serving 100M+ users, focusing on 
                building accessible, performant interfaces that help job seekers find better opportunities. 
                I specialize in React, TypeScript, and modern cloud infrastructure.
              </p>
              <p>
                My approach combines strong technical skills with deep empathy for users. I believe that 
                the best products emerge when design and engineering work together seamlessly, with each 
                discipline informing and enhancing the other.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">What I Value</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Accessibility First</h3>
                <p className="text-muted-foreground text-sm">
                  I believe digital products should work for everyone, regardless of ability. 
                  Accessibility isn&apos;t an afterthought—it&apos;s fundamental to good design.
                </p>
              </div>
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Performance Matters</h3>
                <p className="text-muted-foreground text-sm">
                  Fast, responsive experiences aren&apos;t just nice to have—they&apos;re essential for 
                  user satisfaction and business success.
                </p>
              </div>
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Data-Driven Decisions</h3>
                <p className="text-muted-foreground text-sm">
                  I use both qualitative and quantitative data to inform design and development 
                  decisions, ensuring we build what users actually need.
                </p>
              </div>
              <div className="p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">
                  The web is constantly evolving, and so am I. I stay current with the latest 
                  technologies and best practices to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => {
              const Icon = skillGroup.icon
              return (
                <div key={skillGroup.category} className="p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
} 