const selectors = ['ytd-rich-grid-renderer', 'ytd-reel-shelf-renderer', '#comments', '[aria-label="Reels"]', '[data-testid="sidebarColumn"]', '[data-testid="trend"]', 'shreddit-comment-tree', '.Comment', '.side', '.sidebar', '[class*="recommended" i]', '[class*="shorts" i]', '[class*="trending" i]'];
export class FocusMode {
    style;
    apply(s) { this.style ??= document.head.appendChild(document.createElement('style')); this.style.id = 'pookie-focus-style'; const host = location.hostname; const active = s.focus.enabled && s.focus.sites.some(x => host.includes(x)); this.style.textContent = active ? `${selectors.join(',')}{display:none!important}` : ''; document.documentElement.classList.toggle('pookie-focus-active', active); }
}
