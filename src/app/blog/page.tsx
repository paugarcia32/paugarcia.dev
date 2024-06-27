'use client';

import React, { useState, useEffect } from 'react';
import PostContent from '@/components/PostContent';
import { PostMetadata } from '@/components/PostMetadata';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/posts`, {
        cache: 'no-store'
      });
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <main className="mx-auto">
      <PostContent posts={posts} />
    </main>
  );
};

export default BlogPage;
