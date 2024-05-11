import { Techs } from './utils/Techs'
import { Info } from './utils/InfoAbout'

export function About() {
  return (
    <div
      id="sobre"
      className="flex flex-col gap-4 bg-surface-primary p-8 rounded-xl"
    >
      <Info />
      <Techs />
    </div>
  )
}
