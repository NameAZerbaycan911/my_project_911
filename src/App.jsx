import { Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './navbar/Home'
import Categories from './navbar/Categories'
import Products from './navbar/Products'
import Features from './navbar/Features'
import AboutUs from './navbar/AboutUs'
import Elements from './navbar/Elements'
import Blog from './navbar/Blog'
import SpecialOffer from './navbar/SpecialOffer'
import { useEffect, useRef, useState } from 'react'


function App() {
  

  return (
    <div>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/categories' element={<Categories/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/features' element={<Features/>}/>
         <Route path='/blog' element={<Blog/>}/>
         <Route path='/aboutUs' element={<AboutUs/>}/>
         <Route path='/elements' element={<Elements/>}/>
         <Route path='/specialOffer' element={<SpecialOffer/>}/>
       </Routes>
       
    </div>
  )
}

export default App
