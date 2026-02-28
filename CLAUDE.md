# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Ramesh Kottamasu, deployed via GitHub Pages. Static site built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build system, no package manager.

## Local Development

```bash
# Serve locally (pick one)
python -m http.server 8000
npx http-server
```

No build, lint, or test commands exist. Changes deploy automatically when pushed to `main` via GitHub Pages.

## Architecture

- **index.html** — Single-page portfolio with sections: Hero, About, Projects, Experience, Education, Contact. Fixed nav bar with theme toggle.
- **about.html** — Standalone about page sharing the same stylesheet.
- **style.css** — All styling. Uses CSS custom properties for light/dark theming (toggled via `[data-theme="dark"]` attribute). Responsive breakpoint at 768px. Font: Inter (Google Fonts).
- **assets/js/interactive.js** — Three features: copyright year auto-fill, typed subtitle animation cycling through phrases, and dark/light theme toggle with `localStorage` persistence.

## Theming

Theme colors are defined as CSS variables at the top of `style.css`. Light theme is default; dark theme activates via `data-theme="dark"` on the `<html>` element. The toggle logic and persistence are in `interactive.js`.

## Deployment

Push to `main` branch — GitHub Pages serves the site automatically from the repository root.
