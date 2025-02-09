import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">Web Developer & Designer</p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
        >
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  )
}

