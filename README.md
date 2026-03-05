# official-site-docs

FileUni documentation site powered by **Cloudflare Workers**, built with **Bun** and **Starlight**.

## Local Development
- Local dev: `bun run dev`
- Build: `bun run build`
- Preview: `bun run preview`
## Deployment

This project automatically triggers Cloudflare build on **Git push**. No manual deployment needed.

### Cloudflare Dashboard Configuration

| Setting | Value |
|---------|-------|
| Build command | `bun run build` |
| Deploy command | `npx wrangler deploy` |

> ⚠️ **Note**: All deployments are handled automatically via Cloudflare Pages/Workers Git integration. No need to run `wrangler deploy` locally.

## Starlight i18n Sidebar Configuration

This project uses root locale mode (English files in `src/content/docs/` root, Chinese in `zh-cn/` subdirectory).

**Important**: `autogenerate: { directory: '.' }` does not work with root locale mode. You must manually specify sidebar items:

```javascript
sidebar: [
  {
    label: 'Documentation',
    items: [
      { label: 'Introduction', slug: 'introduction' },
      { label: 'Quick Start', slug: 'quickstart' },
      // ...
    ],
  },
]
```
