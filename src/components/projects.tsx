import Image from "next/image"

import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Project ${i}`}
                  className="rounded-lg object-cover"
                  width={400}
                  height={200}
                />
                <CardTitle>Project {i}</CardTitle>
                <CardDescription>A short description of the project</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is where you can add more details about your project.</p>
              </CardContent>
              <CardFooter>
                <Button>View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

