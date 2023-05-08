import Link from "next/link";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h5 className={styles.header}>Contact</h5>
      <ul className={styles.contactlist}>
        <li>
          <Link href="#">A</Link>
        </li>
        <li>
          <Link href="#">C</Link>
        </li>
        <li>
          <Link href="#">D</Link>
        </li>
        <li>
          <Link href="#">B</Link>
        </li>
      </ul>
    </div>
  );
}
