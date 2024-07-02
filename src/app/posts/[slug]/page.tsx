import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/lib/getPostMetadata";
import TOC from "@/components/TOC";
import { SearchIcon, TagIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import DownloadButton from "@/components/downloadButton";
import { PostMetadata } from "@/components/PostMetadata";
import { PostCard } from "@/components/cards";
import { Badge } from "@/components/ui/badge";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const RelatedPostsSection = ({
  relatedPosts,
}: {
  relatedPosts: PostMetadata[];
}) => {
  return (
    <div className="mt-10 text-center items-center">
      <h1 className="text-2xl font-title font-semibold mb-4">Related Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.map((relatedPost: PostMetadata) => (
          <PostCard key={relatedPost.slug} {...relatedPost} />
        ))}
      </div>
    </div>
  );
};

const getRelatedPosts = (tags: string[], currentSlug: string) => {
  const allPosts = getPostMetadata();
  const relatedPosts = allPosts.filter(
    (post) =>
      post.slug !== currentSlug && post.tags.some((tag) => tags.includes(tag)),
  );
  return relatedPosts.slice(0, 3);
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const relatedPosts = getRelatedPosts(post.data.tags, slug);

  return (
    <div className="w-full p-4">
      <div className="">
        <div className="my-6 text-center items-center">
          <h1 className="text-2xl font-title mb-4">{post.data.title}</h1>
          <div className="max-w-md mx-auto text-center">
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              {post.data.subtitle}
            </p>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              {post.data.date}
            </p>
          </div>
        </div>

        <div className="md:flex md:mt-10">
          <div className="md:w-1/4 ">
            <div className="md:sticky md:top-16 md:mt-12">
              <div className="flex justify-start items-center gap-2 flex-wrap mb-4">
                <TagIcon />
                {post.data.tags &&
                  post.data.tags.length > 0 &&
                  post.data.tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      className="bg-accent border border-accent-400 dark:bg-accent-950 dark:border-accent-600"
                    >
                      <h1 className="font-semibold">{tag}</h1>
                    </Badge>
                  ))}
              </div>
              <TOC />
            </div>
          </div>

          <div className="md:w-3/4 md:pl-8">
            <article className="prose dark:prose-invert prose:font-body prose-headings:font-title prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-7.5 prose-h2:mb-2.5 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 prose-h4:text-lg prose-h4:mt-5 prose-h4:mb-1.5 prose-a:text-accent hover:prose-a:underline prose-a:no-underline prose-img:mx-auto">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
        <div className="font-body mb-10 items-center text-center">
          <Separator className="my-4" />
          <p className="mb-4">
            If you liked this post, you can download it in PDF format!
          </p>
          <div className="">
            <DownloadButton slug={slug} />
          </div>
        </div>
        <div className="m-0 pb-4 mx-auto leading-relaxed px-1.5 md:px-10 lg:px-20">
          {relatedPosts.length > 0 && (
            <RelatedPostsSection relatedPosts={relatedPosts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
