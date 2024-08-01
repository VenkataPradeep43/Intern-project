import React, { useState } from 'react'
import '../Styles/Form.css'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../Images/Farm-logo.png'
import Navbar from './Navbar'
import axios from 'axios'
export default function Register() {
  const [user , setUser] = useState({})
  const navigate = useNavigate()
  const handleInput = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const registerApi = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',user)
    .then((res)=>{
      if(res.data.status){
        navigate('/login')
      }
      else{
        alert(res.data.message)
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      <Navbar />
      <div className='register'>
        <form>
          <div className='logo'>
            <img src={logo} alt='logo' style={{ width: 60, height: 60 }} />
            <h1>Agro Share</h1><br />
          </div>
          <label>First Name</label><br />
          <input type='text' placeholder='John' name="firstName" onChange={e=>handleInput(e)} /><br />
          <label>Last Name</label><br />
          <input type='text' placeholder='Doe' name="lastName" onChange={e=>handleInput(e)}  /><br />
          <label>User Name</label><br />
          <input type='text' placeholder='Username' name="username" onChange={e=>handleInput(e)}  /><br />
          <label>Mobile</label><br />
          <input type='tel' placeholder='+919876543210' name='mobile' onChange={e=>handleInput(e)}  /><br />
          <label>Email</label><br />
          <input type='email' placeholder='john@gmail.com' name='email' onChange={e=>handleInput(e)}  /><br />
          <label>Password</label><br />
          <input type='password' placeholder='********' name='password' onChange={e=>handleInput(e)}  /><br />
          <button onClick={e=>registerApi(e)}>Register</button>
          <p id='login-button'>Already have account <Link to='/login'>Login</Link></p>
        </form>
      </div>

      <footer className='login'>
        <p className='footer-title'>© 2024 Copyright : Agroshare.com</p>
      </footer>
    </>
  )
}
