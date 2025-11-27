# Cloudflare Pages Deployment Fix

## Problem
Cloudflare Pages deployment fails with `npm error Missing: @img/sharp-*` because `npm ci` enforces strict platform-specific package matching between macOS (development) and Linux (Cloudflare build).

## Solution: Use `npm install` Instead of `npm ci`

`npm install` resolves dependencies based on the current platform, automatically selecting correct binaries for Linux on Cloudflare's build servers.

## How to Deploy

### Option A: Configure in Cloudflare Dashboard (Recommended)

1. Go to Cloudflare Dashboard → Pages → Your Project → Settings → Builds & deployments

2. **Change Build command** from:
   ```bash
   npm run build
   ```

   To:
   ```bash
   npm install && npm run build
   ```

3. Keep **Build output directory**: `out`

4. Save and redeploy

### Option B: Create `wrangler.toml` (Alternative)

If you prefer configuration file, create `wrangler.toml`:

```toml
name = "personal-website"

[build]
command = "npm install && npm run build"
```

Then deploy with:
```bash
npx wrangler pages deploy out --project-name=personal-website
```

## Why This Works

- **`npm install`**: Resolves dependencies based on current platform (Linux on Cloudflare)
- **`npm ci`** (default): Requires exact match from `package-lock.json` (macOS binaries)

Since `@opennextjs/cloudflare` brings `sharp` as transitive dependency, and sharp has platform-specific optional dependencies, using `npm install` automatically selects Linux binaries.

## Build Settings Summary

**For Cloudflare Pages Dashboard:**
- Framework preset: Next.js
- Build command: `npm install && npm run build`
- Build output directory: `out`
- Node version: 20 (auto-detected from `.node-version`)

## Future Considerations

If you switch to Cloudflare Workers (removing `output: "export"`), you may need:
- Remove `output: "export"` from `next.config.ts`
- Configure `@opennextjs/cloudflare` properly
- Use their specific build process

For now, static export works perfectly with Cloudflare Pages without any adapter.

## Verification

After deployment:
1. Check build logs - should see "Installing..." then "Building..."
2. Visit your Cloudflare Pages URL
3. Test all pages load correctly
4. Verify no 404 errors or missing assets

---

Generated: 2025-11-26
Status: Ready for deployment ✅
