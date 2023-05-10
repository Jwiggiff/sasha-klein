import styles from "./ImageAndText.module.scss";

export default function ImageAndText({
  image,
  alt,
  imageOn = "left",
  children,
}: {
  image: string;
  alt: string;
  imageOn: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div className={styles.imageAndText}>
      {imageOn === "left" && <img src={image} />}
      <div>{children}</div>
      {imageOn === "right" && <img src={image} />}
    </div>
  );
}
