const socials = [
  {
    id: 1,
    name: 'Github',
    href: 'https://github.com/robsu17',
  },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/robson-lima-ba5bb31a8/',
  },
]

export function Footer() {
  return (
    <footer className="flex justify-between items-center py-8 text-text-secondary text-sm font-heebo font-normal">
      <div>
        <p>
          Robson Wendel 2024. Layout based on
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            rel="noreferrer"
            className="mx-1 underline hover:text-text-primary duration-200"
          >
            Rocketseat’s
          </a>
          template.
        </p>
      </div>
      <div className="flex gap-8">
        {socials.map((social) => {
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-primary duration-200"
            >
              {social.name}
            </a>
          )
        })}
      </div>
    </footer>
  )
}
