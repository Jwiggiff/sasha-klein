import styles from "./ThreeColText.module.scss";

export default function ThreeColText({
  left,
  right,
  children,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.threecoltext}>
      <span>{left}</span>
      <div>{children}</div>
      <span>{right}</span>
    </div>
  );
}
