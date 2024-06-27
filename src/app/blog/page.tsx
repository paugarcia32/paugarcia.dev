import React from 'react';
import PostContent from '@/components/PostContent';
import { PostMetadata } from '@/components/PostMetadata';

const BlogPage = async () => {
  // Construir la URL completa para la llamada fetch
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/posts`, {
    cache: 'no-store' // Evitar el caché para datos frescos
  });
  const posts: PostMetadata[] = await response.json();

  return (
    <main className=" mx-auto">
      <PostContent posts={posts} />
    </main>
  );
};

export default BlogPage;


