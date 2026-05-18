import { createContext, useState, type ReactNode } from "react";
import { DEFAULT_SETTINGS, type AppSettings } from "./types";

export type SettingsContextValue = {
  settings: AppSettings;
  updateSettings: (patch: Partial<AppSettings>) => void;
};

export const SettingsContext = createContext<SettingsContextValue | null>(null);

/**
 * Provider that holds all app settings in state.
 * Standard React pattern for shared state.
 */
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  const updateSettings = (patch: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...patch }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

