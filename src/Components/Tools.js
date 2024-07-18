import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Tools.css'
import image1 from '../Images/Farming-card.jpg'
import image2 from '../Images/Elec-card.jpg'

export default function Cards() {
  return (
    <>
    <h1 className='tool-heading'>Available Tools</h1>
          <div className='cards'>
              <div class="card1">
                  <img src={image1} alt="image" style={{width:"330px",height:"180px"}}/>
                          <h5 className="card-title">Farming Tools</h5>
                            <li><Link className='card-button' to='/farmingtools'>View</Link></li>
              </div>
              <div class="card2">
                  <img src={image2} alt="image" style={{width:"330px",height:"180px"}}/>
                      <h5 className="card-title">Electronic Tools</h5>
                        <li><Link className='card-button' to='/electronictools'>View</Link></li>
              </div>
          </div>
    </>
  )
}
