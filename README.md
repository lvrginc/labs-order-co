# Agentic Labs Website

Public-facing site for Order's Agentic Labs division.

**Stack:** Astro + Tailwind CSS  
**Hosting:** GitHub Pages  
**Domain:** labs.order.co (pending DNS)

## Development

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages automatically.

## Content

Blog posts live in `src/pages/blog/` as Markdown files. Each post needs frontmatter:

```yaml
---
layout: ../../layouts/BlogPost.astro
title: "Post Title"
description: "One-line description."
date: "2026-04-13"
author: "Author Name"
tags: ["Tag1", "Tag2"]
---
```
