import { Title } from '../Title'
import { ProjectCard } from './utils/ProjectCard'

export function Projects() {
  return (
    <div id="projects" className="my-40">
      <Title text="Projetos" />
      <p className="text-text-primary text-2xl font-heebo font-medium text-center">
        Confira alguns dos meus projetos
      </p>
      <div className="flex justify-center my-8">
        <div className="grid grid-cols-3 gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}
