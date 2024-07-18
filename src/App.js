import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Tools from "./Components/Tools";
import Electronitcools from "./Components/Electronictools";
import Farmingtools from "./Components/Farmingtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/tools' element={<Tools/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='farmingtools' element={<Farmingtools/>}/>
        <Route path='electronictools' element={<Electronitcools/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
