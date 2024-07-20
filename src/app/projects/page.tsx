"use client";

import Layout from "@/components/Layout";
import { Divider } from "@/components/Divider";
import { ProjectCard } from "@/components/cards";
import Link from "next/link";
import { projects } from "@/data/projectsData"; // Importa los proyectos

export default function Projects() {
  return (
    <main className="container mx-auto p-4">
      <Layout title="Projects">
        <h1 className="font-bold text-xl mb-4">Projects</h1>
        <Divider />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4">
          {projects.map((project, index) => (
            <div key={index} className="mb-4 w-full">
              <Link href={`/projects/${encodeURIComponent(project.name)}`}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  url={project.url}
                />
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
}
