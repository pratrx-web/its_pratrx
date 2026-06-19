export class CursorEngine {
    dot;
    apply(s) { if (s.cursor.mode === 'off') {
        this.dot?.remove();
        this.dot = undefined;
        return;
    } this.dot ??= document.body.appendChild(Object.assign(document.createElement('div'), { id: 'pookie-cursor' })); document.addEventListener('pointermove', e => { this.dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; }, { passive: true }); }
}
