import { Icon } from '@iconify/react/dist/iconify.js'
import cover from '../../../assets/card-cover.png'

export function ProjectCard() {
  return (
    <div className="bg-surface-primary p-6 w-fit rounded-2xl min-w-[312px] max-w-[384px]">
      <div className="h-[160px] rounded-t-xl overflow-hidden">
        <img src={cover} alt="cover" className="h-full w-full" />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-sm text-text-secondary">Jul - Dec 2022</h1>
          <div className="flex gap-2">
            <Icon icon="devicon:html5" width={21} />
            <Icon icon="devicon:css3" width={21} />
            <Icon icon="devicon:javascript" width={21} />
          </div>
        </div>
        <h1 className="text-text-primary font-heebo font-medium text-xl">
          Nome do Projeto
        </h1>
        <p className="text-text-secondary font-normal font-heebo mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores
          unde id doloremque officia facilis, eligendi, nulla cupiditate odit
          deserunt beatae quibusdam iure reprehenderit, molestiae soluta
          molestias dignissimos neque qui.
        </p>
      </div>
    </div>
  )
}
