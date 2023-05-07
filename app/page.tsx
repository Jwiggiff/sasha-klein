import { getAllProjs } from "@/lib/api";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const projs = getAllProjs(["title", "image", "slug"]);

  return (
    <main>
      <h1>Hello World!</h1>
      <ul>
        {projs.map((proj) => (
          <li key={proj.slug}>
            <a href={`projects/${proj.slug}`}>
              <h3>{proj.title}</h3>
              <img src={proj.image} alt={proj.title} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
