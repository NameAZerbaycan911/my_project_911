import React from 'react'
import { Container} from '@mui/material'
import newBrand1 from '../images/newBrand/new_brand1.png'
import newBrand2 from '../images/newBrand/new_brand2.png'
import newBrand3 from '../images/newBrand/new_brand3.png'
import newBrand4 from '../images/newBrand/new_brand4.png'
import newBrand5 from '../images/newBrand/new_brand5.png'
import newBrand6 from '../images/newBrand/new_brand6.png'

const Brands = () => {
  return (
    <div>
      <Container>
         <div className='flex items-center justify-around w-[100%] h-[170px]'>
            <img src={newBrand1} alt="" />
            <img src={newBrand2} alt="" />
            <img src={newBrand3} alt="" />
            <img src={newBrand4} alt="" />
            <img src={newBrand5} alt="" />
            <img src={newBrand6} alt="" />
         </div>
      </Container>
    </div>
  )
}

export default Brands
