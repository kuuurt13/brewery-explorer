import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../theme";

type ContextProps = {
  theme: Themes;
  toggleTheme: () => null;
};

type ProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ContextProps | {}>({});

export enum Themes {
  Light = "light",
  Dark = "dark",
}

export function ThemeContextProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState(Themes.Light);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === Themes.Light ? Themes.Dark : Themes.Light
    );
  }

  return (
    <ThemeProvider theme={theme === Themes.Light ? lightTheme : darkTheme}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <GlobalStyle />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext) as ContextProps;
}
