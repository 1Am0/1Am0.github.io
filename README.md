# Portfolio Template

A modern, interactive portfolio website built with **React**, **TypeScript**, and **Vite**. Features a dark/light theme toggle, responsive design, and placeholder content ready to customize.

## ✨ Features

- **React + TypeScript** — Type-safe, component-based architecture
- **Vite** — Lightning-fast dev server and optimized builds
- **CSS Modules** — Scoped, maintainable styles
- **Dark / Light Theme** — Toggle with localStorage persistence
- **Responsive** — Looks great on mobile and desktop
- **Interactive Contact Form** — Client-side validation
- **Sections**: Hero, About, Projects, Experience, Skills, Contact

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customizing

Replace the placeholder text throughout the components in `src/components/`:

| Placeholder | Where |
|---|---|
| `[Your Name]` | Navbar, Hero, Footer |
| `[Your Title / Tagline]` | Hero |
| `[Project Name]` | Projects |
| `[Tech 1]`, `[Tech 2]` | Projects |
| `[Job Title]`, `[Company Name]` | Experience |
| `[Skill 1]`, `[Tool 1]` | Skills |

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── Skills/
├── context/
│   └── ThemeContext.tsx
├── App.tsx
├── App.module.css
├── index.css
└── main.tsx
```

## 🛠 Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules

## 📄 License

Free to use and customize for your own portfolio.
