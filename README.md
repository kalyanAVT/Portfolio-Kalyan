# Kalyan A — Portfolio

A personal portfolio website showcasing my work as an AI/ML engineer. The interface uses charcoal surfaces, subtle violet accents, and system illustrations, with projects leading the page. Originally inspired by [samiksha.online](https://www.samiksha.online/).

> **Live:** [kalyan-avt.vercel.app](https://kalyan-avt.vercel.app/)

---

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/) (App Router) |
| Language    | TypeScript                          |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/) (CSS `@theme`) |
| Animations  | CSS transitions and reduced-motion-aware keyframes |
| Typography  | [Geist](https://vercel.com/font) Sans & Mono |
| Icons       | [Lucide React](https://lucide.dev/) + inline SVG |
| Deployment  | Vercel (recommended)                |

## Features

- **Split-layout hero** with an AI system illustration and project/contact links
- **Sticky navigation** with active section tracking and a mobile menu
- **Featured projects** with system diagrams, technology tags, demo/source links, and expandable technical notes
- **Grouped skills**, work experience, hackathons, and education
- **Dark / light mode**, defaulting to dark with a saved preference
- **Keyboard access**, a skip link, and reduced-motion support
- **Versioned project content** — bundled from `projects.json`, so local previews and deployments show the same data

The lead project is **[Agentic RAG Assistant for Live GitHub Repositories](https://agentic-rag-2dk7.onrender.com)**: cited answers over live GitHub data, cross-session SQLite memory, and structured execution tracing. [View its source](https://github.com/kalyanAVT/Agentic-Rag).

## Getting Started

```bash
# 1. Clone
git clone https://github.com/kalyanAVT/Portfolio-Kalyan.git
cd Portfolio-Kalyan

# 2. Install dependencies (Node.js 22 or newer)
npm ci

# 3. Start development server
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
│   ├── Hero.tsx            # Split-layout hero
│   ├── SystemIllustration.tsx # Hero system diagram
│   ├── Navbar.tsx          # Sticky navigation and mobile menu
│   ├── About.tsx           # Bio section
│   ├── Experience.tsx      # Timeline work history
│   ├── Skills.tsx          # Grouped skill lists
│   ├── Projects.tsx        # Featured cards and technical notes
│   ├── ProjectVisual.tsx   # Project diagrams and generic fallback
│   ├── SectionHeading.tsx # Shared section headings
│   ├── Hackathons.tsx      # Timeline hackathon history
│   ├── Education.tsx       # Education cards
│   ├── Footer.tsx          # Contact links + copyright
│   └── ThemeToggle.tsx     # Dark/light mode switch
├── hooks/
│   └── useActiveSection.ts # Active section tracking for navigation
├── lib/
│   ├── data.ts             # All personal content (edit this!)
│   ├── getProjects.ts      # Typed project data, sorted by order
│   └── utils.ts            # Deterministic color helper
├── projects.json           # Project card data
├── postcss.config.mjs      # PostCSS + Tailwind v4 plugin
└── next.config.mjs         # Next.js configuration
```

## Customisation

### Content
Edit **`lib/data.ts`** — personal info, experience, skills, hackathons, and education live here. Add an object to `experiences` for another role, or a string to `skills` for another skill. Existing skill names are grouped in `components/Skills.tsx`; new names appear automatically under “Also in my toolkit” until assigned to a group.

### Projects
Edit **`projects.json`** — copy an existing project object and give it a unique `id`. No component changes are needed to publish another project.

| Field | Purpose |
| ----- | ------- |
| `title`, `description` | Project name and description; use a short description when providing `highlights` |
| `summary` (optional) | Short card copy when `description` contains longer technical notes |
| `category` (optional) | Label above the project title |
| `tags` | Short list of technologies shown on the card |
| `techStack` (optional) | Complete technology list shown in technical notes |
| `highlights` (optional) | Achievement bullets shown in technical notes |
| `links` | Objects with a `label` and an absolute `url`, such as Live demo or GitHub |
| `featured` | `true` for a full-width card; `false` for a standard card |
| `order` | Display order, lowest first |

New project IDs get a generic code illustration. Add a matching case in `components/ProjectVisual.tsx` only when a custom diagram is wanted.

After editing content, run `npm run typecheck` and `npm run build`, then commit and push. A connected Vercel project redeploys automatically on a push to its production branch.

### Theme
Edit **`app/globals.css`** — CSS variables under `:root` (light) and `[data-theme="dark"]` control the entire colour scheme.

## Validation

```bash
npm run typecheck
npm run build
```

GitHub Actions runs these checks on pushes and pull requests to `main`. There is no separate automated test suite for the portfolio. The RAG project's 86 pytest tests belong to its own repository.

No environment variables or API keys are required. Project content is bundled at build time; the earlier `GITHUB_USER` and `GITHUB_REPO` settings are no longer used. Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, when available, sets the metadata base URL.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in [Vercel](https://vercel.com/)
3. Deploy — automatic HTTPS, CDN, preview deploys; no environment configuration required

### Self-hosted
```bash
npm run build
npm start
```

## License

MIT © Kalyan A
