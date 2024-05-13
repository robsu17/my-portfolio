import { Icon } from '@iconify/react/dist/iconify.js'

type props = {
  name: string
  description: string
  createdAt: string
  stacks: {
    id: number
    icon: JSX.Element
  }[]
  banner: string
  plataform: string
}

export function ProjectCard({
  name,
  description,
  createdAt,
  stacks,
  banner,
  plataform,
}: props) {
  return (
    <a href="">
      <div className="bg-surface-primary p-6 rounded-2xl min-w-[312px] max-w-[384px] w-full hover:outline hover:outline-1 hover:outline-secondary-color hover:shadow-[0_0px_8px_1px_rgba(125,255,175,0.5)] duration-200">
        <div className="h-[160px] rounded-t-xl overflow-hidden">
          <img src={banner} alt="banner" className="h-full w-full" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-sm text-text-secondary">{createdAt}</h1>
            <div className="flex gap-2">
              {stacks.map((stack) => {
                return stack.icon
              })}
            </div>
          </div>
          <h1 className="text-text-primary font-heebo font-medium text-xl">
            {name}
          </h1>
          <p className="text-text-secondary font-normal font-heebo mt-2">
            {description}
          </p>
          <p className="text-secondary-color mt-2 flex items-center gap-2">
            {plataform === 'Web' ? (
              <Icon icon="mdi:computer" width={20} />
            ) : (
              <Icon icon="fa:mobile" width={12} />
            )}
            {plataform}
          </p>
        </div>
      </div>
    </a>
  )
}
