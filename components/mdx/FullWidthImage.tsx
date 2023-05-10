import styles from "./FullWidth.module.scss";

export default function FullWidthImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className={styles.fullWidth}>
      <img style={{ width: "100%" }} src={src} alt={alt} />
    </div>
  );
}
