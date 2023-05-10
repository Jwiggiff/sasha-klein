import ProjectsHeader from "@/components/ProjectsHeader";
import "./Projects.scss";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectsHeader />
      <article>{children}</article>
    </>
  );
}
