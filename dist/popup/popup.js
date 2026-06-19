"use strict";
async function active() { const [t] = await chrome.tabs.query({ active: true, currentWindow: true }); return t.id; }
async function send(type) { return chrome.tabs.sendMessage(await active(), { type }); }
document.querySelector('#dash').addEventListener('click', () => send('POOKIE_DASHBOARD'));
document.querySelector('#focus').addEventListener('click', () => send('POOKIE_TOGGLE_FOCUS'));
document.querySelector('#tabs').addEventListener('click', () => chrome.runtime.sendMessage({ type: 'POOKIE_GROUP_TABS' }));
document.querySelector('#summary').addEventListener('click', async () => { const r = await send('POOKIE_AI_SUMMARY'); document.querySelector('#out').textContent = r.summary; });
