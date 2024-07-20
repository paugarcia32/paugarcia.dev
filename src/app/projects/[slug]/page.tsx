"use client";

import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { Divider } from "@/components/Divider";
import { projects } from "@/data/projectsData"; // Importa los proyectos
import { Link } from "lucide-react";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Decodifica el slug para asegurar que la comparación sea correcta
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
        <div className="flex flex-col items-center">
          <img
            src={project.image}
            alt={project.name}
            className="w-full max-w-lg h-auto mb-4"
          />
          <p className="mb-4">{project.description}</p>
          <h2 className="font-semibold text-lg">Technologies:</h2>
          <ul className="list-disc pl-5 mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <Link
            href={project.url}
            target="_blank"
            className="text-blue-500 underline"
          >
            View Project
          </Link>
        </div>
      </Layout>
    </main>
  );
}
