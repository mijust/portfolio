import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project. Highlight the key features and technologies used.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project 2",
    description:
      "Description of your second project. Explain what problem it solves and how you approached the solution.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project 3",
    description: "Details about your third project. Mention any challenges you faced and how you overcame them.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center"
                  >
                    <Github size={20} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

