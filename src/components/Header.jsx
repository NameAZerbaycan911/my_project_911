import { Container } from '@mui/material'
import React, { useRef, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Search from './Search';

const Header = () => {
    const ref1 = useRef(null)
    const [open, setOpen] = useState(false)
    const [openi, setOpeni] = useState(false)
    Search(ref1, () => setOpen(false))
    Search(ref1, () => setOpeni(false))
    return (
        <div className='w-[100%] h-[50px] bg-blue-500 '>
            <Container>
                <div className='flex justify-between text-white items-center'>
                    <div className='headH5'>
                        <h5 className='pt-4 font-bold text-[12px]'>FREE RETURNS. STANDART SHIPPING ORDERS $99+</h5>
                    </div>
                    <div className='flex justify-between gap-8 '>
                        <ul className='flex font-bold text-[12px] gap-6 pt-4 ulNone'>
                            <li className='hover:text-gray-300 transition-all'><a href="">My Account</a></li>
                            <li className='hover:text-gray-300 transition-all'><a href="">Contact Us</a></li>
                            <li className='hover:text-gray-300 transition-all'><a href="">Blog</a></li>
                            <li className='hover:text-gray-300 transition-all'><a href="">Cart</a></li>
                            <li className='hover:text-gray-300 transition-all'><a href="">Log In</a></li>
                        </ul>
                        <div className='relative'>
                            <div>
                                <div className='flex font-bold text-[12px] gap-6 border-x-[1px] px-8 mt-4 relative' ref={ref1}>
                                    <div onClick={() => setOpen(!open)} className='flex hover:text-gray-300 '><div>ENG </div><FaChevronDown className='text-[10px] ml-1 mt-1' />
                                        {open &&
                                            <div className='flex flex-col items-center px-5 py-2 w-[30px] h-auto bg-white text-gray-400 absolute top-6'>
                                                <div>ENG</div>
                                                <div>FRA</div>
                                            </div>}
                                    </div>
                                    <div onClick={() => setOpeni(!openi)} className='flex hover:text-gray-300 transition-all'><div>USD </div><FaChevronDown className='text-[10px] ml-1 mt-1' />
                                        {openi &&
                                            <div className='flex flex-col items-center px-5 py-2 w-[30px] h-auto bg-white text-gray-400 absolute top-6'>
                                                <div>USD</div>
                                                <div>EUR</div>
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-4 text-white pt-4 fle'>
                            <div><a href="https://www.facebook.com/"><FaFacebookF /></a></div>
                            <div><a href="https://www.Twitter.com/"><FaXTwitter /></a></div>
                            <div><a href="https://www.Instagram.com/"><FaInstagram /></a></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
