import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <a href='/'><img src={logo} alt="Ram App Developer" /></a>
      </div>
    <div className="menu">
        <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>

    </div>
  )
}

export default Navbar
