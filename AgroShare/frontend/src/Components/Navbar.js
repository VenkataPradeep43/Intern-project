import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/Farm-logo.png'
import '../Styles/Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt='logo' style={{ width: 60, height: 60 }} />
        <h3 className='nav-heading'>Agro <span>Share</span></h3>
        <ul>
          <li><Link to='/' className='nav-button' id='nav-button'>Home</Link></li>
          <li><Link to='/register' className='nav-button'>Register</Link></li>
          <li><Link to='/login' className='login-button'>Login</Link></li>
        </ul>
      </nav>
    </>
  )
}
