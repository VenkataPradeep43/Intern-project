import React, { useEffect, useState } from 'react'
import '../Styles/Form.css'
import logo from '../Images/Farm-logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  let {id} = useParams()
  const navigate = useNavigate()
  let [product, setProduct] = useState({})
  let [add,setAdd] = useState("")
  useEffect(()=>{
    const getData = async (id)=>{
      let response = await axios.get(`http://localhost:5000/product/${id}`,
        {headers:{'x-auth-token':localStorage.getItem('token')}}
      )
      setProduct(response.data)
    }
    getData(id)
  },[id])
  const bookingApi = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/book',{productId:product._id,ownerId:product.owner,requesterAddress:add},{headers:{'x-auth-token':localStorage.getItem('token')}})
    .then((res)=>{
      if(res.data.ack){
        navigate('/dashboard/mybookings')
      }
      else{
        alert('Booking failed...')
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
      {/* need to display product details */}
      <div className='booking'>
        <form>
          <div className='logo'>
            <img src={logo} alt='logo' style={{ width: 60, height: 60 }} />
            <h1>Agro Share</h1><br />
          </div>
          <label>Product Name</label>
          <input type='text' value={product.name ? product.name : ""} readOnly />
          <label>product Tpe</label>
          <input type='text' value={product.type ? product.type : ""} readOnly />
          <label>Address</label><br />
          <textarea cols={30} rows={5} onChange={e=>setAdd(e.target.value)} />
          <button onClick={e=>bookingApi(e)}>Book Now</button>
        </form>
      </div>
      <footer className='booking'>
        <p className='footer-title'>© 2024 Copyright : Agroshare.com</p>
      </footer>
    </>
  )
}
