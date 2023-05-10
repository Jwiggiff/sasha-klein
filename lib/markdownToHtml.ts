import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkMdx from "remark-mdx";
import { serialize } from "next-mdx-remote/serialize";

export default async function markdownToHtml(markdown: string) {
  // const result = await unified()
  //   .use(remarkParse)
  //   .use(remarkRehype, { allowDangerousHtml: true })
  //   .use(rehypeStringify, { allowDangerousHtml: true })
  //   .process(markdown);
  // return result.toString();

  const result = await serialize(markdown);
  // console.log(markdown);
  return result;
}
