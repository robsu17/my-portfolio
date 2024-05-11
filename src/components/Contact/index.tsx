import { Form } from './utils/Form'
import { Socials } from './utils/Socials'

export function Contact() {
  return (
    <div className="flex justify-between bg-surface-primary p-8 rounded-xl my-12">
      <Socials />
      <Form />
    </div>
  )
}
