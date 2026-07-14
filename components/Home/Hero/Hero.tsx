"use client"

import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { Download, FolderOpen } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,#2a1323_0.1%,rgba(40,25,46,1)_90%)]">
      {/* content */}
      <div className="relative z-10 text-center">
        {/* subtitle */}
        <div className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8 border-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Hi, I&apos;m Available for Hire
          </span>
        </div>
        {/* title */}
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-cursive mb-6">
          {/* Hi, I&apos;m{" "} */}
          <span className="text-purple-800 dark:text-cyan-400 uppercase">
            Lawrence Caulker
          </span>
        </h1>

        {/* type writing effects */}
        <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
          <TypeAnimation
            sequence={[
              "Nextjs-React Developer",
              2000,
              "FullStack Node Developer",
              2000,
              "WordPress Developer",
              2000,
              "Headless CMS, Content Management",
              2000,
              "MongoDB, PostgreSQL, MySQL",
              2000,
              "RESTful API, GraphQL Skills",
              2000,
              "Figma, Sketch, AdobeXd Designer",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
          Crafting exceptional digital experiences using modern technologies.
          Passionate about building scalable applications and teaching others.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size={"lg"} asChild className="flex w-fit mx-auto sm:mx-0">
            <a href="#_">
              <FolderOpen data-icon="inline-start" className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button size={"lg"} asChild className="flex w-fit mx-auto sm:mx-0">
            <a href="#_">
              <Download data-icon="inline-start" className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Hero
