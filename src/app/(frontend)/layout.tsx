import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const FrontednLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default FrontednLayout
