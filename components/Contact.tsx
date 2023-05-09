"use client";

import Link from "next/link";
import styles from "./Contact.module.scss";
import { useState } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.contact + " " + (isOpen ? styles.open : "")}>
      <button
        onClick={() => setIsOpen((open) => !open)}
        className={styles.button}
      >
        Contact
      </button>

      <ul className={styles.contactlist}>
        <li className={styles.contactlink}>
          <Link href="#">A</Link>
        </li>
        <li className={styles.contactlink}>
          <Link href="#">B</Link>
        </li>
        <li className={styles.contactlink}>
          <Link href="#">C</Link>
        </li>
      </ul>
    </div>
  );
}
