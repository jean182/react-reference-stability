import { useSettings } from "../settings/useSettings";

// Global render counters — outside React to avoid loops
const renderCounts = new Map<string, number>();

/**
 * Displays a single setting value with a render counter.
 * Uses the useSettings hook — looks correct but re-renders
 * every time ANY setting changes.
 */
export function SettingCard({ field }: { field: string }) {
  const { settings } = useSettings();
  const value = settings[field as keyof typeof settings];

  const count = (renderCounts.get(field) ?? 0) + 1;
  renderCounts.set(field, count);

  // Simulate expensive work (formatting, layout calcs, etc.)
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
      <code style={{ fontSize: 11, color: "#666" }}>{field}</code>
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
