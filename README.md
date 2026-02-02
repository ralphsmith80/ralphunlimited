# Ralph Unlimited

A static blog built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

Migrated from WordPress to eliminate DDoS vulnerability and reduce infrastructure complexity.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
├── public/
│   ├── games/retro-cruiser/   # Phaser.js game
│   └── images/                 # Uploaded media
├── src/
│   ├── components/            # Astro components
│   ├── content/blog/          # Blog posts (Markdown)
│   ├── data/
│   │   ├── categories.yml     # Category definitions
│   │   └── comments/          # Comment YAML files
│   ├── layouts/               # Page layouts
│   └── pages/                 # Routes
├── api/
│   └── comment.ts             # Vercel serverless function
└── scripts/
    └── migrate.ts             # WordPress migration script
```

## ✨ Features

- **Static Generation** - Fast, secure, no database
- **Blog with Categories** - Full WordPress content migrated
- **Retro Cruiser Game** - Embedded Phaser.js game preserved
- **Comments via PRs** - Staticman-style moderation workflow
- **Social Sharing** - Facebook & X share buttons
- **RSS Feed** - `/rss.xml`
- **Sitemap** - Auto-generated for SEO

## 💬 Comment System

Comments use a PR-based workflow:

1. User submits comment via form
2. Serverless function creates a GitHub PR
3. Site owner reviews and merges (or closes)
4. Vercel auto-deploys on merge

### Setup

Set these environment variables in Vercel:

```
GITHUB_TOKEN=ghp_xxx   # Personal access token with repo scope
GITHUB_REPO=QuantAlchemy/ralphunlimited
GITHUB_BRANCH=main
```

## 🔄 Migration

To re-run the WordPress migration:

```bash
bun run scripts/migrate.ts
```

This fetches posts, categories, and comments from the WordPress REST API.

## 📜 License

Personal blog content © Ralph Smith. Code is MIT licensed.
