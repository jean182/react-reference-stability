import { useState, useEffect, useRef } from "react";
import { settingsService } from "./SettingsService";
import { useStableArray } from "./useStableArray";
import type { AppSettings } from "./types";

/**
 * Hook that subscribes to the settings service with field-level filtering.
 * Only re-renders when the specified fields within the category change.
 * Uses useStableArray to prevent unnecessary re-subscriptions.
 */
export function useSettings<K extends keyof AppSettings>(
  category: K,
  fields?: (keyof AppSettings[K])[]
): {
  settings: AppSettings[K];
  updateSettings: (patch: Partial<AppSettings[K]>) => void;
} {
  const stableFields = useStableArray(fields);
  const [settings, setSettings] = useState<AppSettings[K]>(settingsService.get(category));
  const prevRef = useRef<AppSettings[K]>(settings);

  useEffect(() => {
    const subscription = settingsService.subscribe((all) => {
      const next = all[category];

      // No field filter — update on any category change
      if (!stableFields) {
        if (next !== prevRef.current) {
          prevRef.current = next;
          setSettings(next);
        }
        return;
      }

      // Field filter — only update if a watched field changed
      const changed = stableFields.some(
        (f) => next[f] !== prevRef.current[f]
      );

      if (changed) {
        prevRef.current = next;
        setSettings(next);
      }
    });
    return () => subscription.unsubscribe();
  }, [category, stableFields]);

  const updateSettings = (patch: Partial<AppSettings[K]>) => {
    settingsService.set(category, patch);
  };

  return { settings, updateSettings };
}
