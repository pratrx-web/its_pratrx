export class ParticleEngine {
    canvas;
    ctx;
    items = [];
    apply(s) { if (s.particles.effect === 'off') {
        this.canvas?.remove();
        this.canvas = undefined;
        return;
    } this.canvas ??= document.body.appendChild(Object.assign(document.createElement('canvas'), { id: 'pookie-particles' })); this.ctx = this.canvas.getContext('2d'); this.resize(); this.items = Array.from({ length: 50 }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, v: .3 + Math.random(), s: 1 + Math.random() * 2 })); this.loop(); }
    resize() { if (this.canvas) {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    } }
    loop = () => { if (!this.canvas || !this.ctx)
        return; this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); this.ctx.fillStyle = 'rgba(180,160,255,.75)'; for (const p of this.items) {
        p.y += p.v;
        if (p.y > innerHeight)
            p.y = 0;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.s, 0, 7);
        this.ctx.fill();
    } requestAnimationFrame(this.loop); };
}
