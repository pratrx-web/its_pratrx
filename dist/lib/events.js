const bus = new EventTarget();
export const Events = { on(type, fn) { const h = (e) => fn(e.detail); bus.addEventListener(type, h); return () => bus.removeEventListener(type, h); }, emit(type, detail) { bus.dispatchEvent(new CustomEvent(type, { detail })); } };
export const debounce = (fn, ms = 150) => { let t = 0; return (...a) => { clearTimeout(t); t = window.setTimeout(() => fn(...a), ms); }; };
export const throttle = (fn, ms = 100) => { let last = 0; return (...a) => { const n = performance.now(); if (n - last > ms) {
    last = n;
    fn(...a);
} }; };
