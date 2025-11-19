import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import './navbar.css'
import Logo from '/images/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whgtp3">What is GPT3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //BEM = Block Element Modifier
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gtp3__navbar-link_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
