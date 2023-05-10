import styles from "./HalfAndHalf.module.scss";

export default function HalfAndHalf({
  image1,
  alt1,
  image2,
  alt2,
}: {
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
}) {
  return (
    <div className={styles.halfAndHalf}>
      <img src={image1} alt={alt1} />
      <img src={image2} alt={alt2} />
    </div>
  );
}
