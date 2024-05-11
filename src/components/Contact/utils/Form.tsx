import { Button } from '../../Button'

export function Form() {
  return (
    <form className="flex flex-col gap-4 min-w-[500px]">
      <label className="block w-ful">
        <input
          type="text"
          className="bg-surface-background px-4 py-3 rounded-md text-text-primary w-full focus:outline focus:outline-secondary-color"
          placeholder="Nome"
        />
      </label>
      <label className="block w-full">
        <input
          type="text"
          className="bg-surface-background px-4 py-3 rounded-md text-text-primary w-full focus:outline focus:outline-secondary-color"
          placeholder="E-mail"
        />
      </label>
      <label className="block w-full">
        <textarea
          rows={5}
          className="bg-surface-background px-4 py-3 rounded-md text-text-primary w-full focus:outline focus:outline-secondary-color"
          placeholder="Sua mensagem"
        />
      </label>
      <Button type="PRIMARY" label="Enviar" />
    </form>
  )
}
