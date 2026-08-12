# MatiasWebPage

Personal portfolio website for Matias Campos Chaves. The site is designed as a professional profile for recruiters, companies, and technology teams that want to quickly understand Matias' background, experience, credentials, resume, and contact links.

## Features

- Bilingual experience in Spanish and English.
- Welcome modal with language selection.
- Professional hero section with a hiring-focused summary.
- Personal information and contact details.
- Technical stack and professional strengths.
- Current Full Stack experience at Grupo Montecristo / DrMax.
- Education, certifications, and verifiable Acreditta credentials.
- Resume section with a custom preview image, open action, and PDF download.
- LinkedIn, GitHub, and email links.
- Responsive layout for desktop, tablet, and mobile.

## Stack

- Ruby on Rails 8
- PostgreSQL
- React
- Inertia.js
- Vite
- Tailwind CSS

## Project Structure

- `app/controllers/home_controller.rb` - Provides portfolio data to the Inertia page.
- `app/javascript/pages/home/index.jsx` - Main portfolio UI.
- `app/javascript/entrypoints/inertia.jsx` - Inertia/React bootstrapping.
- `app/javascript/entrypoints/application.css` - Tailwind entrypoint and global styles.
- `public/matias-campos-cv.pdf` - Current resume PDF.
- `public/matias-campos-cv-preview.png` - Resume preview image used in the page.
