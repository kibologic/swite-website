# Contributing to Swite Website

Thank you for your interest in improving the Swite documentation site.

## Ways to Contribute

1. **Bug Reports** — Visual issues, broken links, or incorrect docs: [open an issue](https://github.com/kibologic/swite-website/issues).
2. **Content Improvements** — Corrections to docs or code examples: open a PR.
3. **Feature Suggestions** — Ideas for new sections: [start a discussion](https://github.com/kibologic/swite-website/discussions).

## Development Guidelines

- All UI must be built as SwissJS `.uix` components
- Use the defined CSS variables (`--brand-accent`, `--bg-page`, `--text-primary`, etc.)
- All code examples must reference `@swissjs/` packages (not `@swissjs/`)
- Both light and dark mode must be tested

## Getting Started

```bash
git clone https://github.com/kibologic/swite-website.git
cd swite-website
pnpm install
node dev.mjs
```
