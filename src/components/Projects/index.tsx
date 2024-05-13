import { Button } from '../Button'
import { Title } from '../Title'
import { projectsData } from './data/projects'
import { ProjectCard } from './utils/ProjectCard'

export function Projects() {
  return (
    <div id="projetos" className="my-40">
      <Title text="Projetos" />
      <p className="text-text-primary text-2xl font-heebo font-medium text-center">
        Confira alguns dos meus projetos
      </p>
      <div className="flex flex-col items-center gap-16 justify-center my-8">
        <div className="grid grid-cols-3 gap-8">
          {projectsData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                createdAt={project.createdAt}
                stacks={project.stacks}
                banner={project.banner}
                plataform={project.plataform}
              />
            )
          })}
        </div>
        <div>
          <Button type="SECONDARY" label="Ver todos" />
        </div>
      </div>
    </div>
  )
}
