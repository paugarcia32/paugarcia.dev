import React, { useState } from "react";
import { PostMetadata } from "@/components/PostMetadata";
import { PostCard } from "@/components/cards";
import { Tags } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaginationSection from "@/components/PaginationSection";

interface PostContentProps {
  posts: PostMetadata[];
}

const PAGE_SIZE = 6;

const PostContent: React.FC<PostContentProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | undefined>("");

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  const handleTagChange = (value: string) => {
    setSelectedTag(value === "" ? undefined : value);
    setCurrentPage(1);
  };

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
      <div className="flex justify-center items-center mb-4 space-x-2 border rounded-md shadow-sm">
        <Input
          className="flex-grow max-w-xl border-none"
          type="text"
          placeholder="Search Posts ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="m-1 pr-1">
          {" "}
          <Select value={selectedTag || ""} onValueChange={handleTagChange}>
            <SelectTrigger className="w-32 border-none dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-zinc-800">
              <Tags className="text-primary" />
              <SelectValue placeholder="Tags" />
            </SelectTrigger>
            <SelectContent>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
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
