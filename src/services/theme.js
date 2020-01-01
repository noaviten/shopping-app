import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    colors: {
      primary: "#a48fb1",
      secondary: "#ffffff"
    }
  };
  
const darkTheme = {
    colors: {
      primary: "#313131",
      secondary: "#a48fb1"
    }
  };

const themes = { 'lightTheme':lightTheme, 'darkTheme':darkTheme};
const themeNames = ["lightTheme", "darkTheme"];
const [initialTheme] = themeNames;

const ThemeContext = createContext();

export const ThemeConsumer = ThemeContext.Consumer;

export const useThemeService = () => {
  return useContext(ThemeContext);
};

export function ThemeService({ children }) {
  const [themeName, setThemeName] = useState(initialTheme);
  const theme = themes[themeName];
  const toggleTheme = () => {
    const indexOfCurrentTheme = themeNames.indexOf(themeName);
    const indexOfNextTheme = (indexOfCurrentTheme + 1) % themeNames.length;
    setThemeName(themeNames[indexOfNextTheme]);
  };
  const ctx = {
    themeName,
    themeNames,
    setTheme: setThemeName,
    toggleTheme
  };
  return (
    <ThemeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}