type Props = {
  type?: 'PRIMARY' | 'SECONDARY';
  label: string;
}

export function Button({  type = 'PRIMARY', label }: Props) {
  return (
    <button
      className={`
        ${ 
          type === 'PRIMARY'
         ? 
         'bg-primary-color-500 hover:bg-primary-color-400' 
         : 
         'bg-surface-secondary hover:bg-surface-tertiary'
         } 
         py-4 px-6 rounded-lg text-text-primary focus:border focus:border-white duration-200 text-base font-heebo font-medium
      `}
    >
      {label}
    </button>
  )
}