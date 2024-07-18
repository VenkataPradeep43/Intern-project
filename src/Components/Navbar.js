import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <h3 className='nav-heading'>Agro <span>Share</span></h3>
        <ul>
        <li><Link to='/' className='nav-button' id='active'>Home</Link></li>
        <li><Link to='/tools' className='nav-button'>Tools</Link></li>
        <li><Link to='/login' className='login-button'>Login</Link></li>
        </ul>        
      </nav>
      
    </>
  )
}
