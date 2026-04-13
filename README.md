# Joon Lee — Personal Portfolio Website

Live site: https://joonyoung82.github.io

---

## About
Personal portfolio website for Joon Lee, Senior QA Engineer at Apple with 15+ years of experience shipping mobile apps used by billions. Built from scratch with vanilla HTML, CSS, and JavaScript — zero frameworks or libraries.

---

## Sections
- **Home** — Full-screen hero with looping background video and CTA buttons
- **By the Numbers** — Animated stat counters (IntersectionObserver-driven)
- **Work Experience** — Interactive career timeline with expandable details (Apple, Meta, HTC America, LG Electronics)
- **Education** — Georgia Institute of Technology (M.S. Analytics, in progress), NJIT (B.S. Industrial Engineering)
- **Skills & Tools** — Languages, tools, and platforms displayed as pill tags
- **Projects** — Portfolio website, Test Data Generator, Test Plan Generator
- **Volunteer** — Mango House, Living Fields, KCCC, Compassion International (with modal popups)
- **Contact** — Email, Resume, LinkedIn, GitHub (icons with hover label reveal)

---

## Built With
- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- [EB Garamond + Quattrocento Sans](https://fonts.google.com/) — Google Fonts
- Google Analytics (gtag.js)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

## Features
- Dark mode with localStorage persistence and OS preference detection
- Animated stat counters using IntersectionObserver
- Scroll-triggered fade-in animations
- Full-screen background video hero (with poster fallback)
- Interactive career timeline with expandable details
- Volunteer section with accessible modal popups (Escape to close, click-outside to close)
- Contact icons with hover overlay label effect
- Light/dark icon variants for theme-aware assets
- Mobile-responsive hamburger nav with 3-column link grid
- iOS viewport height fix (`--vh` custom property)
- Fully responsive design — mobile-first approach

---

## Local Development

### Preview locally
```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```
