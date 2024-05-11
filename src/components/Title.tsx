type Props = {
  text: string
}

export function Title({ text }: Props) {
  return (
    <h1 className="font-kalam text-secondary-color text-center mb-2 text-2xl">
      {text}
    </h1>
  )
}
