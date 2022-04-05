import { defineStore } from "pinia";

export const useTheme = defineStore("useTheme", {
  state: () => ({
    isDarkMode: true,
  }),
  getters: {
    currentTheme: (state): string =>
      state.isDarkMode === true ? "dark" : "light",
    systemTheme: (): boolean =>
      window.matchMedia("(prefers-color-scheme:dark)").matches,
  },
  actions: {
    toggleThemeMode(): void {
      this.isDarkMode = !this.isDarkMode;
    },
  },
});
