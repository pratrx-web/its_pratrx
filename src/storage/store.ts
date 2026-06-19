import {DEFAULT_SETTINGS} from '../lib/defaults.js';
import type {AnalyticsDay,Goal,Note,PookieSettings,Task} from '../lib/types.js';
type Key='settings'|'notes'|'tasks'|'goals'|'analytics';
const fallback=new Map<string,unknown>();
async function getRaw<T>(key:Key,def:T):Promise<T>{if((globalThis as any).chrome?.storage?.local){const r=await chrome.storage.local.get(key);return (r[key]??def) as T;}return (fallback.get(key)??def) as T;}
async function setRaw<T>(key:Key,val:T){if((globalThis as any).chrome?.storage?.local) await chrome.storage.local.set({[key]:val}); else fallback.set(key,val);}
export const Store={async settings(){return getRaw<PookieSettings>('settings',DEFAULT_SETTINGS)},async saveSettings(s:Partial<PookieSettings>){const cur=await Store.settings();const next={...cur,...s,visual:{...cur.visual,...s.visual},wallpaper:{...cur.wallpaper,...s.wallpaper},focus:{...cur.focus,...s.focus},ai:{...cur.ai,...s.ai},performance:{...cur.performance,...s.performance},cursor:{...cur.cursor,...s.cursor},particles:{...cur.particles,...s.particles}};await setRaw('settings',next);return next},notes:()=>getRaw<Note[]>('notes',[]),saveNotes:(n:Note[])=>setRaw('notes',n),tasks:()=>getRaw<Task[]>('tasks',[]),saveTasks:(t:Task[])=>setRaw('tasks',t),goals:()=>getRaw<Goal[]>('goals',[]),saveGoals:(g:Goal[])=>setRaw('goals',g),analytics:()=>getRaw<AnalyticsDay[]>('analytics',[]),saveAnalytics:(a:AnalyticsDay[])=>setRaw('analytics',a)};
export const uid=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;
