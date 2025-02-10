import { Download, Briefcase, GraduationCap, Code } from "lucide-react"

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string[]
}

type EducationItem = {
  degree: string
  institution: string
  year: string
}

type SkillCategory = {
  category: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: [
      "Lead a team of 5 developers in creating responsive web applications",
      "Implemented CI/CD pipelines, reducing deployment time by 40%",
      "Optimized website performance, improving load times by 25%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description: [
      "Developed and maintained multiple client websites using React and Node.js",
      "Integrated third-party APIs to enhance website functionality",
      "Collaborated with UX designers to implement user-friendly interfaces",
    ],
  },
]

const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    year: "2017",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    year: "2015",
  },
]

const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Web Technologies",
    skills: ["React", "Next.js", "Node.js", "Express", "HTML5", "CSS3"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Firebase", "MongoDB"],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-500">Resume</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <Briefcase className="mr-2" size={24} />
                Experience
              </h2>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-8 bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                  <p className="text-blue-200">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <GraduationCap className="mr-2" size={24} />
                Education
              </h2>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-6 bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-300">{edu.degree}</h3>
                  <p className="text-blue-200">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <Code className="mr-2" size={24} />
                Skills
              </h2>
              {skills.map((category, index) => (
                <div
                  key={index}
                  className="mb-6 bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Download className="mr-2" size={20} />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

