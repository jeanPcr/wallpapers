import { createContext, useContext } from "react";

const DEFAULT_THEME_CONTEXT = {
  isDark: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(DEFAULT_THEME_CONTEXT);

export const useTheme = () => useContext(ThemeContext);
