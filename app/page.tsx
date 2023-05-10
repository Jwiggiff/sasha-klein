import { getProjSlugs } from "@/lib/api";
import styles from "./Home.module.scss";
import Nav from "@/components/Nav";
import Scroller from "@/components/Scroller";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

export default function Home() {
  const projs = getProjSlugs();
  const driftSpeed = 0.25;

  return (
    <main className={styles.home}>
      <Contact />
      <Nav />
      <div className={styles.gallery}>
        <Scroller drift={driftSpeed}>
          {projs.map((slug) => (
            <ProjectCard key={slug} slug={slug} />
          ))}
        </Scroller>
        <Scroller drift={-driftSpeed}>
          {projs.map((slug) => (
            <ProjectCard key={slug} slug={slug} />
          ))}
        </Scroller>
        <Scroller drift={driftSpeed}>
          {projs.map((slug) => (
            <ProjectCard key={slug} slug={slug} />
          ))}
        </Scroller>
      </div>
    </main>
  );
}
