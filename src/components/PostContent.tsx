'use client';

import React, { useState, ChangeEventHandler } from 'react';
import { PostMetadata } from '@/components/PostMetadata';
import { PostCard } from '@/components/cards';
import getPostMetadata from '@/components/getPostMetadata';
import { SearchIcon, TagIcon } from 'lucide-react';
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";


interface PostContentProps {
  posts: PostMetadata[];
}


const PAGE_SIZE = 6;

const PostContent: React.FC<PostContentProps> = ({ posts }) => {

  const postMetadata = getPostMetadata();

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | undefined>('');

  const allTags = Array.from(new Set(postMetadata.flatMap(post => post.tags)));

  const handleTagChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const val = e.target.value;
    setSelectedTag(val === '' ? undefined : val);
    setCurrentPage(1);
  };

  const filteredPosts = postMetadata.filter(post => {
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
          color='default'
          type="text"
          placeholder="Search Posts ..."
          // startContent={
          //   <SearchIcon className="text-2xl pointer-events-none flex-shrink-0 text-primary" />
          // }
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="md:flex">
        <div className="md:w-1/4 mx-8 md:mx-4">

          <div className="md:sticky md:top-12 md:mt-10">
            <Select
              value={selectedTag || ''}
              // onChange={handleTagChange}

            >
              <SelectTrigger className="max-w-xl" >
                <TagIcon className="text-2xl pointer-events-none flex-shrink-0 text-primary" />
                <SelectValue placeholder="Filter by Tag" />
              </SelectTrigger>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
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
            {/* <Pagination
              // isCompact
              // showControls
              total={totalPages}
              initialPage={1}
              onChange={setCurrentPage}
            /> */}


          </div>
        </div>
      </div>
    </div>
  )
}

export default PostContent;