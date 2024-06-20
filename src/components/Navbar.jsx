import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <a href='/'><img src={logo} alt="Logo" /></a>
      </div>
    <div className="menu">
        <ul>
            <li><a href='/about'>About</a></li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>

    </div>
  )
}

export default Navbar
