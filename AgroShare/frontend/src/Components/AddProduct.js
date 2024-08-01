import React, { useState } from 'react'
import '../Styles/Form.css'
import logo from '../Images/Farm-logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddProduct() {
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const handleInput = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const addProductApi = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:5000/create',product,
            {headers:{'x-auth-token':localStorage.getItem('token')}}
        )
        .then((res)=>{
            if(res.data.message){
                navigate('/dashboard/myproducts')
            }   
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <div className='booking'>
                <form>
                    <div className='logo'>
                        <img src={logo} alt='logo' style={{ width: 60, height: 60 }} />
                        <h1>Agro Share</h1><br />
                    </div>
                    <label>Product Name</label><br />
                    <input type='text' name='name' onChange={e=>handleInput(e)} /><br />
                    <label>Product Image URL</label><br />
                    <input type='text' name='imageUri' onChange={e=>handleInput(e)} /><br />
                    <label>Product Type</label><br />
                    <select className='select' name='type' onChange={e=>handleInput(e)}>
                        <option value='electric' name='type'>Electric Components</option>
                        <option value='forming' name='type'>Forming Machinaries</option>
                    </select> <br />
                    <button onClick={e=>addProductApi(e)}>Add Product</button>
                </form>
            </div>
            <footer className='booking' id='add-products'>
                <p className='footer-title'>© 2024 Copyright : Agroshare.com</p>
            </footer>
        </>
    )
}
