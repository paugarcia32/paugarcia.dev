import React, { useState } from 'react';
import { PostMetadata } from '@/components/PostMetadata';
import { PostCard } from '@/components/cards';
import { TagIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaginationSection from '@/components/PaginationSection';

interface PostContentProps {
  posts: PostMetadata[];
}

const PAGE_SIZE = 6;

const PostContent: React.FC<PostContentProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | undefined>('');

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const handleTagChange = (value: string) => {
    setSelectedTag(value === '' ? undefined : value);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearchTerm =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSelectedTag = !selectedTag || selectedTag === '' || post.tags.includes(selectedTag);

    return matchesSearchTerm && matchesSelectedTag;
  });

  const indexOfLastPost = currentPage * PAGE_SIZE;
  const indexOfFirstPost = indexOfLastPost - PAGE_SIZE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);

  return (
    <div className='max-w-6xl'>
      <div className='flex justify-center'>
        <Input
          className='mb-4 max-w-xl mx-8'
          type="text"
          placeholder="Search Posts ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="md:flex">
        <div className="md:w-1/4 mx-8 md:mx-4">
          <div className="md:sticky md:top-12 md:mt-10">
            <Select
              value={selectedTag || ''}
              onValueChange={handleTagChange}
            >
              <SelectTrigger className="max-w-xl">
                <TagIcon className="text-2xl pointer-events-none flex-shrink-0 text-primary" />
                <SelectValue placeholder="Filter by Tag" />
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
        <div className="md:w-3/4 md:mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl gap-4 my-10">
            {currentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
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
      </div>
    </div>
  );
};

export default PostContent;
