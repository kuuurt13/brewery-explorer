import useTheme from "../../hooks/useTheme";
import styles from "./Nav.module.css";

type Props = {};

export default function Nav({}: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <h1>Brewery Explorer</h1>
      <div className={styles.themeToggle}>
        <button type="button" onClick={() => toggleTheme()}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
