import React from 'react'
import { FaCaretLeft } from "react-icons/fa";
import PortoTheme from '../images/shop2-menu-banner-1.jpg'
import '../components/navside.css'

const CategoriesHover = () => {
    return (
        <div className='relative none openCategories1'>
            <div className='flex justify-between absolute z-10 bg-white w-[650px] h-[320px] border-2 top-[19px]'>
                <div className='my-6 mx-4'>
                    <h5>VARIATIONS 1</h5>
                    <div className='flex flex-col gap-3 mt-4 text-[13px] text-gray-400'>
                        <a href="" className=' font-semibold hover:text-gray-900 hover:underline'>Banner With Sidebar</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>No Sidebar Banner</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>Infiite Ajax Scroll</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>Hidden Filter</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>Horizontal Filter</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>Off Canvas Filter</a>
                        <div className='flex'><a href="" className='font-semibold hover:text-gray-900 hover:underline'>Image, Color Swatch </a><FaCaretLeft className='text-[10px] mt-1' /><span className='bg-green-400 px-[2px] py-[2px] text-[9px] text-white'>NEW</span></div>
                        <div className='flex'><a href="" className='font-semibold hover:text-gray-900 hover:underline'>Width Right Sidebar </a><FaCaretLeft className='text-[10px] mt-1' /><span className='bg-green-400 px-[2px] py-[2px] text-[9px] text-white'>NEW</span></div>
                    </div>
                </div>
                <div className='my-6 mx-4'>
                    <h5>VARIATIONS 2</h5>
                    <div className='flex flex-col gap-3 mt-4 text-[13px] text-gray-400'>
                        <a href="" className=' font-semibold hover:text-gray-900 hover:underline'>Quantity Field</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>No 3 Columns Mode</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>4 Columns Mode</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>5 Columns Mode</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>6 Columns Mode</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>7 Columns Moder</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>8 Columns Mode</a>
                        <a href="" className='font-semibold hover:text-gray-900 hover:underline'>Full Width Mode</a>
                    </div>
                </div>
                <div className='my-[14px] mx-3'>
                    <img src={PortoTheme} alt="" className='h-[290px] w-[230px]'/>
                </div>
            </div>
        </div>
    )
}

export default CategoriesHover
