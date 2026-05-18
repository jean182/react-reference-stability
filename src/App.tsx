import { SettingsProvider } from "./settings/SettingsProvider";
import { ControlPanel } from "./components/ControlPanel";
import { SettingCard } from "./components/SettingCard";

export default function App() {
  return (
    <SettingsProvider>
      <div style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Settings Dashboard</h1>
        <p style={{ color: "#666", maxWidth: 600 }}>
          A standard React app: Provider holds state, components consume via hook.
          Each card only <em>uses</em> one setting — but watch the render counts.
        </p>

        <ControlPanel />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          <SettingCard field="darkMode" />
          <SettingCard field="darkMode" />
          <SettingCard field="darkMode" />
          <SettingCard field="darkMode" />
          <SettingCard field="accentColor" />
          <SettingCard field="accentColor" />
          <SettingCard field="accentColor" />
          <SettingCard field="accentColor" />
          <SettingCard field="fontSize" />
          <SettingCard field="fontSize" />
          <SettingCard field="fontSize" />
          <SettingCard field="fontSize" />
          <SettingCard field="soundEnabled" />
          <SettingCard field="soundEnabled" />
          <SettingCard field="soundEnabled" />
          <SettingCard field="soundEnabled" />
          <SettingCard field="cacheSize" />
          <SettingCard field="cacheSize" />
          <SettingCard field="cacheSize" />
          <SettingCard field="cacheSize" />
        </div>
      </div>
    </SettingsProvider>
  );
}
