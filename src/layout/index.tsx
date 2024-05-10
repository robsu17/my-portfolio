import React from "react"

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="bg-surface-background w-screen h-screen">
      <div className="max-w-[1440px] mx-auto">  
        {children}
      </div>
    </div>
  )
}