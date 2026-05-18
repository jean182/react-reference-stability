# React Stable Dependencies Demo

A progressive demo showing why **dependency stability** matters in React and how to fix it.

## What This Repo Demonstrates

Each commit builds on the last, progressively fixing a naive settings service:

1. **Naive (broken)** — new objects on every read, all subscribers notified on any change
2. **Object identity cache** — same reference returned until a real change
3. **Field-level subscriptions** — only notify when YOUR field changes
4. **Deep-equal memoization** — stabilize hook dependency arrays
5. **Sync initial emit** — avoid double render on mount

## Running

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173 and watch the render counts.

## Structure

- `src/settings/` — the settings service (types, service, hook)
- `src/components/` — UI components with render counters
- `src/versions/` — snapshots of each progressive version
