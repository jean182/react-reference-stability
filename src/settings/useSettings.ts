import { useState, useEffect, useRef } from "react";
import { settingsService } from "./SettingsService";
import type { AppSettings } from "./types";

/**
 * Hook that subscribes to the settings service with field-level filtering.
 * Only re-renders when the specified fields within the category change.
 * If no fields are specified, re-renders on any change in that category.
 */
export function useSettings<K extends keyof AppSettings>(
  category: K,
  fields?: (keyof AppSettings[K])[]
): {
  settings: AppSettings[K];
  updateSettings: (patch: Partial<AppSettings[K]>) => void;
} {
  const [settings, setSettings] = useState<AppSettings[K]>(settingsService.get(category));
  const prevRef = useRef<AppSettings[K]>(settings);

  useEffect(() => {
    const subscription = settingsService.subscribe((all) => {
      const next = all[category];

      // No field filter — update on any category change
      if (!fields) {
        if (next !== prevRef.current) {
          prevRef.current = next;
          setSettings(next);
        }
        return;
      }

      // Field filter — only update if a watched field changed
      const changed = fields.some(
        (f) => next[f] !== prevRef.current[f]
      );

      if (changed) {
        prevRef.current = next;
        setSettings(next);
      }
    });
    return () => subscription.unsubscribe();
  }, [category, fields]);

  const updateSettings = (patch: Partial<AppSettings[K]>) => {
    settingsService.set(category, patch);
  };

  return { settings, updateSettings };
}
