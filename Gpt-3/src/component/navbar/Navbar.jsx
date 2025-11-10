import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import Logo from '/images/logo.svg'
const Navbar = () => {

  //BEM = Block Element Modifier
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gtp3__navbar-link_logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
