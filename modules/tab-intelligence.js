const cats = [{ name: 'Study', match: /edu|coursera|khan|docs/i }, { name: 'Coding', match: /github|stackoverflow|localhost|code/i }, { name: 'Entertainment', match: /youtube|netflix|twitch/i }, { name: 'Research', match: /wikipedia|arxiv|scholar|pubmed/i }];
export async function autoGroupTabs() { if (!chrome?.tabs || !chrome.tabGroups)
    return; const tabs = await chrome.tabs.query({ currentWindow: true }); for (const c of cats) {
    const ids = tabs.filter(t => c.match.test(`${t.url} ${t.title}`)).map(t => t.id).filter(Boolean);
    if (ids.length > 1) {
        const gid = await chrome.tabs.group({ tabIds: ids });
        await chrome.tabGroups.update(gid, { title: c.name, collapsed: false });
    }
} }
export async function suspendInactiveTabs() { const tabs = await chrome.tabs.query({ currentWindow: true, active: false }); for (const t of tabs)
    if (t.id && t.url?.startsWith('http'))
        chrome.tabs.discard(t.id); }
