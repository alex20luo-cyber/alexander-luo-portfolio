import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Clock, Zap } from "lucide-react"

const projects = [
  {
    slug: "job-preferences",
    title: "Job Preference Feature",
    role: "Senior Software Engineer",
    timeline: "Aug 2022 – Present",
    tags: ["Enterprise", "100M+ Users", "AI/ML Integration", "Full Stack"],
    stack: ["React", "TypeScript", "Java/Spring Boot", "MySQL", "Redis", "Elasticsearch"],
    metric: "+17% relevance clicks",
    summary: "Built end-to-end job preference system serving 100M+ users, integrating with AI recommendation engine to improve job match quality.",
    icon: TrendingUp
  },
  {
    slug: "profile-settings",
    title: "Profile Settings UI Redesign",
    role: "Senior Software Engineer",
    timeline: "2022",
    tags: ["Mobile-First", "Performance", "Accessibility"],
    stack: ["React", "TypeScript", "ARIA", "Responsive Design"],
    metric: "+22% mobile engagement",
    summary: "Redesigned profile settings with responsive design and ARIA accessibility, significantly improving mobile user experience.",
    icon: Users
  },
  {
    slug: "reliability-dashboard",
    title: "Reliability Metrics Dashboard",
    role: "Senior Software Engineer",
    timeline: "Jun 2021 – Jul 2022",
    tags: ["Data Visualization", "Real-time", "Analytics"],
    stack: ["React", "TypeScript", "Chart.js", "D3.js", "GraphQL", "Node.js"],
    metric: "-40% manual analysis time",
    summary: "Built comprehensive dashboard for hardware reliability teams with real-time data visualization and high-performance APIs.",
    icon: Zap
  },
  {
    slug: "helpdesk-portal",
    title: "Self-Service Helpdesk Portal",
    role: "Software Engineer",
    timeline: "May 2018 – Jun 2021",
    tags: ["Self-Service", "Real-time Chat", "Multi-step Forms"],
    stack: ["React", "TypeScript", "Next.js", "MongoDB", "Socket.IO"],
    metric: "-35% support calls",
    summary: "Developed comprehensive self-service portal with real-time chat functionality and dynamic form flows.",
    icon: Clock
  }
]

export default function WorkPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Work</h1>
          <p className="text-xl text-muted-foreground">
            A collection of projects showcasing my UX engineering and frontend development work.
          </p>
        </header>

        <div className="space-y-12">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article key={project.slug} className="group">
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="p-8 rounded-lg border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold group-hover:text-foreground/80 transition-colors">
                            {project.title}
                          </h2>
                          <p className="text-muted-foreground">{project.role}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>

                    <p className="text-lg mb-6">{project.summary}</p>

                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm text-muted-foreground">{project.timeline}</span>
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {project.metric}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-accent px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
} 