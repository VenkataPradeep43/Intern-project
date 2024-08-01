import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/Form.css'

export default function MyBookings() {
    const [bookings,setBookings] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            try{
                let response =await axios.get('http://localhost:5000/mybookings',{
                    headers:{'x-auth-token':localStorage.getItem('token')}
                })
                setBookings(response.data )
            }
            catch(err){
                console.log(err)
            }
        }
        getData();
    },[])
  return (
    <div className='booking-container'>
      <div className='bookings'>
        {
            bookings.length>0 ? (<>
                {
                    bookings.map((item)=>{
                        return (
                            <div key={item._id}>
                                <h4>Booking Id : {item._id} --- product Id : {item.productId} --- Time : {item.createdAt} </h4>
                            </div>
                        )
                    })
                }
            </>):(<></>)
        }
      </div>
      <footer className='my-booking'>
          <p>© 2024 Copyright : Agroshare.com</p>
        </footer>
    </div>
    
  )
}
