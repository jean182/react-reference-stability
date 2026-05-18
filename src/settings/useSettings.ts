import { useContext } from "react";
import { SettingsContext } from "./SettingsProvider";

/**
 * Hook to consume settings from the provider.
 * Clean and correct — but re-renders on ANY setting change
 * even if the consumer only uses one field.
 */
export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
