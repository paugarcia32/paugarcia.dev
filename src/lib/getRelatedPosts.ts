// lib/getRelatedPosts.ts
import getPostMetadata from "./getPostMetadata";
import { PostMetadata } from "@/components/PostMetadata";

const getRelatedPosts = (
  tags: string[],
  currentSlug: string,
): PostMetadata[] => {
  const allPosts = getPostMetadata();
  const relatedPosts = allPosts.filter(
    (post) =>
      post.slug !== currentSlug && post.tags.some((tag) => tags.includes(tag)),
  );
  return relatedPosts.slice(0, 3);
};

export default getRelatedPosts;
