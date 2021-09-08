import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

enum Themes {
  Light = "light",
  Dark = "dark",
}

type ContextProps = {
  theme: Themes;
  toggleTheme: () => null;
};

type ProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ContextProps | {}>({});

export function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState(Themes.Light);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === Themes.Light ? Themes.Dark : Themes.Light
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext) as ContextProps;
}
