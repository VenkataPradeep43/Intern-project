import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import logo from '../Images/Farm-logo.png'
import '../Styles/Navbar.css'
export default function Dashboard() {
  const navigate = useNavigate()
  const logout = (e)=>{
    e.preventDefault();
    localStorage.clear();
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt='logo' style={{ width: 60, height: 60 }} />
        <h3 className='nav-heading'>Agro <span>Share</span></h3>
        <ul>
          <li><Link to='' className='nav-button' id='active'>Home</Link></li>
          <li><Link to='myproducts' className='nav-button' id='active'>MyProducts</Link></li>
          <li><Link to='profile' className='nav-button' id='active'> Profile</Link></li>
          <li><Link to='addproduct' className='nav-button' id='active'>Add</Link></li>
          <li><Link to='mybookings' className='nav-button' id='active'> Bookings</Link></li>
          <li><Link to='#' onClick={e=>logout(e)} className='nav-button'>Logout</Link></li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}
