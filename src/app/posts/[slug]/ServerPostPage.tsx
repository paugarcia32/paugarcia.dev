// app/posts/[slug]/ServerPostPage.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import getPostContent from "@/lib/getPostContent";
import getPostMetadata from "@/lib/getPostMetadata";
import getRelatedPosts from "@/lib/getRelatedPosts";
import { PostMetadata } from "@/components/PostMetadata";
import PostPageClient from "./PostPageClient";

export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = getPostContent(slug);
  if (!post) {
    return notFound();
  }
  return {
    title: post.data.title,
    description: post.data.subtitle,
  };
}

const ServerPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent(slug);
  if (!post) {
    return notFound();
  }
  const relatedPosts = getRelatedPosts(post.data.tags, slug);

  return <PostPageClient post={post} relatedPosts={relatedPosts} />;
};

export default ServerPostPage;
