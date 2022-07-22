import React, { useEffect, useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'
import Overlay from './Overlay'
import SearchBar from './SearchBar'
import Support from './Support'
import User from './User'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({ cats=[], products=[] }) => {
    const [nav, setNav] = useState(false);
    const [budget, setBudget] = useState(0)
    const handleNav = () => setNav(!nav);

    const getBudget = async () => {
      const response = await fetch('http://localhost:3000/api/db/personal');
      const dataJson = await response.json();
      setBudget(dataJson.budget)
    }

    useEffect(() => {
      getBudget()
    }, [budget])

  return (
    <div className='border-b border-gray-200/90'>
          <Container>
              <header className='p-4 md:p-6 w-full flex items-center'>
                      <Logo />
                    <div className='hidden md:flex items-center justify-between gap-10 flex-1'>
                      <SearchBar cats={cats}/>
                      <Support />
                      <User budget={budget} />
                    </div>
                    <button 
                      className='md:hidden flex items-center flex-1 justify-end'
                      onClick={handleNav}
                      >
                      <AiOutlineMenu size={'25px'} />
                    </button>
                    <Nav nav={nav} handleNav={handleNav} cats={cats} products={products} />
                    {nav && <Overlay />}
              </header>
          </Container>
        </div>
  )
}

export default Header