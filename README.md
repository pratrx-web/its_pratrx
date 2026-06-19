# POOKIE OS

**Turn any browser into a futuristic productivity operating system.**

POOKIE OS is a Manifest V3 Microsoft Edge/Chrome extension that layers a productivity operating system over the web: acrylic visual effects, live wallpapers, focus cleanup, a draggable dashboard, local-first notes/tasks, second-brain graph data, tab intelligence, analytics, command shortcuts, cursor effects, particles, and performance safeguards.

## Installation

1. Run `npm install`.
2. Run `npm run build`.
3. Open Chrome/Edge extensions.
4. Enable Developer Mode.
5. Choose **Load unpacked** and select `dist/`.

## Build Instructions

- `npm run typecheck` validates TypeScript.
- `npm run build` compiles ES modules and copies static extension files into `dist/`.

## Architecture

- `background/` service worker, commands, tab automation, alarms.
- `content/` browser overlay bootstrap and global styles.
- `modules/` visual engine, wallpaper engine, focus mode, AI/local knowledge tools, second brain, tab intelligence, analytics, customization, cursor/particle/performance engines.
- `components/` draggable dashboard widgets.
- `storage/` local-first typed persistence.
- `settings/` full application-like settings OS.
- `popup/` quick actions.
- `assets/` extension icon.
- `themes/` theme presets.

## Performance Optimizations

- GPU-friendly fixed layers and transforms.
- RequestAnimationFrame FPS monitoring.
- Automatic low-performance particle shutdown class.
- Throttled memory monitoring and analytics intervals.
- Lazy dashboard mounting.
- Event-driven settings refresh.
- CSS-only focus filtering where possible.
- MV3 service worker background lifecycle.

## Security

- Manifest V3.
- Extension CSP blocks remote code execution.
- ES modules only.
- No remote scripts.
- Local-first storage for notes, tasks, settings, and analytics.
- Site JS customization storage is prepared without arbitrary content-script eval execution.
