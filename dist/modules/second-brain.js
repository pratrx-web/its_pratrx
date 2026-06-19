import { Store, uid } from '../storage/store.js';
export class SecondBrain {
    async create(title, body) { const tags = [...body.matchAll(/#([\w-]+)/g)].map(m => m[1]); const links = [...body.matchAll(/\[\[([^\]]+)\]\]/g)].map(m => m[1]); const notes = await Store.notes(); const note = { id: uid(), title, body, tags, links, created: Date.now(), updated: Date.now() }; notes.unshift(note); await Store.saveNotes(notes); return note; }
    async graph() { const notes = await Store.notes(); return { nodes: notes.map(n => ({ id: n.title, tags: n.tags })), edges: notes.flatMap(n => n.links.map(l => ({ from: n.title, to: l }))) }; }
}
