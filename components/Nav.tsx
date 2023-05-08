import { getAllProjs } from "@/lib/api";
import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  const projs = getAllProjs(["title", "slug"]);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.name}>
        Sasha
        <br />
        Klein
      </h1>
      <ul className={styles.navlist}>
        {projs.map((proj) => (
          <li key={proj.slug}>
            <Link className={styles.navlink} href={`/projects/${proj.slug}`}>{proj.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
