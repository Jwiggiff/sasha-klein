import { getProjBySlug } from "@/lib/api";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";

export default function ProjectCard({ slug }: { slug: string }) {
  const project = getProjBySlug(slug, ["slug", "title", "image"]);

  return (
    <Link href={`projects/${project.slug}`} className={styles.projectcard}>
      <img src={project.image} alt={project.title} />
      <div className={styles.bg_overlay}></div>
      <h3>{project.title}</h3>
    </Link>
  );
}
