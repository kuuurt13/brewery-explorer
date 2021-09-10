import styled from "styled-components";
import useTheme, { Themes } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledNav>
      <h1>Brewery Explorer</h1>
      <ThemeToggle
        checked={theme === Themes.Dark}
        onChange={() => toggleTheme()}
      />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: solid 1px grey;

  div:last-child {
    margin-left: auto;
  }
`;
