// /src/app/blog/page.tsx

import React, { useState } from "react";
import { PostMetadata } from "@/components/PostMetadata";
import { PostCard } from "@/components/cards";
import PaginationSection from "@/components/PaginationSection";
import SearchAndFilterBar from "@/components/SearchAndFilterBar";

interface PostContentProps {
  posts: PostMetadata[];
}

const PAGE_SIZE = 6;

const PostContent: React.FC<PostContentProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | undefined>("");

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const filteredPosts = sortedPosts.filter((post) => {
    const matchesSearchTerm =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSelectedTag =
      !selectedTag || selectedTag === "" || post.tags.includes(selectedTag);

    return matchesSearchTerm && matchesSelectedTag;
  });

  const indexOfLastPost = currentPage * PAGE_SIZE;
  const indexOfFirstPost = indexOfLastPost - PAGE_SIZE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-lg sm:max-w-xl">
      <SearchAndFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilter={selectedTag}
        setSelectedFilter={setSelectedTag}
        allFilters={allTags}
        placeholder="Search Posts ..."
        filterPlaceholder="Tags"
      />
      <div className="md:flex md:flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl gap-1 my-10">
          {currentPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <PaginationSection
          totalPosts={filteredPosts.length}
          postsPerPage={PAGE_SIZE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PostContent;
