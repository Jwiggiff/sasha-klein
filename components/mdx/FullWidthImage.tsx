export default function FullWidthImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="full-width">
      <img src={src} alt={alt} />
    </div>
  );
}
