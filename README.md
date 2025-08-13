# Alexander Luo - Portfolio

A modern, accessible portfolio website showcasing UX engineering and frontend development work. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading with Next.js App Router and optimized images
- **Responsive**: Mobile-first design that works on all devices
- **Case Studies**: Detailed project showcases with metrics and outcomes
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── work/              # Work/projects pages
│   ├── about/             # About page
│   ├── resume/            # Resume page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   └── navigation.tsx     # Navigation menu
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
└── content/               # Content files (MDX)
    └── work/              # Case study content
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Case Studies

1. Create a new MDX file in `src/content/work/` following the template:

```mdx
---
slug: "project-name"
title: "Project Title"
role: "Your Role"
timeline: "Date Range"
tags: ["Tag1", "Tag2"]
stack: ["Tech1", "Tech2"]
metric: "Key Metric"
heroImage: "/images/project/hero.png"
---

<TLDR>
Brief project summary with key outcome.
</TLDR>

## Context
Project background and problem statement.

## My Responsibilities
Your specific contributions and role.

## Process
Design and development approach.

## Outcome
Results and metrics achieved.

## Reflection
Lessons learned and future improvements.
```

2. Add project data to the projects array in `src/app/work/page.tsx`

3. Add hero images to `public/images/`

### Customizing Content

- **Personal Info**: Update contact information in `src/components/footer.tsx` and `src/app/contact/page.tsx`
- **Resume**: Modify experience data in `src/app/resume/page.tsx`
- **About**: Update personal story in `src/app/about/page.tsx`
- **Skills**: Edit skills in `src/app/about/page.tsx` and `src/app/resume/page.tsx`

## 🎨 Customization

### Colors and Theme

The site uses CSS custom properties for theming. Update colors in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --muted: #f5f5f5;
  /* ... other colors */
}
```

### Typography

The site uses Geist fonts. To change fonts, update the font imports in `src/app/layout.tsx`.

### Components

All components are built with Tailwind CSS and can be customized by modifying the className props.

## 📱 Responsive Design

The site is built with a mobile-first approach:

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid layouts
- **Desktop**: Full multi-column layouts with hover states

## ♿ Accessibility

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG 2.1 AA compliant color ratios
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive alt text for all images

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The site can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: Aim for 95+ in all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Tree-shaking and code splitting
- **Images**: Next.js Image optimization

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - Type checking

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (recommended)
- Conventional commits for version control

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please reach out:

- Email: alexander.luo@example.com
- LinkedIn: [linkedin.com/in/alexander-luo](https://linkedin.com/in/alexander-luo)
- GitHub: [github.com/alexander-luo](https://github.com/alexander-luo)
