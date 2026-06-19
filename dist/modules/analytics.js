import { Store } from '../storage/store.js';
export async function trackSite(seconds) { const host = location.hostname; const date = new Date().toISOString().slice(0, 10); const data = await Store.analytics(); let day = data.find(d => d.date === date); if (!day) {
    day = { date, sites: {}, focusSeconds: 0, distractionSeconds: 0 };
    data.push(day);
} day.sites[host] = (day.sites[host] || 0) + seconds; if (/youtube|instagram|facebook|reddit|x\.com/.test(host))
    day.distractionSeconds += seconds;
else
    day.focusSeconds += seconds; await Store.saveAnalytics(data); }
