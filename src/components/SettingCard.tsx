import { useSettings } from "../settings/useSettings";
import type { AppSettings } from "../settings/types";

// Global render counters — outside React to avoid loops
const renderCounts = new Map<string, number>();

/**
 * Displays a single setting field with a render counter.
 * Subscribes to a category — still re-renders when sibling
 * fields in the same category change.
 */
export function SettingCard({ category, field }: { category: keyof AppSettings; field: string }) {
  const { settings } = useSettings(category);
  const value = (settings as Record<string, unknown>)[field];

  const key = `${category}.${field}`;
  const count = (renderCounts.get(key) ?? 0) + 1;
  renderCounts.set(key, count);

  // Simulate expensive work
  let _waste = 0;
  for (let i = 0; i < 200000; i++) { _waste += i; }
  void _waste;

  return (
    <div style={{
      padding: 12,
      border: "1px solid #ddd",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}>
      <code style={{ fontSize: 11, color: "#666" }}>{key}</code>
      <strong>{String(value)}</strong>
      <span style={{
        fontSize: 11,
        fontFamily: "monospace",
        color: count > 1 ? "#c00" : "#666",
      }}>
        renders: {count}
      </span>
    </div>
  );
}
