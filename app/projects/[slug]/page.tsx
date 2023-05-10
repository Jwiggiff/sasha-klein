import FullWidthImage from "@/components/mdx/FullWidthImage";
import Hero from "@/components/mdx/Hero";
import ThreeColText from "@/components/mdx/ThreeColText";
import { getProjBySlug, getProjSlugs } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { MDXRemote } from "next-mdx-remote/rsc";

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

export function generateMetadata({ params }: any) {
  const proj = getProjBySlug(params.slug, ["title"]);

  return {
    title: `${proj.title} | Sasha Klein`,
  };
}

export default async function ProjectPage({ params }: any) {
  const proj = getProjBySlug(params.slug, ["title", "image", "content"]);

  // const content = await markdownToHtml(proj.content || "");

  const components = {
    Hero: Hero,
    ThreeColText: ThreeColText,
    FullWidthImage: FullWidthImage,
  };

  return <MDXRemote components={components} source={proj.content || ""} />;
}
