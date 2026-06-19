export class WallpaperEngine {
    el;
    apply(s) { this.el ??= this.create(); const w = s.wallpaper; this.el.innerHTML = ''; Object.assign(this.el.style, { filter: `brightness(${w.brightness}) contrast(${w.contrast}) saturate(${w.saturation}) blur(${w.blur}px)` }); if (w.kind === 'video' && w.global) {
        const v = document.createElement('video');
        v.src = w.global;
        v.autoplay = true;
        v.loop = true;
        v.muted = true;
        v.playsInline = true;
        v.playbackRate = w.speed;
        this.el.append(v);
    }
    else
        this.el.style.background = w.global; }
    create() { const e = document.createElement('div'); e.id = 'pookie-wallpaper'; document.documentElement.prepend(e); return e; }
}
