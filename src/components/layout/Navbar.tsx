import { linksPrimary, linksSecondary } from './data/links'

type Props = {
  type: 'PRIMARY' | 'SECONDARY'
}

export function Navbar({ type = 'PRIMARY' }: Props) {
  return (
    <div className="py-4 flex justify-between items-center shadow-xl">
      <div>
        <h2 className="font-kalam text-text-primary text-2xl font-medium">
          Robson Wendel
        </h2>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex justify-between gap-6">
          {type === 'PRIMARY' &&
            linksPrimary.map((link) => {
              return (
                <li key={link.id} className="p-2">
                  <a
                    className="font-heebo font-normal text-text-secondary text-base hover:text-text-primary hover:font-bold duration-200"
                    href={link.href}
                    rel="noreferrer"
                  >
                    {link.session}
                  </a>
                </li>
              )
            })}
          {type === 'SECONDARY' &&
            linksSecondary.map((link) => {
              return (
                <li key={link.id} className="p-2">
                  <a
                    className="font-heebo font-normal text-text-secondary text-base hover:text-text-primary hover:font-bold duration-200"
                    href={link.href}
                    rel="noreferrer"
                  >
                    {link.session}
                  </a>
                </li>
              )
            })}
          <li className="p-2">
            <a
              className="font-heebo font-normal text-text-secondary text-base hover:text-text-primary hover:font-bold duration-200"
              href="https://robsu17.github.io/resume/"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
