import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          YourName
        </Link>
        <nav>
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
      </div>
    </header>
  )
}

