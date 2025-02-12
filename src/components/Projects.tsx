import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { GITHUB } from "../constants/links"

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
    title: "Project 2 - TBD",
    description:
      "Description of your second project. Explain what problem it solves and how you approached the solution.",
    image: "/placeholder.jpg?height=300&width=400",
    liveLink: "#",
    githubLink: GITHUB,
    tags: ["TBD"],
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
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-500">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.isInternal ? (
                    <span className="text-gray-500 inline-flex items-center">
                      Internal Project
                    </span>
                  ) : (
                    <>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors"
                      >
                        <ExternalLink size={18} className="mr-1" /> Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors"
                      >
                        <Github size={18} className="mr-1" /> GitHub
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

