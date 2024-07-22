"use client";

import { notFound } from "next/navigation";
import Layout from "@/components/style/Layout";
import { Divider } from "@/components/style/Divider";
import { projects } from "@/data/projectsData";
import { Github } from "lucide-react";
import { Heading1, Heading2, Heading3 } from "@/components/style/Headings";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/cards";
import { Button } from "@/components/ui/button";

// Función para obtener proyectos relacionados basados en tecnologías
const getRelatedProjects = (technologies: string[], currentSlug: string) => {
  return projects
    .filter(
      (project) =>
        project.name !== currentSlug &&
        project.technologies.some((tech) => technologies.includes(tech)),
    )
    .slice(0, 3); // Limitar a 3 proyectos relacionados
};

const RelatedProjectsSection = ({
  technologies,
  currentSlug,
}: {
  technologies: string[];
  currentSlug: string;
}) => {
  const relatedProjects = getRelatedProjects(technologies, currentSlug);

  return (
    <div className="mt-10 text-center">
      <Heading2>Related Projects</Heading2>
      <div className="flex flex-wrap justify-center gap-6">
        {relatedProjects.map((project) => (
          <div
            className="flex-shrink-0"
            style={{ width: "300px" }}
            key={project.name}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

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
        <Heading1>{project.name}</Heading1>
        <Divider />
        <div className="md:flex md:mt-10">
          {/* Left div */}
          <div className="md:w-1/4 mb-8">
            <div className="py-4">
              <div className="mb-4">
                <div className="flex justify-start items-center gap-0.5 flex-wrap">
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
              <p className="mb-4">{project.description}</p>
              <Link
                href={project.url}
                passHref
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button className="flex items-center" rel="noopener noreferrer">
                  <Github className="m-2 h-4 w-4" />
                  View Project
                </Button>
              </Link>
            </div>
          </div>
          {/* Right div */}
          <div className="md:w-3/4 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 ">
              <Heading3>Scenario</Heading3>
              <p>{project.scenario || "Not provided"}</p>
            </div>
            <div className="p-4 ">
              <Heading3>Main Problem</Heading3>
              <p>{project.problem || "Not provided"}</p>
            </div>
            <div className="p-4 ">
              <Heading3>Project Goals</Heading3>
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
            <div className="p-4 ">
              <Heading3>My Role</Heading3>
              <p>{project.role || "Not provided"}</p>
            </div>
          </div>
        </div>
        {/* Related Projects Section */}
        <RelatedProjectsSection
          technologies={project.technologies}
          currentSlug={project.name}
        />
      </Layout>
    </main>
  );
}
