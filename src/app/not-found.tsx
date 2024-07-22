/* eslint-disable react/no-unescaped-entities */
"use client";

// pages/not-found.tsx

import Link from "next/link";
import Layout from "@/components/style/Layout";
import { Heading1, Heading3 } from "@/components/style/Headings";
import { Button } from "@/components/ui/button";
import { Contact, NotebookPen, PanelsTopLeft } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Redirect {
  url: string;
  text: string;
  Icon: LucideIcon; // Use "Icon" instead of "icon" to follow React naming conventions
}

const redirects: Redirect[] = [
  {
    url: "/projects",
    text: "My portfolio",
    Icon: PanelsTopLeft,
  },
  {
    url: "/blog",
    text: "My blog page",
    Icon: NotebookPen,
  },
  {
    url: "/contact",
    text: "Contact me",
    Icon: Contact,
  },
];

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="Page Not Found">
      <main className="flex flex-col items-center justify-center max-h-screen">
        <div className="mb-10">
          <Heading1>Oops</Heading1>
          <Heading3>Page not found😞🤙</Heading3>
          <p className="text-md">
            Something went wrong. This page is missing or you assembled the link
            incorrectly.
          </p>
        </div>
        <div className="">
          <p className="text-lg mb-8">Maybe you were searching for...</p>
          <div className="flex gap-4">
            {redirects.map((event, index) => (
              <Link key={index} href={event.url}>
                <Button>
                  <event.Icon className="mr-2" /> {event.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
