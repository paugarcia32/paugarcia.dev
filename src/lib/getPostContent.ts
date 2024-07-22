// lib/getPostContent.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), "posts");
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getPostContent;
