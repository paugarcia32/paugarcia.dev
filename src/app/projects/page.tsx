"use client";

import React, { useState } from "react";
import Layout from "@/components/style/Layout";
import { Divider } from "@/components/style/Divider";
import { ProjectCard } from "@/components/cards";
import { projects as allProjects } from "@/data/projectsData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tags } from "lucide-react";
import Link from "next/link";
import PaginationSection from "@/components/PaginationSection";
import { Heading1 } from "@/components/style/Headings";

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

  const handleTechnologyChange = (value: string) => {
    setSelectedTechnology(value === "" ? undefined : value);
  };

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
        <div className="flex justify-center items-center mb-4 space-x-2 border rounded-md shadow-sm">
          <Input
            className="flex-grow max-w-xl border-none"
            type="text"
            placeholder="Search Projects ..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="m-1 pr-1">
            <Select
              value={selectedTechnology || ""}
              onValueChange={handleTechnologyChange}
            >
              <SelectTrigger className="w-32 border-none dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-zinc-800">
                <Tags className="text-primary" />
                <SelectValue placeholder="Fliter" />
              </SelectTrigger>
              <SelectContent>
                {allTechnologies.map((technology) => (
                  <SelectItem key={technology} value={technology}>
                    {technology}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
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
