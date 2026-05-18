import { useSettings } from "../settings/useSettings";
import type { AppSettings } from "../settings/types";

// Global render counters — outside React to avoid loops
const renderCounts = new Map<string, number>();

/**
 * Displays a single setting field with a render counter.
 * Subscribes to a specific field within a category —
 * only re-renders when THAT field changes.
 */
export function SettingCard<K extends keyof AppSettings>({ category, field }: { category: K; field: string & keyof AppSettings[K] }) {
  const { settings } = useSettings(category, [field]);
  const value = settings[field];

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
