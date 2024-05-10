import { useState } from "react"

import { Icon } from "@iconify/react"

const links = [
  {
    id: 1,
    session: 'Home',
    href: '#'
  },
  {
    id: 2,
    session: 'Sobre',
    href: '#'
  },
  {
    id: 3,
    session: 'Projetos',
    href: '#'
  },
  {
    id: 4,
    session: 'Contatos',
    href: '#'
  }
]

type Language = {
  type: 'PT' | 'EN'
}

export function Navbar() {
  const [language] = useState<Language>({
    type: 'PT'
  })

  const [darkMode, setDarkMode] = useState<boolean>(true)

  function handleSwitchDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="py-4 flex justify-between items-center shadow-xl">
      <div>
        <h2 className="font-kalam text-text-primary text-2xl font-medium">Robson Wendel</h2>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex justify-between gap-6">
          {links.map((link) => {
            return (
              <li key={link.id} className="p-2">
                <a className="font-heebo font-normal text-text-secondary text-base hover:text-text-primary hover:font-bold duration-200" href={link.href}>
                  {link.session}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-6">
          <button type="button" className="font-heebo font-normal text-text-secondary text-base hover:text-text-primary hover:font-bold duration-200">
            {language.type}
          </button>
          <button 
            onClick={handleSwitchDarkMode}
            type="button" 
            className="font-heebo font-normal text-text-secondary text-base hover:text-text-primary hover:font-bold duration-200"
          >
            <Icon 
              icon={darkMode ? 'carbon:light' : 'carbon:light-filled'}
              width={20}
            />
          </button>
        </div>
      </div>
    </div>
  )
}