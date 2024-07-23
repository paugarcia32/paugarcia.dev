// /src/app/projects/page.tsx
"use client";

import React, { useState } from "react";
import Layout from "@/components/style/Layout";
import { Divider } from "@/components/style/Divider";
import { ProjectCard } from "@/components/cards";
import { projects as allProjects } from "@/data/projectsData";
import Link from "next/link";
import PaginationSection from "@/components/PaginationSection";
import { Heading1 } from "@/components/style/Headings";
import SearchAndFilterBar from "@/components/SearchAndFilterBar";

const PAGE_SIZE = 6;

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState<
    string | undefined
  >("");
  const [currentPage, setCurrentPage] = useState(1);

  const allTechnologies = Array.from(
    new Set(allProjects.flatMap((project) => project.technologies)),
  );

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearchTerm =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSelectedTechnology =
      !selectedTechnology ||
      selectedTechnology === "" ||
      project.technologies.includes(selectedTechnology);

    return matchesSearchTerm && matchesSelectedTechnology;
  });

  const indexOfLastProject = currentPage * PAGE_SIZE;
  const indexOfFirstProject = indexOfLastProject - PAGE_SIZE;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <main className="max-w-lg sm:max-w-xl">
      <Layout title="Projects">
        <Heading1>Projects</Heading1>
        <Divider />
        <SearchAndFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedFilter={selectedTechnology}
          setSelectedFilter={setSelectedTechnology}
          allFilters={allTechnologies}
          placeholder="Search Projects ..."
          filterPlaceholder="Filter"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentProjects.map((project, index) => (
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
        <div className="flex justify-center mb-6">
          <PaginationSection
            totalPosts={filteredProjects.length}
            postsPerPage={PAGE_SIZE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Layout>
    </main>
  );
}
