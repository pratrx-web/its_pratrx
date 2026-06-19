export class VisualEngine {
    root = document.documentElement;
    apply(s) { const v = s.visual; this.root.style.setProperty('--pookie-blur', `${v.blur}px`); this.root.style.setProperty('--pookie-opacity', String(v.opacity)); this.root.style.setProperty('--pookie-glow', `${v.glow}px`); this.root.style.setProperty('--pookie-radius', `${v.radius}px`); this.root.style.setProperty('--pookie-speed', `${v.animationSpeed}s`); this.root.style.setProperty('--pookie-accent', v.accent); this.root.dataset.pookieTheme = this.mode(v.themeMode); }
    mode(m) { if (m !== 'auto')
        return m; const h = new Date().getHours(); return h > 6 && h < 18 ? 'day' : 'night'; }
    extractAccent() { const bg = getComputedStyle(document.body).backgroundColor; return bg || '#9b7cff'; }
}
