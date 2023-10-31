import React from 'react'
import {  Routes,Route} from "react-router-dom";
import Home from './Home';
import Categories from './Categories';
import Brands from './Brands';
import Login from '../Components/Login';
import NotFound from '../Components/NotFound';
import Signup from '../Components/Signup';
import Lakme from '../Components/Lakme';
import NykaaNaturals from '../Components/Nykaanaturals';
import AllProducts from '../Components/AllProducts';
import Wishlist from '../Components/Wishlist';
const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='/nykaaNaturals' element={<NykaaNaturals/>}/>
        <Route path='/view' element={<AllProducts/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/lakme' element={<Lakme/>}/>

        <Route path='*' element={<NotFound/>}/>


    </Routes>
  )
}

export default Mainroutes