import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Equipments from "./Components/Equipments";
import Electronitcools from "./Components/Electronictools";
import Farmingtools from "./Components/Farmingtools";
import Register from "./Components/Register";
import Booking from "./Components/Booking";
import AddProduct from "./Components/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import MyProducts from "./Components/MyProducts";
import MyBookings from "./Components/MyBookings";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path='' element={<Equipments/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='addproduct' element={<AddProduct/>}/>
          <Route path='myproducts' element={<MyProducts/>}/>
          <Route path='mybookings' element={<MyBookings/>}/>
          <Route path='equipments' element={<Equipments/>}/>
          <Route path='farmingtools' element={<Farmingtools/>}/>
          <Route path='electronictools' element={<Electronitcools/>}/>
          <Route path="booking/:id" element={<Booking/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
