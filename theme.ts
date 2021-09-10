import { createGlobalStyle, DefaultTheme } from "styled-components";
import "normalize.css";
import "react-toggle/style.css";

export const lightTheme: DefaultTheme = {
  colors: {
    background: "#fff",
    primary: "#302ae6",
    secondary: "#536390",
    font: "#424242",
    heading: "#292922",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: "#161625",
    primary: "#9a97f3",
    secondary: "#818cab",
    font: "#e1e1ff",
    heading: "#818cab",
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
  }

  :is(h1, h2, h3, h4, h5, h6) {
    font-family: "Bebas Neue", cursive;
    color: ${({ theme }) => theme.colors.heading};
  }

  main {
    padding: 1rem;
  }
`;
