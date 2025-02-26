"use client";

import { SPACE, GITHUB_space } from "../constants/links";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "UI Digital Campus",
    description: "A interactive WebApp with argumented reality features for visitors to learn and interact with the campus.",
    image: "/projects_img/uidc.png",
    liveLink: "#",
    githubLink: "#",
    tags: ["React", "Next.js", "Tailwind CSS", "A-Frame", "MongoDB"],
    isInternal: true,
  },
  {
    title: "Space Dashboard",
    description:
      "A Dashboard showing Nasa Pictures and Information fetched with APIs.",
    image: "/projects_img/space.png",
    liveLink: SPACE,
    githubLink: GITHUB_space,
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "NASA API"],
    isInternal: false,
  },
  {
    title: "Project 3 - TBD",
    description: "Details about your third project. Mention any challenges you faced and how you overcame them.",
    image: "/placeholder.jpg?height=300&width=400",
    liveLink: "#",
    githubLink: "#",
    tags: ["TBD"],
    isInternal: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-500">My Projects</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}