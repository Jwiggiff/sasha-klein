import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className={styles.hero + " full-width"}>
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </div>
  );
}
