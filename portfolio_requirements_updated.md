# Portfolio Website Requirements – Tailored to Your Experience

A step-by-step guide to build a live portfolio website that clearly shows your UX engineering + front-end work, based on the projects in your resume.

---

## 1) Goals

- Show **end-to-end UX engineering** across real shipped projects you’ve done.
- Blend **design + engineering** at a 50/50 balance (important for this role).
- Highlight **accessibility**, **performance**, and **design system** work.
- Make it **fast for a hiring manager** to see your impact in each project.

---

## 2) Projects to Include

You already have strong examples in your resume. Build case studies around:

1. **Job Preference Feature** (Aug 2022 – Present)  
   - Users: Job seekers  
   - Wins: +17% relevance clicks, +15% profile completion, +19% CTR on qualified jobs  
   - Highlights: Dynamic form flow, responsive design, accessibility (ARIA), AI-driven recommendation integration.

2. **Profile Settings UI Redesign**  
   - Users: All platform users  
   - Wins: +22% mobile engagement, -18% load time  
   - Highlights: Mobile-first design, accessibility, performance optimization.

3. **Reliability Metrics Dashboard** (Jun 2021 – Jul 2022)  
   - Users: Hardware reliability teams  
   - Wins: -40% manual analysis time, -30% manual review time  
   - Highlights: Data visualization (Chart.js, D3.js), GraphQL APIs, responsive UI.

4. **Self-Service Helpdesk Portal** (May 2018 – Jun 2021)  
   - Users: Support customers  
   - Wins: -35% support calls, -30% submission time  
   - Highlights: Multi-step dynamic form, real-time chat (Socket.IO), Next.js + MongoDB.

---

## 3) Website Structure

```
/
├─ /work
│  ├─ /job-preferences
│  ├─ /profile-settings
│  ├─ /reliability-dashboard
│  └─ /helpdesk-portal
├─ /about
├─ /resume
└─ /contact
```

**Global nav:** Work · About · Resume · Contact  
**Footer:** Email · LinkedIn · GitHub

---

## 4) Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **UI:** React + Tailwind CSS
- **Design System:** Radix UI or Headless UI + custom tokens
- **Content:** MDX for case studies
- **Images:** Next/Image with responsive sizes
- **Hosting:** Vercel

---

## 5) Case Study Template (use MDX)

For each project, fill this template:

```mdx
---
slug: "job-preferences"
title: "Job Preference Feature"
role: "UX Engineer (Design + Front-end)"
timeline: "Aug 2022 – Present"
tags: ["Enterprise", "Accessibility", "Performance", "Recommendation UI"]
stack: ["React", "TypeScript", "Tailwind", "Next.js", "Elasticsearch API"]
metric: "+17% relevance clicks"
heroImage: "/images/job-preferences/hero.png"
---

<TLDR>
Improved job match quality by letting seekers set detailed preferences, increasing relevance clicks by 17%.
</TLDR>

## Context
Before, job seekers saw too many irrelevant jobs. We wanted to let them set preferences for role, location, pay, and work type.

## My Responsibilities
- Built dynamic, accessible form in React/TypeScript
- Integrated with back-end recommendation engine (via API)
- Applied ARIA labels for accessibility
- Ensured responsive design for mobile and desktop
- Worked with designers to match design system

## Process
- Started with Figma flow for field order and conditional logic
- Built a coded prototype to test instant feedback from API
- User feedback showed too many steps → added dynamic field display
- Used lazy loading for performance

## Outcome
- +17% relevance clicks
- +15% profile completion
- +19% CTR on qualified jobs

## Reflection
Would explore progressive disclosure earlier in design phase.
```

Repeat this format for **Profile Settings**, **Reliability Dashboard**, and **Helpdesk Portal**.

---

## 6) Build Steps

1. **Scaffold site**
   - Create Next.js + Tailwind app
   - Add global layout, NavBar, Footer

2. **Add MDX support**
   - Configure `/content/work` folder for case study MDX files

3. **Create Work index page**
   - List projects with title, summary, key metric

4. **Build Case Study page template**
   - Pull MDX data
   - Render hero image, TL;DR, sections

5. **Add About page**
   - Short career story + skills from resume

6. **Add Resume page**
   - Inline view + PDF download link

7. **Add Contact page**
   - Email, LinkedIn, GitHub links

8. **Polish for accessibility + performance**
   - Keyboard navigation, alt text, color contrast
   - Lighthouse audit (aim ≥95 in all categories)

9. **Deploy**
   - Push to GitHub → Deploy to Vercel

---

## 7) Checklist for Each Case Study

- [ ] Context is clear (user, problem, goal)
- [ ] Your role + contributions match UX + engineering balance
- [ ] Process includes prototyping + user feedback change
- [ ] Screenshots or GIFs show before/after
- [ ] Metrics from your resume included
- [ ] Reflection is honest + short

---

## 8) Deliverable

When done, you’ll have:
- A live site with 4 detailed case studies
- Responsive, accessible design
- Direct tie between resume and portfolio
- Ready for sharing in interviews
