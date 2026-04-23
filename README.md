# Kalyan A — Portfolio

A personal portfolio website built to showcase my work as an ML/AI engineer. Designed with a high-contrast, minimalist aesthetic inspired by [samiksha.online](https://www.samiksha.online/).

> **Live:** _Coming soon — Vercel deployment pending_

---

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/) (App Router) |
| Language    | TypeScript                          |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/) (CSS `@theme`) |
| Animations  | [Framer Motion](https://www.framer.com/motion/) |
| Typography  | [Geist](https://vercel.com/font) Sans & Mono |
| Icons       | [Lucide React](https://lucide.dev/) + inline SVG |
| Deployment  | Vercel (recommended)                |

## Features

- **Split-layout Hero** with circular avatar and CTA
- **Floating bottom navigation pill** with icon tooltips and active indicator
- **Timeline-based Experience & Hackathons** sections
- **2-column responsive project grid** with tech tags and action buttons
- **Skill pills** with hover micro-interactions
- **Dark / Light mode** with system preference detection and persistent toggle
- **ISR project data** — loads from `projects.json` locally, falls back to GitHub raw content for zero-redeploy updates

## Getting Started

```bash
# 1. Clone
git clone https://github.com/kalyanAVT/Portfolio-Kalyan.git
cd Portfolio-Kalyan

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.local.example .env.local
# Edit: GITHUB_USER=kalyanAVT  GITHUB_REPO=Portfolio-Kalyan

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, theme script
│   ├── page.tsx            # Home page (server component)
│   └── globals.css         # Tailwind v4 @theme tokens, CSS variables
├── components/
│   ├── Hero.tsx            # Split-layout hero with avatar
│   ├── Navbar.tsx          # Floating bottom navigation pill
│   ├── About.tsx           # Bio section
│   ├── Experience.tsx      # Timeline work history
│   ├── Skills.tsx          # Pill-based skill grid
│   ├── Projects.tsx        # 2-column project cards
│   ├── Hackathons.tsx      # Timeline hackathon history
│   ├── Education.tsx       # Education cards
│   ├── Footer.tsx          # Contact links + copyright
│   └── ThemeToggle.tsx     # Dark/light mode switch
├── hooks/
│   └── useActiveSection.ts # Intersection Observer for nav highlighting
├── lib/
│   ├── data.ts             # All personal content (edit this!)
│   ├── getProjects.ts      # ISR fetch with local fallback
│   └── utils.ts            # Deterministic color helper
├── projects.json           # Project card data
├── postcss.config.mjs      # PostCSS + Tailwind v4 plugin
└── next.config.mjs         # Next.js configuration
```

## Customisation

### Content
Edit **`lib/data.ts`** — all personal info, experience, skills, hackathons, and education live here.

### Projects
Edit **`projects.json`** — add or remove project cards without touching code.

### Theme
Edit **`app/globals.css`** — CSS variables under `:root` (light) and `[data-theme="dark"]` control the entire colour scheme.

## Environment Variables

| Variable      | Description                        | Required |
| ------------- | ---------------------------------- | -------- |
| `GITHUB_USER` | Your GitHub username               | No*      |
| `GITHUB_REPO` | Repository containing projects.json | No*      |

_*Falls back to local `projects.json` when not set._

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [Vercel](https://vercel.com/)
3. Add environment variables
4. Deploy — automatic HTTPS, CDN, preview deploys

### Self-hosted
```bash
npm run build
npm start
```

## License

MIT © Kalyan A
