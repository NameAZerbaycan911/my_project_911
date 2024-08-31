import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { PiDress } from "react-icons/pi";
import { TbClockHour1 } from "react-icons/tb";
import { AiOutlineGift } from "react-icons/ai";
import { LuFlower2 } from "react-icons/lu";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineSportsTennis } from "react-icons/md";

const ShopCategory = () => {
    return (
        <div>
            <div className='w-[280px] h-[405px] border-2'>
                <div className=' flex items-center bg-blue-500 w-[100%] h-[50px] gap-3 pl-4'>
                    <GiHamburgerMenu className='text-white text-[18px] pb-[2px]' />
                    <h1 className='font-bold text-white text-[15px]'>SHOP BY CATEGORY</h1>
                </div>
                <div>
                    <div>
                        <div className='flex justify-between border-[1px] py-3 px-4'><div className='flex gap-1'><PiDress className='text-[20px]' /><h2 className='font-bold text-[15px]'>Fashion</h2></div><FaChevronRight className='text-[12px] mt-1' /> </div>
                        <div className='flex justify-between border-[1px] py-3 px-4'><div className='flex gap-1'><TbClockHour1 className='text-[20px]' /><h2 className='font-bold text-[15px]'>Electronics</h2></div><FaChevronRight className='text-[12px] mt-1' /></div>
                        <div className='flex justify-between border-[1px] py-3 px-4'><div className='flex gap-1'><AiOutlineGift className='text-[20px]' /><h2 className='font-bold text-[15px]'>Gifts</h2></div><FaChevronRight className='text-[12px] mt-1' /></div>
                        <div className='flex justify-between border-[1px] py-3 px-4'><div className='flex gap-1'><LuFlower2 className='text-[20px]'/><h2 className='font-bold text-[15px]'>Home & Garden</h2></div><FaChevronRight className='text-[12px] mt-1' /></div>
                        <div className='flex justify-between border-[1px] py-3 px-4'><div className='flex gap-1'><CiMicrophoneOn className='text-[20px]'/><h2 className='font-bold text-[15px]'>Music</h2></div><FaChevronRight className='text-[12px] mt-1' /></div>
                        <div className='flex flex-col py-3 px-4'><div className='flex gap-1'><MdOutlineSportsTennis className='text-[20px]'/><h2 className=' font-bold text-[15px]'>Sports</h2></div>
                         <button className='w-[230px] h-[55px] bg-gray-900 text-[white] hover:bg-gray-800 my-2 ml-2'>Huge Sale-70% OFF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCategory
