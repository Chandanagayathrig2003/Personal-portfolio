# Chandhana Gayathri — Portfolio

> **Award-winning premium portfolio** built with Next.js 16, TypeScript, Framer Motion, and Canvas animations. Feels like a Silicon Valley product website — not a typical developer portfolio.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple) ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

---

## ✨ Features

- **Immersive background** — Canvas particle system (120 particles with mouse repulsion), animated aurora blobs, mouse spotlight
- **Custom cursor** — Dot + ring that morphs on hover
- **Glassmorphism design system** — Premium dark UI with neon glow accents (blue `#00d4ff`, purple `#7c3aed`, cyan `#00ffff`)
- **11 full sections** — Hero · About · Skills · Experience · Projects · AI Showcase · Certifications · Achievements · Journey · Testimonials · Contact
- **Scroll-triggered animations** — Every element uses Framer Motion `whileInView` for buttery-smooth reveals
- **Animated skill bars** — 7 categories, per-skill level indicators with glow dots
- **Project showcase** — Category filtering with AnimatePresence transitions, hover metrics overlay
- **Neural network canvas** — Real-time animated 4-layer neural network visualization
- **Contact form** — EmailJS integration, real-time validation, toast notifications

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional — contact form)
cp .env.example .env.local
# Fill in your EmailJS keys if you want the contact form to send emails

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site runs immediately without any additional configuration.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.7 (strict) |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Canvas | Native Canvas API |
| Scroll effects | GSAP 3 + react-intersection-observer |
| Contact | EmailJS Browser |
| Notifications | react-hot-toast |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Base styles, custom scrollbar, glass utilities
│   ├── layout.tsx           # Root layout with metadata, fonts, global components
│   └── page.tsx             # Main page — renders all 11 sections
├── components/
│   ├── animations/
│   │   ├── AuroraBackground.tsx   # Animated radial gradient blobs
│   │   ├── MouseSpotlight.tsx     # Mouse-following spotlight effect
│   │   ├── NeuralNetworkCanvas.tsx # Animated neural network visualization
│   │   └── ParticleCanvas.tsx     # 120-particle system with mouse repulsion
│   ├── layout/
│   │   ├── BackgroundEffects.tsx  # Client wrapper for SSR-safe dynamic imports
│   │   ├── CustomCursor.tsx       # Custom dot + ring cursor
│   │   ├── Footer.tsx             # Brand, social links, scroll-to-top
│   │   └── Navbar.tsx             # Fixed glassmorphic nav, active section detection
│   ├── sections/
│   │   ├── Hero.tsx               # Full-screen landing
│   │   ├── About.tsx              # Bio, education, values
│   │   ├── Skills.tsx             # Tabbed skill categories with progress bars
│   │   ├── Experience.tsx         # Timeline of work experience
│   │   ├── Projects.tsx           # Filtered project showcase
│   │   ├── AIShowcase.tsx         # AI/ML capabilities + neural network
│   │   ├── Certifications.tsx     # 9 certification cards
│   │   ├── Achievements.tsx       # Animated counters
│   │   ├── Journey.tsx            # "Apprentice to Engineer" timeline
│   │   ├── Testimonials.tsx       # Auto-rotating carousel
│   │   └── Contact.tsx            # Contact form + social links
│   └── ui/
│       ├── GlassCard.tsx          # Reusable glassmorphism card
│       ├── NeonButton.tsx         # Multi-variant neon button
│       └── SectionHeader.tsx      # Consistent section headings
├── hooks/
│   ├── useMousePosition.ts        # Mouse tracking hook
│   └── useScrollAnimation.ts      # IntersectionObserver hook
├── lib/
│   ├── data.ts                    # All portfolio content (typed)
│   └── utils.ts                   # Utility functions (cn, formatDate, etc.)
├── .env.example                   # Environment variable template
├── next.config.ts                 # Next.js config
├── tailwind.config.ts             # Extended Tailwind with custom colors/animations
└── vercel.json                    # Deployment config (security headers, region)
```

---

## ⚙️ Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Contact form works without these (falls back to `mailto:` link). To enable EmailJS:
1. Create account at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. Add credentials to `.env.local`

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments. Add the environment variables in Vercel's project settings.

---

## 🔐 Security

- Next.js upgraded to latest patched version (CVE-2025-66478 resolved)
- Security headers configured in `vercel.json` (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- No secrets committed — all sensitive config via environment variables
- Form validation on both client and server boundary

---

## 👩‍💻 About

**Gangaraju Chandhana Gayathri** — CSE Graduate 2024, Cisco Apprentice Engineer  
Full Stack · QA Automation · AI/ML
