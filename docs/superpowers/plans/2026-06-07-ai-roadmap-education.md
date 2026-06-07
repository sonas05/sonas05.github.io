# AI Roadmap Education Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ersetze das bestehende Zertifikate-Kachel-Grid in `Education.astro` durch eine vertikale Terminal-Log-Roadmap mit 7 Einträgen und farbkodiertem Status-System.

**Architecture:** Einzige geänderte Datei ist `src/components/Education.astro`. Das Frontmatter bekommt ein `roadmap`-Array, das im Template iteriert wird. Kein neuer Abschnitt, keine neue Komponente — nur der bestehende `md:col-span-2`-Block wird intern umgebaut.

**Tech Stack:** Astro 4, Tailwind CSS 3, `npm run dev` zum Testen

---

### Task 1: Roadmap-Daten ins Frontmatter einfügen

**Files:**
- Modify: `src/components/Education.astro` (Frontmatter, Zeilen 1–2)

- [ ] **Step 1: Frontmatter öffnen und roadmap-Array einfügen**

Ersetze den leeren Frontmatter-Block am Anfang von `src/components/Education.astro`:

```astro
---
---
```

Durch:

```astro
---
const roadmap = [
  { status: 'DONE',   label: 'Duales Studium Informatik',           sub: 'seit Okt 2024' },
  { status: 'DONE',   label: 'TryHackMe / HackTheBox',              sub: 'selbstgesteuert · laufend' },
  { status: 'ACTIVE', label: 'Anthropic Claude Certified Architect', sub: 'AI Engineering · Anthropic' },
  { status: 'NEXT',   label: 'OWASP LLM Top 10 & AI Red Teaming',   sub: 'Prompt Injection · Model Security' },
  { status: 'TODO',   label: 'CompTIA Security+',                   sub: 'Foundational Security Cert' },
  { status: 'TODO',   label: 'eJPT',                                sub: 'Entry-Level Penetration Tester' },
  { status: 'TODO',   label: 'AI Security Engineer',                sub: 'Langfristziel' },
];
---
```

- [ ] **Step 2: Prüfen dass die Datei compiliert**

```bash
npm run build 2>&1 | tail -5
```

Erwartet: kein Fehler, `Complete!` in der Ausgabe.

---

### Task 2: Zertifikate-Grid durch Terminal-Log ersetzen

**Files:**
- Modify: `src/components/Education.astro` (der `md:col-span-2`-Block am Ende des Grids)

- [ ] **Step 1: Alten Block lokalisieren**

In `src/components/Education.astro` den folgenden Block finden (beginnt mit `reveal reveal-delay-3 md:col-span-2`):

```html
<div class="reveal reveal-delay-3 md:col-span-2">
  <h3 class="text-xs font-mono tracking-widest text-cream/40 uppercase mb-6 pb-3 border-b border-cream/10">
    Zertifikate & Weiterbildung
  </h3>
  <div class="grid sm:grid-cols-2 gap-3">
    <div class="p-4 border border-cream/10 bg-cream/5 opacity-50">
      <p class="text-sm text-cream mb-1">Cybersecurity Zertifikate</p>
      <p class="text-xs text-cream/50 font-mono">Geplant · In Vorbereitung</p>
    </div>
    <div class="p-4 border border-cream/10 bg-cream/5">
      <p class="text-sm text-cream mb-1">Self-Directed Learning</p>
      <p class="text-xs text-cream/50 font-mono">TryHackMe · HackTheBox · laufend</p>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Block durch Terminal-Log-Roadmap ersetzen**

Den gesamten Block aus Step 1 ersetzen durch:

```astro
<div class="reveal reveal-delay-3 md:col-span-2">
  <h3 class="text-xs font-mono tracking-widest text-cream/40 uppercase mb-6 pb-3 border-b border-cream/10">
    Zertifikate & Weiterbildung
  </h3>
  <div class="space-y-0">
    {roadmap.map((item) => (
      <div class={`flex items-baseline gap-4 py-3 border-b border-cream/5 transition-colors ${
        item.status === 'ACTIVE' ? 'border-l-2 border-red/40 pl-3' : ''
      }`}>
        <span class={`font-mono text-xs tracking-widest shrink-0 ${
          item.status === 'ACTIVE' ? 'text-red' :
          item.status === 'NEXT'   ? 'text-cream/60' :
          item.status === 'DONE'   ? 'text-cream/30' :
                                     'text-cream/20'
        }`}>
          [{item.status}]
        </span>
        <span class={`font-mono text-xs flex-1 ${
          item.status === 'ACTIVE' ? 'text-cream' :
          item.status === 'NEXT'   ? 'text-cream/70' :
          item.status === 'DONE'   ? 'text-cream/40' :
                                     'text-cream/20'
        }`}>
          {item.label}
        </span>
        <span class={`font-mono text-xs hidden sm:block ${
          item.status === 'ACTIVE' ? 'text-red/60' :
          item.status === 'NEXT'   ? 'text-cream/30' :
          item.status === 'DONE'   ? 'text-cream/20' :
                                     'text-cream/10'
        }`}>
          {item.sub}
        </span>
      </div>
    ))}
  </div>
</div>
```

- [ ] **Step 3: Build prüfen**

```bash
npm run build 2>&1 | tail -5
```

Erwartet: kein Fehler.

---

### Task 3: Visuell verifizieren

**Files:** keine Änderung

- [ ] **Step 1: Dev-Server starten**

```bash
npm run dev
```

Erwartet: `Local: http://localhost:4321/`

- [ ] **Step 2: Education-Section im Browser prüfen**

Browser öffnen: `http://localhost:4321/#education`

Folgendes checken:
- 7 Zeilen sichtbar, von oben (DONE) nach unten (TODO)
- `[ACTIVE]`-Zeile (Claude Certified Architect) ist rot und hat einen linken roten Rand
- `[DONE]`-Zeilen sind gedimmt (cream/30-40)
- `[TODO]`-Zeilen sind deutlich heller/transparenter als `[DONE]`
- `sub`-Text rechts verschwindet auf Mobile (kleines Browser-Fenster)
- Heading "Zertifikate & Weiterbildung" ist unverändert
- Ausbildungs- und Erfahrungs-Blöcke darüber sind unverändert

- [ ] **Step 3: Dev-Server stoppen**

`Ctrl+C`

---

### Task 4: Committen

**Files:** keine Änderung

- [ ] **Step 1: Änderung stagen und committen**

```bash
git add src/components/Education.astro
git commit -m "feat: replace certificate grid with terminal-log AI roadmap"
```

Erwartet: `1 file changed` in der Ausgabe.
