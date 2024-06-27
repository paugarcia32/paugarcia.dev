import matter from 'gray-matter';
import { PostMetadata } from '../components/PostMetadata';
import fs from 'fs';
import path from 'path';

const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      banner: matterResult.data.banner,
      tags: matterResult.data.tags,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetadata;
