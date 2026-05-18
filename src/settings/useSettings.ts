import { useState, useEffect } from "react";
import { settingsService } from "./SettingsService";
import type { AppSettings } from "./types";

/**
 * Hook that subscribes to the settings service.
 * Takes a category key — but still re-renders on ANY change
 * because we subscribe to the full object (filtering comes next).
 */
export function useSettings<K extends keyof AppSettings>(
  category: K
): {
  settings: AppSettings[K];
  updateSettings: (patch: Partial<AppSettings[K]>) => void;
} {
  const [settings, setSettings] = useState<AppSettings[K]>(settingsService.get(category));

  useEffect(() => {
    const subscription = settingsService.subscribe((all) => {
      setSettings(all[category]);
    });
    return () => subscription.unsubscribe();
  }, [category]);

  const updateSettings = (patch: Partial<AppSettings[K]>) => {
    settingsService.set(category, patch);
  };

  return { settings, updateSettings };
}
