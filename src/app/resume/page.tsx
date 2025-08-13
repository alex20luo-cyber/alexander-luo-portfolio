import { Download, MapPin, Building } from "lucide-react"
import Link from "next/link"

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Indeed",
    location: "Remote",
    period: "Aug 2022 – Present",
    description: "Lead frontend development for job preference features and profile settings serving 100M+ users.",
    achievements: [
      "Built user-facing job preference feature (React, Next.js, TypeScript, Java/Spring Boot, MySQL, Redis, Elasticsearch), increasing job relevance clicks by 17%",
      "Improved profile settings UI with responsive design and ARIA accessibility, boosting mobile engagement by 22%",
      "Developed modular front-end components (React, TypeScript) for job preference forms, enhancing profile completion rates by 15%",
      "Refactored front-end architecture for lazy loading and better component hierarchy, lowering profile page load times by 18%",
      "Integrated user preference data into AI-driven recommendation engine, amplifying qualified job click-through rates by 19%",
      "Designed and deployed RESTful APIs (Java/Spring Boot) for structured preference data (100M+ users), leveraging AWS (ECS, RDS, S3) for scalability and security",
      "Partnered with search, recommendations, and machine learning teams, decreasing irrelevant job matches by 23% and boosting user retention",
      "Mentored junior engineers through code reviews and pair programming"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Seagate",
    location: "Remote",
    period: "Jun 2021 – Jul 2022",
    description: "Built data visualization dashboards and analytics tools for hardware reliability teams.",
    achievements: [
      "Launched Reliability Metrics Dashboard (React, TypeScript, Angular, Node.js), cutting manual analysis time by 40%",
      "Delivered responsive visualizations (Chart.js, D3.js) for real-time hardware test data, boosting diagnostic clarity and lowering manual data reviews by 30%",
      "Maintained high-performance GraphQL APIs (Node.js) for reliability data access, handling over 20,000 weekly queries with sub-second response times",
      "Created comprehensive front-end tests (Jest, React Testing Library) ensuring accurate input handling and validation",
      "Strengthened alignment between engineering workflows and reliability insights, and guided two junior developers on scalable API design and deployment"
    ]
  },
  {
    title: "Software Engineer",
    company: "Seagate",
    location: "Remote",
    period: "May 2018 – Jun 2021",
    description: "Developed self-service customer support portal with real-time chat functionality.",
    achievements: [
      "Introduced self-service helpdesk portal (React, JavaScript, TypeScript, Next.js, MongoDB), dropping support call volume by 35%",
      "Structured dynamic ticket submission flows (React, TypeScript) with validation, conditional logic, and multi-step uploads, cutting average submission time by 30%",
      "Assembled real-time chat experience (React, Socket.IO) within helpdesk platform, providing immediate access to live support"
    ]
  }
]

const education = [
  {
    degree: "Master's Degree in Engineering/Industrial Management",
    school: "University of Colorado Boulder",
    location: "Boulder, CO",
    period: "Jan 2020 – May 2023",
    description: "Advanced studies in engineering management and industrial processes."
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "University of Colorado Boulder",
    location: "Boulder, CO",
    period: "2014 – 2018",
    description: "Focused on software engineering, algorithms, and computer systems."
  }
]

const skills = {
  "Languages": ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Python", "Java"],
  "Frameworks": ["React", "Angular", "Vue.js", "Next.js", "Tailwind CSS", "MUI", "SCSS", "LESS", "Django", "Spring Boot", "React Native"],
  "APIs & Databases": ["REST/GraphQL", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Elasticsearch"],
  "Testing": ["Jest", "Cypress", "Playwright", "Mocha", "React Testing Library"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "ECS", "RDS", "S3", "Github Actions", "Jenkins", "Circle CI"],
  "Tools": ["Git", "Agile", "Jira", "Kanban", "Confluence"]
}

export default function ResumePage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-6">
            My professional experience and skills in UX engineering and frontend development.
          </p>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </header>

        <div className="space-y-12">
          {/* Contact Info */}
          <section className="text-center p-6 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Alexander Luo</h2>
            <p className="text-muted-foreground mb-4">Senior Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>alex20luo@gmail.com</span>
              <span>•</span>
              <span>linkedin.com/in/alexanderluo</span>
              <span>•</span>
              <span>github.com/Alex-Luo</span>
              <span>•</span>
              <span>Louisville, CO</span>
            </div>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Senior Software Engineer with 7 years of experience designing and delivering scalable, 
              user-centric web applications. Specialized in building end-to-end solutions using React, 
              TypeScript, Java (Spring Boot), Node.js, and modern cloud infrastructure (AWS, ECS, RDS). 
              Proven track record of creating responsive, accessible interfaces and architecting robust 
              backend systems that improve user engagement, reduce load times, and enhance product 
              performance at scale. Experience serving 100M+ users at Indeed with measurable impact 
              on key business metrics.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{job.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{job.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400" style={{ marginTop: '-3.5px' }}>•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{edu.school}</span>
                    <span className="text-muted-foreground">•</span>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-accent px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 