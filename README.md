# Digital Portfolio

Professional portfolio website built with React, TypeScript, and Vite. The project includes a responsive single-page layout, theme switching, and a working contact form powered by EmailJS.

## Overview

This repository is designed as a production-ready personal portfolio template. It provides clear component separation, maintainable styling with CSS Modules, and a straightforward configuration path for deployment.

## Core Features

- React 19 with TypeScript for type-safe, component-based development
- Vite for fast development and optimized builds
- CSS Modules for scoped styles
- Light and dark theme support with saved user preference
- Responsive layout for mobile and desktop
- Contact form with real email delivery through EmailJS

## Tech Stack

- React
- TypeScript
- Vite
- CSS Modules
- EmailJS

## Quick Start

```bash
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run deploy
```

## Contact Form Configuration (EmailJS)

To enable live email delivery from the contact form:

1. Create an EmailJS account at https://www.emailjs.com/.
2. Add an email service in EmailJS.
3. Create an EmailJS template.
4. Add the following environment variables to `.env` in the project root.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Restart the development server after changing `.env` values.

### Template Variables

The contact form sends these parameters to EmailJS:

- `name`
- `email`
- `message`
- `title`
- `time`
- `from_name`
- `from_email`

Using both naming styles allows compatibility with common EmailJS template conventions.

## Project Structure

```text
src/
	components/
		About/
		Contact/
		Experience/
		Footer/
		Hero/
		Navbar/
		Projects/
		Skills/
	context/
		ThemeContext.tsx
	App.tsx
	App.module.css
	index.css
	main.tsx
```

## Deployment

This project includes GitHub Pages deployment support through the `gh-pages` package.

```bash
npm run build
npm run deploy
```

## License

This project is available for personal use and customization.
