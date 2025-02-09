import Button from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to My Portfolio
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m a passionate developer creating beautiful and functional web experiences.
            </p>
          </div>
          <div className="space-x-4">
            <Button>View Projects</Button>
            <Button variant="secondary">Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

