import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projDirectory = path.join(process.cwd(), "_projects");

export function getProjSlugs() {
  return fs.readdirSync(projDirectory);
}

export function getProjBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(projDirectory, realSlug, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Project = {
    [key: string]: string;
  };

  const proj: Project = {};

  fields.forEach((field) => {
    if (field === "slug") {
      proj[field] = realSlug;
    }
    if (field === "content") {
      proj[field] = content;
    }

    if (data[field]) {
      proj[field] = data[field];
    }
  });

  return proj;
}

export function getAllProjs(fields: string[] = []) {
  const slugs = getProjSlugs();
  const projs = slugs.map((slug) => getProjBySlug(slug, fields));
  return projs;
}
