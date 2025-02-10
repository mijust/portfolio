import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Hero from "src/components/Hero"
import About from "src/components/About"
import Projects from "src/components/Projects"
import Contact from "src/components/Contact"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

