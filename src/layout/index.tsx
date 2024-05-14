import React from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

type Props = {
  children: React.ReactNode
  navbarType: 'PRIMARY' | 'SECONDARY'
}

export function Layout({ children, navbarType }: Props) {
  return (
    <div className="bg-surface-background w-screen min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6">
        <Navbar type={navbarType} />
        {children}
        <Footer />
      </div>
    </div>
  )
}
