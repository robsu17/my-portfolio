import { Button } from './Button'

import computer from '../assets/computer.png'

export function Apresentation() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="text-[40px] font-kalam font-normal text-text-primary">
          Olá, meu nome é Robson
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="font-heebo text-2xl font-medium text-text-primary">
            Desenvolvedor Full-stack
          </h2>
          <p className="font-heebo text-base font-normal text-text-secondary">
            Over 4 years of experience in the tech industry. I specialize in
            building innovative web and mobile applications using technologies
            such as React, React Native, and Node.js.
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
