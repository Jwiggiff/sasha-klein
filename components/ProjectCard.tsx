import { getProjBySlug } from "@/lib/api";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";

export default function ProjectCard({ slug }: { slug: string }) {
  const project = getProjBySlug(slug, ["slug", "title", "image"]);

  return (
    <div className={styles.projectcard}>
      <img src={project.image} alt={project.title} />
      <div className={styles.bg_overlay}></div>
      <h2>{project.title}</h2>
    </div>
  );
}
