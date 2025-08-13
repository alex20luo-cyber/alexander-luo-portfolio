import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © 2025 Alexander Luo. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="mailto:alexander.luo@gmail.com"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </Link>
          <Link
            href="https://linkedin.com/in/alexanderluo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/Alex-Luo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
} 