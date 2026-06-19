import { Store } from '../storage/store.js';
import { VisualEngine } from '../modules/visual-engine.js';
import { WallpaperEngine } from '../modules/wallpaper-engine.js';
import { FocusMode } from '../modules/focus-mode.js';
import { PerformanceEngine } from '../modules/performance-engine.js';
import { CursorEngine } from '../modules/cursor-engine.js';
import { ParticleEngine } from '../modules/particle-engine.js';
import { trackSite } from '../modules/analytics.js';
import { applySiteCustomization } from '../modules/website-customization.js';
import { mountDashboard } from '../components/dashboard.js';
import { KnowledgeHub } from '../modules/knowledge-hub.js';
const engines = { visual: new VisualEngine(), wallpaper: new WallpaperEngine(), focus: new FocusMode(), perf: new PerformanceEngine(), cursor: new CursorEngine(), particles: new ParticleEngine() };
async function apply() { const s = await Store.settings(); engines.visual.apply(s); engines.wallpaper.apply(s); engines.focus.apply(s); engines.cursor.apply(s); engines.particles.apply(s); }
apply();
applySiteCustomization();
engines.perf.start();
setInterval(() => trackSite(15), 15000);
chrome.runtime.onMessage.addListener((m, _s, send) => { (async () => { if (m.type === 'POOKIE_APPLY')
    await apply(); if (m.type === 'POOKIE_DASHBOARD')
    await mountDashboard(); if (m.type === 'POOKIE_AI_SUMMARY')
    send({ summary: new KnowledgeHub().summarize(document.body.innerText) }); if (m.type === 'POOKIE_TOGGLE_FOCUS') {
    const s = await Store.settings();
    await Store.saveSettings({ focus: { ...s.focus, enabled: !s.focus.enabled } });
    await apply();
} })(); return true; });
