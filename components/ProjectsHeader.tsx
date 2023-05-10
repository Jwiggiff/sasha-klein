import Link from "next/link";
import styles from "./ProjectsHeader.module.scss";

export default function ProjectsHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.button}>
        Sasha Klein
      </Link>
    </header>
  );
}
