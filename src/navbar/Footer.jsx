import { Container } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='w-[100%] h-[470px] bg-[#212529] font-sans'>
            <Container>
                <div>
                    <div className='flex border-b-[1px] border-b-gray-600 h-[370px] mx-[20px]'>
                        <div className='w-[300px] pt-[50px] pb-[20px]'>
                            <h1 className='text-white font-sans font-extrabold text-[15px]'>CONTACT INFO</h1>
                            <div className='mt-[15px]'>
                                <div>
                                    <h2 className='text-white text-[13px]'>ADDRESS:</h2>
                                    <p className='text-gray-400 font-medium text-[13px]'>123 Street Name, City, England</p>
                                </div>
                                <div className='mt-[13px]'>
                                    <h2 className='text-white text-[13px]'>PHONE:</h2>
                                    <p className='text-gray-400 font-medium text-[13px]'>(123)-456-7890</p>
                                </div>
                                <div className='mt-[13px]'>
                                    <h2 className='text-white text-[13px]'>EMAIL:</h2>
                                    <p className='text-gray-400 font-medium text-[13px] lowercase'>MAIL@EXAMPLE.COM</p>
                                </div>
                                <div className='mt-[13px]'>
                                    <h2 className='text-white text-[13px]'>WORKING DAYS/HOURS:</h2>
                                    <p className='text-gray-400 font-medium text-[13px]'>MON-SUN / 9:00 AM - 8:00 PM</p>
                                </div>
                                <div className='flex items-center text-white pt-4 gap-[10px]'>
                                    <div className='p-[10px] border-[1px] border-gray-600 rounded-full hover:bg-blue-800 duration-500'><a href="https://www.facebook.com/" ><FaFacebookF/></a></div>
                                    <div className='p-[10px] border-[1px] border-gray-600 rounded-full hover:bg-[#0088cc] duration-500'><a href="https://www.Twitter.com/"><FaXTwitter/></a></div>
                                    <div className='p-[10px] border-[1px] border-gray-600 rounded-full hover:bg-[#7c4a3a] duration-500'><a href="https://www.Instagram.com/"><FaInstagram/></a></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col pt-[50px] '>
                            <div className='flex gap-[30px] h-[120px] w-[100%] border-b-[1px] border-b-gray-600'>
                                <div>
                                    <h1 className='text-[14px] font-bold text-white'>SUBSCRIBE NEWSLETTER</h1>
                                    <p className='text-gray-400 font-medium text-[14px] pt-[15px]'>Get all the latest information on Events, Sales and Offers. <br />
                                    Sign up for newsletter today.</p>
                                </div>
                                <div className='flex'>
                                   <input type="email" className='w-[280px] h-[45px] border-2 rounded-tl-3xl rounded-bl-3xl mt-[36px] ml-[40px] pl-[20px] border-none outline-none'/>
                                   <button className='w-[100px] h-[45px] bg-blue-500 rounded-tr-3xl rounded-br-3xl text-[12px] font-bold text-white mt-[36px]'>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='flex justify-evenly gap-[50px] items-center'>
                                  <div className='text-white'>
                                    <h1 className='text-white text-[14px] font-bold mt-[35px]'>COSTUMER SERVICE</h1>
                                    <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>About Us</p>
                                    <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>Contact Us</p>
                                    <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>My Acount</p>
                                    </div>
                                  <div>
                                     <p className='text-gray-400 font-medium text-[13px] pt-[65px] font-sans'>Order history</p>
                                     <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>Advanced search</p>
                                     <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>Login</p>
                                  </div>
                                  <div>
                                  <div className='text-white'>
                                    <h1 className='text-white text-[14px] font-bold mt-[35px]'>ABOUT US</h1>
                                    <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>Super Fast Wordpress Theme</p>
                                    <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>1st Fully working Ajax Theme</p>
                                    <p className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>42 Unique Shop Layouts</p>
                                    </div>
                                  </div>
                                  <div>
                                  <p className='text-gray-400 font-medium text-[13px] pt-[35px] font-sans'>Powerful Admin Panel</p>
                                  <p  className='text-gray-400 font-medium text-[13px] pt-[10px] font-sans'>Mobile & Retina Optimized</p>
                                  </div>
                                </div>
                        </div>
                    </div>
                    <div className='px-[20px]'>
                        <h2 className='pt-[40px] text-gray-300 text-[12px] font-serif'>© Porto eCommerce. 2024. All Rights Reserved</h2>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
