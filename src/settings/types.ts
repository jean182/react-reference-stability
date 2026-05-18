export type ThemeSettings = {
  darkMode: boolean;
  accentColor: string;
};

export type DisplaySettings = {
  fontSize: number;
  compactMode: boolean;
};

export type AudioSettings = {
  soundEnabled: boolean;
  volume: number;
};

export type PerformanceSettings = {
  cacheSize: number;
  prefetch: boolean;
};

export type AppSettings = {
  theme: ThemeSettings;
  display: DisplaySettings;
  audio: AudioSettings;
  performance: PerformanceSettings;
};

export const DEFAULT_SETTINGS: AppSettings = {
  theme: { darkMode: false, accentColor: "#0078d4" },
  display: { fontSize: 14, compactMode: false },
  audio: { soundEnabled: true, volume: 80 },
  performance: { cacheSize: 100, prefetch: true },
};
