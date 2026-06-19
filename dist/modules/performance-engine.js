import { throttle } from '../lib/events.js';
export class PerformanceEngine {
    fps = 60;
    low = false;
    frames = 0;
    last = performance.now();
    start() { const tick = () => { this.frames++; const now = performance.now(); if (now - this.last >= 1000) {
        this.fps = this.frames;
        this.low = this.fps < 42;
        document.documentElement.classList.toggle('pookie-low-performance', this.low);
        this.frames = 0;
        this.last = now;
    } requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
    monitorMemory = throttle(() => { const m = performance.memory; if (m && m.usedJSHeapSize / m.jsHeapSizeLimit > .75)
        document.documentElement.classList.add('pookie-memory-pressure'); }, 2000);
}
