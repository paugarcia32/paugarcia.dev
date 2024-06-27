/* eslint-disable react/no-unescaped-entities */
// pages/not-found.tsx

import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center max-h-screen min-h-[1000]">
      <h1 className="text-4xl font-bold mb-8">404 - Not Found</h1>
      <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
      <div className="flex gap-4">
        <Link href="/" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
            Go to Home
        </Link>
        <Link href="/blog" className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark transition duration-300">
            Visit Blog
        </Link>
        <Link href="/contact" className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition duration-300">
            Contact Us
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
