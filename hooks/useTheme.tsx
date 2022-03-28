import React, { createContext, useContext, useState, ReactNode } from "react";
import { Theme, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../theme";

type ContextProps = {
  theme: Theme;
  themeType: ThemeTypes;
  toggleTheme: () => null;
};

type ProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ContextProps | {}>({});

export enum ThemeTypes {
  Light = "light",
  Dark = "dark",
}

const themes = {
  [ThemeTypes.Light]: lightTheme,
  [ThemeTypes.Dark]: darkTheme,
};

export function ThemeContextProvider({ children }: ProviderProps) {
  const [themeType, setTheme] = useState(ThemeTypes.Dark);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === ThemeTypes.Light ? ThemeTypes.Dark : ThemeTypes.Light
    );
  }

  return (
    <ThemeProvider
      theme={themeType === ThemeTypes.Light ? lightTheme : darkTheme}
    >
      <ThemeContext.Provider
        value={{
          theme: themes[themeType],
          themeType,
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
