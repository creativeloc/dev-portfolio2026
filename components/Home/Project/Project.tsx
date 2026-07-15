import SectionHeading from "@/components/Helper/SectionHeading"
import { projects } from "@/data"
import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div className="py-16 bg-cyan-50 dark:bg-gray-900">
      <SectionHeading
        title_1="Featured"
        title_2="Projects"
        description="A Selection of Some My Recent Work and Side Projects"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, index) => {
          return (
            <div key={index} className="pb-6">
              <ProjectCard {...project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Project
