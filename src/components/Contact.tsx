import { Mail, Linkedin, Github } from "lucide-react"
import { EMAIL, LINKEDIN, GITHUB } from "../constants/links"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Get In Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-lg mb-8 text-gray-400">
            I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to
            say hello, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a href={EMAIL} className="text-blue-500 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

