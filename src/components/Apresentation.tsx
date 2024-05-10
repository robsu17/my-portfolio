import { Button } from './Button'

import computer from '../assets/computer.png'

export function Apresentation() {
  return (
    <div className="grid grid-cols-2 my-24 mx-12">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="text-[40px] bg-gradient-to-r from-primary-color-400 to-secondary-color text-transparent bg-clip-text">
          Olá, meu nome é Robson
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="font-heebo text-2xl font-medium text-text-primary">
            Desenvolvedor Full-stack
          </h2>
          <p className="font-heebo text-base font-normal text-text-secondary">
            Tenho acumulado sete meses de experiência no domínio das tecnologias
            de desenvolvimento, com especialização no desenvolvimento de sites
            multiplataforma. Minha expertise abrange o uso proficientes de HTML,
            CSS, JavaScript, PHP, React Native, Next.js e Laravel.
          </p>
        </div>
        <div className="flex gap-4">
          <Button type="SECONDARY" label="Meu resumo" />
          <Button type="PRIMARY" label="Entrar em contato" />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={computer} alt="computer-logo" />
      </div>
    </div>
  )
}
