import styles from "./Nav.module.css";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className={styles.nav}>
      <h1>Brewery Explorer</h1>
    </nav>
  );
}
