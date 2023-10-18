import React from 'react'
import {  Routes,Route} from "react-router-dom";
import Home from './Home';
import Categories from './Categories';
import Brands from './Brands';
import Login from '../Components/Login';
import NotFound from '../Components/NotFound';
import Signup from '../Components/Signup';
const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='signup/' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>


    </Routes>
  )
}

export default Mainroutes