"use client";

import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { Divider } from "@/components/Divider";
import { projects } from "@/data/projectsData";
import { Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(params.slug);
  const project = projects.find((p) => p.name === decodedSlug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <Layout title={project.name}>
        <h1 className="font-bold text-xl mb-4">{project.name}</h1>
        <Divider />
        <div className="md:flex md:mt-10">
          {/* Left div */}
          <div className="md:w-1/4 mb-8">
            <div className="md:sticky md:top-16 md:mt-12">
              <p className="mb-4">{project.description}</p>
              <div className="flex items-center mt-2 mb-6">
                <Github className="mr-2" />
                <Link
                  href={project.url}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  View Project
                </Link>
              </div>
              <div className="mt-6">
                <h2 className="font-semibold text-lg mb-2">Technologies:</h2>
                <div className="flex justify-start items-center gap-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-accent border border-accent-400 dark:bg-accent-950 dark:border-accent-600"
                    >
                      <h1 className="font-semibold">{tech}</h1>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right div */}
          <div className="md:w-3/4 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg mb-2">Scenario</h2>
              <p>{project.scenario || "Not provided"}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg mb-2">Main Problem</h2>
              <p>{project.problem || "Not provided"}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg mb-2">Project Goals</h2>
              <ul className="list-disc pl-5">
                {project.goals.length > 0 ? (
                  project.goals.map((goal, index) => (
                    <li key={index} className="mb-1">
                      {goal}
                    </li>
                  ))
                ) : (
                  <li>No goals provided</li>
                )}
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="font-semibold text-lg mb-2">My Role</h2>
              <p>{project.role || "Not provided"}</p>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
