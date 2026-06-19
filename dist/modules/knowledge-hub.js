export class KnowledgeHub {
    summarize(text) { const s = text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?]) /).slice(0, 5).join(' '); return s || 'No readable text found.'; }
    flashcards(text) { return this.summarize(text).split(/(?<=[.!?]) /).filter(Boolean).map((x, i) => ({ q: `Key idea ${i + 1}`, a: x })); }
    mindmap(text) { return this.summarize(text).split(/[,.;]/).filter(Boolean).slice(0, 8); }
}
