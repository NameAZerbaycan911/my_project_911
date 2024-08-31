import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import '../css/freeShipping.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const FreeShipping = () => {
    useEffect(()=>{
     Aos.init()
    },[])
  return (
     <Container>
        <div className='w-[100%] h-[100px] border-[1px] my-9 duration-1000'>
            <div className='flex justify-around items-center gap-8 my-[15px] mx-[30px] h-[70px]'>
                <div className='flex ship1' data-aos ='fade-up'>
                    <div>
                        <MdOutlineLocalShipping className='text-[34px] mr-4 mt-1'/>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-gray-900 text-[14px] font-bold'>FREE SHIPPING & RETURN</h1>
                        <p className='text-[13px] text-gray-400 font-medium'>Free Shipping on all orders over $99</p>
                    </div>
                </div>
                <div className='flex border-x-2 px-[70px] h-[70px] items-center' data-aos ='fade-up'>
                    <div>
                        <AiOutlineDollar className='text-[34px] mr-4 mt-1'/>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-gray-900 text-[14px] font-bold uppercase'>Money Back Guarantee</h1>
                        <p className='text-[13px] text-gray-400 font-medium'>Free Shipping on all orders over $99</p>
                    </div>
                </div>
                <div className='flex' data-aos ='fade-up'>
                    <div>
                        <MdOutlineLocalShipping className='text-[34px] mr-4 mt-1'/>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-gray-900 text-[14px] font-bold'>ONLINE SUPPORT 24/7</h1>
                        <p className='text-[13px] text-gray-400 font-medium'>Always Dedicated Team</p>
                    </div>
                </div>
            </div>
        </div>
     </Container>
  )
}

export default FreeShipping
