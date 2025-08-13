import { Mail, Linkedin, Github, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together.
          </p>
        </header>

        <div className="space-y-8">
          <div className="text-center p-8 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to discuss potential opportunities, 
              or just want to say hello, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:alex20luo@gmail.com"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </Link>
              <Link
                href="https://calendly.com/alexander-luo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The best way to reach me for detailed discussions about projects or opportunities.
              </p>
              <Link
                href="mailto:alex20luo@gmail.com"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                alex20luo@gmail.com
              </Link>
            </div>

            <div className="p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">LinkedIn</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect with me professionally and stay updated with my latest work and insights.
              </p>
              <Link
                href="https://linkedin.com/in/alexanderluo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                linkedin.com/in/alexanderluo
              </Link>
            </div>

            <div className="p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">GitHub</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Check out my open source contributions and side projects.
              </p>
              <Link
                href="https://github.com/Alex-Luo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                github.com/Alex-Luo
              </Link>
            </div>

            <div className="p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Calendar</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Schedule a video call to discuss projects, opportunities, or just to chat.
              </p>
              <Link
                href="https://calendly.com/alexander-luo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                calendly.com/alexander-luo
              </Link>
            </div>
          </div>

          <div className="text-center p-8 rounded-lg border">
            <h2 className="text-xl font-bold mb-4">What I'm Looking For</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">Full-time Opportunities</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• UX Engineer roles</li>
                  <li>• Frontend-focused positions</li>
                  <li>• Companies with strong design culture</li>
                  <li>• Remote or hybrid work arrangements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Freelance & Consulting</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• UX design and development</li>
                  <li>• Accessibility audits</li>
                  <li>• Performance optimization</li>
                  <li>• Design system development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 