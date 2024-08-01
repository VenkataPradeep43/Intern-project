import React, { useState } from 'react'
import usericon from "../Images/User-icon.png"
import passicon from '../Images/Password-icon.png'
import '../Styles/Form.css'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../Images/Farm-logo.png'

import Navbar from './Navbar'
import axios from 'axios'
export default function Login() {
  const [user , setUser] = useState({})
  const navigate = useNavigate()
  const handleInput = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const loginApi = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/login',user)
    .then((res)=>{
      if(res.data.auth){
        localStorage.setItem('token',res.data.token)
        navigate('/dashboard')
      }
      else{
        alert(res.data.message)
      }
    })
  }
  return (
    <>
      <Navbar />
      <div className='login'>
        <form>
          <div className='logo'>
            <img src={logo} alt='logo' style={{ width: 60, height: 60 }} />
            <h1>Agro Share</h1><br />
          </div>
          <label>Username</label><br />
          <div className='user'>
            <img className="user-icon" src={usericon} alt='user' style={{ "width": "20px", "height": "20px" }} />
            <input type='text' placeholder='Username' name='username' onChange={e=>handleInput(e)} /><br />
          </div>
          <label>Password</label><br />
          <div className='pass'>
            <img className='pass-icon' src={passicon} alt='pass' style={{ "width": "20px", "height": "20px" }} />
            <input type='password' placeholder='Password' name='password' onChange={e=>handleInput(e)} />
          </div>
          <button onClick={e=>loginApi(e)}>Login</button>
          <p className='register-button'>Don't have account <Link to='/register'>Register</Link></p>
        </form>

        <footer className='login'>
          <p>© 2024 Copyright : Agroshare.com</p>
        </footer>
      </div>

    </>
  )
}
