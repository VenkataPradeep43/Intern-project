import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Equipments.css'
import Machine from '../Images/Machines.jpg'
import Electronic from '../Images/Electronic.jpg'

export default function Equipments() {
  return (
    <>
      <h1 className='tool-heading'>Available Equipments</h1>
      <div className='cards'>
        <div className="card">
          <img src={Machine} alt="machine" style={{ width: "330px", height: "180px" }} />
          <h5 className="card-title">Farming Machines</h5>
          <li><Link className='card-button' to='/dashboard/farmingtools'>View</Link></li>
        </div>
        <div className="card">
          <img src={Electronic} alt="electronic" style={{ width: "330px", height: "180px" }} />
          <h5 className="card-title">Electronic Tools</h5>
          <li><Link className='card-button' to='/dashboard/electronictools'>View</Link></li>
        </div>
      </div>
      <footer className='equipments'>
        <p>© 2024 Copyright : Agroshare.com</p>
      </footer>
    </>
  )
}
