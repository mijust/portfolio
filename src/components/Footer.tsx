import Link from "next/link"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-blue-500">
              YourName
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="#about" className="hover:text-blue-500 transition-colors text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-500 transition-colors text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-500 transition-colors text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

