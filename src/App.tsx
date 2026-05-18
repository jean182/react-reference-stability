import { ControlPanel } from "./components/ControlPanel";
import { SettingCard } from "./components/SettingCard";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Settings Dashboard</h1>
      <p style={{ color: "#666", maxWidth: 600 }}>
        Nested settings with category-level subscriptions.
        Changing one category still re-renders all subscribers in that category.
      </p>

      <ControlPanel />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
        <SettingCard category="theme" field="darkMode" />
        <SettingCard category="theme" field="darkMode" />
        <SettingCard category="theme" field="darkMode" />
        <SettingCard category="theme" field="accentColor" />
        <SettingCard category="theme" field="accentColor" />
        <SettingCard category="display" field="fontSize" />
        <SettingCard category="display" field="fontSize" />
        <SettingCard category="display" field="fontSize" />
        <SettingCard category="display" field="compactMode" />
        <SettingCard category="display" field="compactMode" />
        <SettingCard category="audio" field="soundEnabled" />
        <SettingCard category="audio" field="soundEnabled" />
        <SettingCard category="audio" field="soundEnabled" />
        <SettingCard category="audio" field="volume" />
        <SettingCard category="audio" field="volume" />
        <SettingCard category="performance" field="cacheSize" />
        <SettingCard category="performance" field="cacheSize" />
        <SettingCard category="performance" field="cacheSize" />
        <SettingCard category="performance" field="prefetch" />
        <SettingCard category="performance" field="prefetch" />
      </div>
    </div>
  );
}
