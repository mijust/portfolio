import { Github, Linkedin, Twitter } from "lucide-react"

import Button from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4">
          <Button size="icon" variant="ghost">
            <Github className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">© 2023 YourName. All rights reserved.</p>
      </div>
    </footer>
  )
}

