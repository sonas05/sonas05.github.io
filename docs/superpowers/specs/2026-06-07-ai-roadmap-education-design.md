---
name: ai-roadmap-education
description: Vertikale Terminal-Log-Roadmap im Education-Block, zeigt AI Engineering / AI Security Lernpfad mit Anthropic Claude Certified Architect als aktivem Meilenstein
metadata:
  type: project
---

# Design: AI-Roadmap im Education-Block

## Ziel

Den Zertifikate-Bereich der Education-Section zu einer vollständigen, vertikalen Lernpfad-Roadmap ausbauen. Die Roadmap macht den strategischen Weg von AI Engineering zu AI Security sichtbar und zeigt den Anthropic Claude Certified Architect als aktiven Meilenstein.

## Placement

Innerhalb von `src/components/Education.astro`, Subsection "Zertifikate & Weiterbildung" — ersetzt das bestehende 2-Spalten-Kachel-Grid durch eine vertikale Terminal-Log-Liste.

## Visuelles Konzept

Terminal-Log-Style, konform mit der bestehenden Monospace-Ästhetik der Seite. Einträge sind vertikal gestapelt, ältester oben, Zukunft unten. Jeder Eintrag hat ein farbkodiertes Status-Badge.

### Status-System

| Badge     | Farbe            | Bedeutung                        |
|-----------|------------------|----------------------------------|
| `[DONE]`  | `text-cream/30`  | Abgeschlossen / laufend (Basis)  |
| `[ACTIVE]`| `text-red`       | Aktiv in Bearbeitung             |
| `[NEXT]`  | `text-cream/60`  | Nächster geplanter Schritt       |
| `[TODO]`  | `text-cream/20`  | Langfristig geplant              |

### Einträge (von oben nach unten)

```
[DONE]   Duales Studium Informatik          · seit Okt 2024
[DONE]   TryHackMe / HackTheBox             · selbstgesteuert, laufend
[ACTIVE] Anthropic Claude Certified Architect · AI Engineering Foundation
[NEXT]   OWASP LLM Top 10 & AI Red Teaming  · Prompt Injection, Model Security
[TODO]   CompTIA Security+                  · Foundational Security Cert
[TODO]   eJPT                               · Entry-Level Penetration Tester
[TODO]   AI Security Engineer               · Langfristziel
```

### Visuelles Detail für `[ACTIVE]`-Eintrag

Der aktive Eintrag (Claude Certified Architect) bekommt:
- `border-l border-red/40` — roter linker Rand (wie bestehende Timeline-Hover-Sprache)
- `text-red` für das Badge
- Kurze Beschreibungszeile: "AI Engineering als Grundlage für AI Security"
- Hersteller-Label: "Anthropic"

Alle anderen Einträge: kein separater Rand, nur Badge-Farbe zur Unterscheidung.

## Struktur-Änderung in Education.astro

- Der bestehende `grid sm:grid-cols-2` Container für Zertifikate wird entfernt
- Ersetzt durch `space-y-0` Liste mit einzelnen Zeilen-Einträgen
- Jeder Eintrag: `flex gap-4 py-3 border-b border-cream/5` mit Badge links, Name und Beschreibung rechts
- Der `[ACTIVE]`-Eintrag zusätzlich: `border-l-2 border-red/40 pl-4 -ml-4` für visuellen Akzent

## Daten-Array

```ts
const roadmap = [
  { status: 'DONE',   label: 'Duales Studium Informatik',           sub: 'seit Okt 2024' },
  { status: 'DONE',   label: 'TryHackMe / HackTheBox',              sub: 'selbstgesteuert · laufend' },
  { status: 'ACTIVE', label: 'Anthropic Claude Certified Architect', sub: 'AI Engineering · Anthropic' },
  { status: 'NEXT',   label: 'OWASP LLM Top 10 & AI Red Teaming',   sub: 'Prompt Injection · Model Security' },
  { status: 'TODO',   label: 'CompTIA Security+',                   sub: 'Foundational Security Cert' },
  { status: 'TODO',   label: 'eJPT',                                sub: 'Entry-Level Penetration Tester' },
  { status: 'TODO',   label: 'AI Security Engineer',                sub: 'Langfristziel' },
];
```

## Was sich NICHT ändert

- Section-Heading "Zertifikate & Weiterbildung" bleibt
- Reveal-Animationen bleiben
- Rest von Education.astro (Ausbildung / Erfahrung Grid) bleibt unverändert
- Kein neuer Abschnitt auf der Seite — nur der Zertifikate-Unterbereich wird erweitert
