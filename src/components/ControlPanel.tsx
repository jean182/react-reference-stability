import { useSettings } from "../settings/useSettings";

/**
 * Control panel — uses the same hook to read + write settings.
 * Looks like standard React code you'd find in any project.
 */
export function ControlPanel() {
  const { settings, updateSettings } = useSettings();

  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
      <button onClick={() => updateSettings({ darkMode: !settings.darkMode })}>
        Toggle darkMode
      </button>
      <button onClick={() => updateSettings({ fontSize: Math.round(Math.random() * 20 + 10) })}>
        Randomize fontSize
      </button>
      <button onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}>
        Toggle sound
      </button>
      <button onClick={() => updateSettings({ cacheSize: Math.round(Math.random() * 500) })}>
        Randomize cacheSize
      </button>
    </div>
  );
}
