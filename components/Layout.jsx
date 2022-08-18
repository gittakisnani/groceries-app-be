import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ cats=[], products=[], children }) => {
  return (
    <>
        <Header cats={cats} products={products} />
        {children}
        <Footer />
    </>
  )
}

export default Layout