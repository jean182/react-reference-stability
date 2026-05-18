import { useSettings } from "../settings/useSettings";

/**
 * Control panel — buttons to update settings in each category.
 */
export function ControlPanel() {
  const { settings: theme, updateSettings: updateTheme } = useSettings("theme");
  const { settings: display, updateSettings: updateDisplay } = useSettings("display");
  const { settings: audio, updateSettings: updateAudio } = useSettings("audio");
  const { settings: perf, updateSettings: updatePerf } = useSettings("performance");

  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
      <button onClick={() => updateTheme({ darkMode: !theme.darkMode })}>
        Toggle darkMode
      </button>
      <button onClick={() => updateDisplay({ fontSize: Math.round(Math.random() * 20 + 10) })}>
        Randomize fontSize
      </button>
      <button onClick={() => updateAudio({ soundEnabled: !audio.soundEnabled })}>
        Toggle sound
      </button>
      <button onClick={() => updatePerf({ cacheSize: Math.round(Math.random() * 500) })}>
        Randomize cacheSize
      </button>
    </div>
  );
}
