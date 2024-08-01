import React from 'react'
import '../Styles/Home.css'
import Navbar from './Navbar'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='header'>
        <div className='header-title'>
          <h1 className='title'>One stop sollution for your farming needs</h1>
          <h2 className='sub-title'>Let's start working together</h2>
        </div>
      </div>
      <footer className='home'>
        <p>© 2024 Copyright : Agroshare.com</p>
      </footer>
    </>
  )
}
