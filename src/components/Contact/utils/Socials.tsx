import { Icon } from '@iconify/react/dist/iconify.js'

export function Socials() {
  return (
    <div className="self-center">
      <h1 className="font-kalam text-secondary-color mb-2 text-xl">Contatos</h1>
      <div>
        <h1 className="text-text-primary font-heebo text-2xl font-medium">
          Gostou do meu trabalho? Entre em contato
        </h1>
        <p className="text-text-secondary">
          Envie um e-mail{' '}
          <span className="text-secondary-color">
            robson.costa134@gmail.com
          </span>{' '}
          ou entre em contato nas redes sociais{' '}
        </p>
      </div>
      <div className="flex items-center gap-2 text-2xl text-text-secondary mt-4">
        <a
          href="https://www.instagram.com/robs_u/"
          className="hover:text-text-primary duration-200"
        >
          <Icon icon="mdi:instagram" />
        </a>
        <a
          href="https://github.com/robsu17"
          className="hover:text-text-primary duration-200"
        >
          <Icon icon="mdi:github" />
        </a>
        <a
          href="https://www.linkedin.com/in/robson-lima-ba5bb31a8/"
          className="hover:text-text-primary duration-200"
        >
          <Icon icon="mdi:linkedin" />
        </a>
      </div>
    </div>
  )
}
