export function getStaticPaths() {
  const slugs = getProjSlugs();

  return {
    paths: slugs.map((slug: string) => ({
      params: {
        slug: slug.replace(/\.md$/, ""),
      },
    })),
    fallback: false,
  };
}

import { getProjBySlug, getProjSlugs } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function ProjectPage({ params }: any) {
  const proj = getProjBySlug(params.slug, ["title", "image", "content"]);

  const content = await markdownToHtml(proj.content || "");

  return (
    <>
      <img src={proj.image} alt={proj.title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
