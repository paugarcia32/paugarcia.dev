import { Divider } from "@/components/Divider";
import { ProjectCard } from "@/components/contact-cards";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  url: string; // Nueva propiedad
}

const projects: Project[] = [
  {
    name: "Project One",
    description: "Description for project one.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://www.itodyssey.dev/images/embeddedLogo.jpg", // Reemplaza con la URL de la imagen del proyecto
    url: "https://example.com/project-one", // URL del proyecto
  },
  {
    name: "Project Two",
    description: "Description for project two.",
    technologies: ["Next.js", "JavaScript", "CSS"],
    image:
      "https://www.liquidplanner.com/wp-content/uploads/2019/04/7022318_IT-big-projects.jpg", // Reemplaza con la URL de la imagen del proyecto
    url: "https://example.com/project-two", // URL del proyecto
  },
  // Agrega más proyectos según sea necesario
];

export default function Projects() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="font-bold text-xl mb-4">Projects</h1>
      <Divider />
      <div className="flex flex-col sm:flex-row mt-4 justify-between">
        {projects.map((project, index) => (
          <div key={index} className="px-2 mb-4 w-full ">
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
    </main>
  );
}
