export type AppSettings = {
  darkMode: boolean;
  accentColor: string;
  fontSize: number;
  soundEnabled: boolean;
  cacheSize: number;
};

export const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  accentColor: "#0078d4",
  fontSize: 14,
  soundEnabled: true,
  cacheSize: 100,
};
