import ProjectsHeader from "@/components/ProjectsHeader";
import styles from "./Projects.module.scss";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.projectWrapper}>
      <ProjectsHeader />
      <article className={styles.article}>{children}</article>
    </main>
  );
}
