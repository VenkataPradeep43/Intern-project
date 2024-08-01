import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Equipments.css'
import axios from 'axios'
export default function Electronitcools() {
  const [data,setData ] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      try{
        let response = await axios.get('http://localhost:5000/electric',
          {headers:{'x-auth-token':localStorage.getItem('token')}}
        )
        setData(response.data)
      }
      catch(err){
        console.log(err)
      }
    }
    getData()
  },[])
  return (
    <>
      <h1 className='tool-heading' id='etool-heading'>Electronic Tools</h1>
      <div className='cards'>
      {
          data.length > 0 ? (<>
            {
              data.map((item)=>{
                return (
                  <div class="card" key={item._id}>
                    <img src={item.imageUri} alt="tractor" style={{ width: "200px", height: "150px" }} />
                    <h5 className="card-title">{item.name}</h5>
                    <li><Link className='card-button' to={`/dashboard/booking/${item._id}`} >Book Now</Link></li>
                  </div>
                )
              })
            }
          
          </>) : (<>As of now electronic products found in our records</>)
        }
        
      </div>
      <Link className='back-button' to='/dashboard'>Back</Link>
      <footer className='elec-equipments'>
        <p>© 2024 Copyright : Agroshare.com</p>
      </footer>
    </>
  )
}
