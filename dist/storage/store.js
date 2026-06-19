import { DEFAULT_SETTINGS } from '../lib/defaults.js';
const fallback = new Map();
async function getRaw(key, def) { if (globalThis.chrome?.storage?.local) {
    const r = await chrome.storage.local.get(key);
    return (r[key] ?? def);
} return (fallback.get(key) ?? def); }
async function setRaw(key, val) { if (globalThis.chrome?.storage?.local)
    await chrome.storage.local.set({ [key]: val });
else
    fallback.set(key, val); }
export const Store = { async settings() { return getRaw('settings', DEFAULT_SETTINGS); }, async saveSettings(s) { const cur = await Store.settings(); const next = { ...cur, ...s, visual: { ...cur.visual, ...s.visual }, wallpaper: { ...cur.wallpaper, ...s.wallpaper }, focus: { ...cur.focus, ...s.focus }, ai: { ...cur.ai, ...s.ai }, performance: { ...cur.performance, ...s.performance }, cursor: { ...cur.cursor, ...s.cursor }, particles: { ...cur.particles, ...s.particles } }; await setRaw('settings', next); return next; }, notes: () => getRaw('notes', []), saveNotes: (n) => setRaw('notes', n), tasks: () => getRaw('tasks', []), saveTasks: (t) => setRaw('tasks', t), goals: () => getRaw('goals', []), saveGoals: (g) => setRaw('goals', g), analytics: () => getRaw('analytics', []), saveAnalytics: (a) => setRaw('analytics', a) };
export const uid = () => crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
