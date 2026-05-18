# React Stable Dependencies Demo

A companion repo for the blog post **"Solving React Re-Renders with a Subscription-Based Provider"**.

## What This Repo Demonstrates

How to move from a standard React Context provider (where every consumer re-renders on any change) to a subscription-based service with field-level filtering.

The commit history walks through each step:

1. **Baseline** — standard Context + `useSettings` hook. All 20 consumers re-render on any change.
2. **Subscription service** — state lives outside React in a class with `BehaviorSubject`. Components subscribe via `useEffect`.
3. **Field-level filtering** — hook accepts `(category, fields)` and only triggers setState when watched fields change.
4. **Stable dependency arrays** — `useStableArray` prevents unnecessary re-subscriptions from array literals in deps.

## Running

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173 and watch the render counts.

## Structure

- `src/settings/types.ts` — nested settings type definition
- `src/settings/SettingsService.ts` — plain class + BehaviorSubject (state outside React)
- `src/settings/useSettings.ts` — subscription hook with field-level filtering
- `src/settings/useStableArray.ts` — dependency array stabilization utility
- `src/components/SettingCard.tsx` — displays one field with render counter
- `src/components/ControlPanel.tsx` — buttons to toggle settings
