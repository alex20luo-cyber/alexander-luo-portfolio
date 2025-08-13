import Link from "next/link"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Alexander Luo
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Senior Software Engineer with 7 years of experience designing and delivering 
          scalable, user-centric web applications serving 100M+ users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">UX Design</h3>
            <p className="text-muted-foreground">
              User-centered design with focus on accessibility, usability, and 
              creating intuitive user experiences.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Full Stack Development</h3>
            <p className="text-muted-foreground">
              Building end-to-end solutions with React, TypeScript, Java/Spring Boot, 
              and modern cloud infrastructure (AWS, ECS, RDS).
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Scale</h3>
            <p className="text-muted-foreground">
              Architecting robust systems that improve user engagement, reduce 
              load times, and enhance product performance at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border hover:border-foreground/20 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Job Preference Feature</h3>
            <p className="text-muted-foreground mb-4">
              Built end-to-end job preference system serving 100M+ users, integrating 
              with AI recommendation engine to improve job match quality.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-accent px-2 py-1 rounded">React</span>
              <span className="text-xs bg-accent px-2 py-1 rounded">Java/Spring Boot</span>
              <span className="text-xs bg-accent px-2 py-1 rounded">AWS</span>
            </div>
          </div>
          <div className="p-6 rounded-lg border hover:border-foreground/20 transition-colors">
            <h3 className="text-lg font-semibold mb-2">Profile Settings UI Redesign</h3>
            <p className="text-muted-foreground mb-4">
              Redesigned profile settings with responsive design and ARIA accessibility, 
              significantly improving mobile user experience and engagement.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-accent px-2 py-1 rounded">React</span>
              <span className="text-xs bg-accent px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-accent px-2 py-1 rounded">ARIA</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
