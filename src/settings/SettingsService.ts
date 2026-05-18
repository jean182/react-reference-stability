import { BehaviorSubject } from "rxjs";
import type { AppSettings } from "./types";
import { DEFAULT_SETTINGS } from "./types";

/**
 * Settings service — holds nested state outside React.
 * Emits the full object on any change (field-level filtering comes next).
 */
export class SettingsService {
  private settings: AppSettings = structuredClone(DEFAULT_SETTINGS);
  private subject = new BehaviorSubject<AppSettings>(this.settings);

  get<K extends keyof AppSettings>(category: K): AppSettings[K] {
    return this.settings[category];
  }

  getAll(): AppSettings {
    return this.settings;
  }

  set<K extends keyof AppSettings>(category: K, patch: Partial<AppSettings[K]>): void {
    this.settings = {
      ...this.settings,
      [category]: { ...this.settings[category], ...patch },
    };
    this.subject.next(this.settings);
  }

  subscribe(callback: (settings: AppSettings) => void) {
    return this.subject.subscribe(callback);
  }
}

// Single instance — lives outside the component tree
export const settingsService = new SettingsService();
