import { Container } from '@mui/material'
import React, { useState } from 'react'
import ShopCategory from '../utilities/ShopCategory'
import Slider from '../utilities/Slider'
import '../css/home.css'
import FreeShipping from '../navbar/FreeShipping'
import GridSide from '../navbar/GridSide'
import CartSlide from './CartSlide'
import Brands from './Brands'
import Footer from './Footer'
import HeaderBottom from '../components/HeaderBottom'
import NavSide from '../components/NavSide'


const Home = () => {
  const [close1, setClose1] = useState(false)
  return (

   <div>
    <HeaderBottom close1={close1} close11={setClose1}/>
    <NavSide/>
    <div>
     <Container>
      <div>
        <div className='flex gap-5 pt-5 flexResp'>
          <div className='flexShop'><ShopCategory /></div>
          <div><Slider /></div>
        </div>
        <div><FreeShipping /></div>
        <div><GridSide /></div>
      </div>
    </Container>
    <CartSlide close1={close1} close11={setClose1}/>
    <Brands/>
    <Footer/>
   </div>
   </div>
  )
}

export default Home
