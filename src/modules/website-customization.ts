import {Store} from '../storage/store.js';
export async function applySiteCustomization(){const key=`site:${location.hostname}`;const data=await chrome.storage.local.get(key);const p=data[key]||{};if(p.css){const s=document.createElement('style');s.textContent=p.css;document.head.append(s)}if(p.font)document.documentElement.style.setProperty('--pookie-site-font',p.font)}
export async function saveSiteCustomization(host:string,css:string,font=''){await chrome.storage.local.set({[`site:${host}`]:{css,font,updated:Date.now()}})}
