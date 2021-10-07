import styled from "styled-components";
import useTheme, { ThemeTypes } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { themeType, toggleTheme } = useTheme();

  return (
    <StyledNav>
      <h1>Brewery Explorer</h1>
      <ThemeToggle
        checked={themeType === ThemeTypes.Dark}
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
