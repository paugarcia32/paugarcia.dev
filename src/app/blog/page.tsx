import getPostMetadata from "@/components/getPostMetadata";
import PostContent from "@/components/PostContent";

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  return (
    <main className="max-w-lg sm:max-w-xl mx-auto">
      {/* <PostContent posts={postMetadata}/> */}
    </main>
  //
  )
};