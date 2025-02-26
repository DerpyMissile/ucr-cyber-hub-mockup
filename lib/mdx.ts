import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MDXFrontMatter } from "@/lib/types";
import { slugify } from "@/lib/utils";

const root = process.cwd();

export const postsPath = path.join(root, "posts");

export const getMdx = (fileName: string) => {
  const fullPath = path.join(postsPath, fileName);
  const docSource = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(docSource);

  return {
    frontMatter: {
      ...data,
      slug: fileName.replace(".mdx", ""),
    } as MDXFrontMatter,
    content,
  };
};

export const getAllMdx = () => {
  const items = fs.readdirSync(postsPath).map((item) => getMdx(item));
  // return items.sort(
  //   (a, b) =>
  //     new Date(b.frontMatter.date).getTime() -
  //     new Date(a.frontMatter.date).getTime()
  // );
  return items.sort((a, b) => {
    const lowerA = slugify(a.frontMatter.title);
    const lowerB = slugify(b.frontMatter.title);
    if (lowerA < lowerB) return -1;
    if (lowerA > lowerB) return 1;
    return 0;
  });
};
