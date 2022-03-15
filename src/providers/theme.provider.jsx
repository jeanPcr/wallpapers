import { useState } from "react";
import { ThemeContext } from "../contexts/theme.context";

export const ThemeProvider = (props) => {
  const [isDark, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!isDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
