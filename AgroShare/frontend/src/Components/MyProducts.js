import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Equipments.css'

import axios from 'axios'
export default function MyProducts() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            try{
                let response = await axios.get('http://localhost:5000/myproducts',{
                    headers:{'x-auth-token':localStorage.getItem('token')}
                })
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
            <h1 className='tool-heading' id='ftool-heading'>My Products</h1>
            <div className='cards'>
                {
                    data.length > 0 ? (<>
                    {
                        data.map((item)=>{
                            return(
                            <div class="card" key={item._id}>
                                <img src={item.imageUri} alt="tractor" style={{ width: "200px", height: "150px" }} />
                                <h5 className="card-title">{item.name}</h5>
                                <h3>{item.type}</h3>
                                <li><Link className='card-button' to='/dashboard/booking'>Book Now</Link></li>
                            </div>
                            )
                        })
                    }
                    
                    </>):(<><h3 style={{textAlign:"center"}}>As of now you don't have products</h3></>)
                }
                
            </div>

            <Link className='back-button' to='/dashboard'>Back</Link>
            <footer className='farm-equipments' id='my-products'>
                <p> © 2024 Copyright : Agroshare.com</p>
            </footer>
        </>
    )
}
