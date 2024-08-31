import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import portoWhatches from '../images/shop2_banner_1.jpg'
import trendingSales from '../images/shop2_banner_4.jpg'
import handBags from '../images/shop2_banner_8.jpg'
import shopBanner2 from '../images/shop2_banner_2.jpg'
import shopBanner5 from '../images/shop2_banner_5.jpg'
import shopBanner7 from '../images/shop2_banner_7.jpg'
import shopBanner3 from '../images/shop2_banner_3.jpg'
import shopBanner6 from '../images/shop2_banner_6.jpg'
import shopBanner9 from '../images/shop2_banner_9.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const GridSide = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Container>
                <div className='flex gap-4 w-[100%] h-[885px] auto font-sans'>
                    <div className='w-[270px] h-[885px] flex flex-col gap-4 items-center relative' data-aos='fade-up'>
                        <div className='w-100% h-[350px]'>
                            <div><img src={portoWhatches} alt="" className='h-[350px]' /></div>
                            <div className='flex flex-col items-center absolute top-0 gap-[170px] ml-5px'>
                                <div className='flex justify-center flex-col '>
                                    <h1 className='text-[24px] font-[700] items-center pl-[55px] pt-[30px]'>Porto Watches</h1>
                                    <div className='ml-[70px] flex gap-[2px] py-0 my-0 '>
                                        <span className='line-through text-[20px] font-bold'>20%</span>
                                        <span className='text-[30px] font-extrabold text-blue-800 -mt-[5px]' >30%</span>
                                        <span className='text-[20px] font-semibold text-blue-800'>OFF</span></div>
                                </div>
                                <div>
                                    <button className='text-[12px] text-white bg-gray-900 py-3 px-5 font-bold ml-10 hover:bg-gray-800'><a href="">SHOP NOW</a></button>
                                </div>
                            </div>
                        </div>
                        <div className='w-100% h-[320px]'>
                            <div><img src={trendingSales} alt="" className=' h-[320px]' /></div>
                            <div className='absolute top-[400px] flex gap-4 flex-col items-center right-0'>
                                <div className='flex flex-col leading-[26px] items-center '>
                                    <h1 className='text-[30px] font-bold '>TRENDING</h1>
                                    <h1 className='text-[27px] font-bold pr-8'>Fashion Sales</h1>
                                </div>
                                <div><h4 className='text-red-500 font-semibold text-[15px]'>STARTING AT $99</h4></div>
                                <div>
                                    <button className='text-[12px] text-white bg-gray-900 py-3 px-5 font-bold ml-10 hover:bg-gray-800'><a href="">BUY NOW</a></button>
                                </div>
                            </div>
                        </div>
                        <div className='w-100% h-[180px]'>
                            <div><img src={handBags} alt="" className='w-100% h-[180px]' /></div>
                            <div className='flex flex-col absolute bottom-[50px] ml-[100px]'>
                                <div>
                                    <h1 className='text-[24px] font-bold ml-8'>Handbags</h1>
                                    <h2 className='text-[15px] font-semibold text-red-500 ml-5'>STARTING AT $99</h2>
                                </div>
                                <button className='text-[12px] text-white bg-red-500 py-3 px-5 font-bold ml-10 block mt-2 hover:bg-red-400'><a href="">SHOP NOW</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[582px] h-[885px] flex flex-col gap-4' data-aos='fade-up'>
                        <div className='w-100% h-[350px]'>
                            <div className='relative text-white'>
                                <div><img src={shopBanner2} alt="" className='w-100% h-[350px]' /></div>
                                <div>
                                    <div className='text-[32px] font-extrabold absolute right-8 top-[50px]'><h1>ELECTIRONIC</h1><h1 className='ml-[125px] leading-[25px]'>DEALS</h1></div>
                                    <div><span className='absolute top-[150px] right-[40px] font-bold text-[19px] bg-blue-500 p-[5px] -rotate-[2deg]'>Exclusive COUPON</span></div>
                                    <div className='flex items-center absolute top-[200px] right-[128px] -rotate-[2deg]'>
                                        <span className='-rotate-[90deg] text-[10px] text-gray-400 font-bold'>UP TO</span>
                                        <span className='px-[8px] text-[20px] text-black bg-gray-200 font-extrabold'>$100</span>
                                        <span className='text-[14px] font-bold'>OFF</span>
                                    </div>
                                    <div className='absolute bottom-[50px] right-[70px] px-[34px] py-[14px] bg-black text-[14px] font-bold hover:bg-gray-800'><button><a href="">GET YOURS!</a></button></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-100% h-[240px]'>
                            <div>
                                <div><img src={shopBanner5} alt="" className='w-100% h-[240px]' /></div>
                                <div className='relative text-white'>
                                    <h1 className='absolute bottom-[140px] text-[36px] Kalam text-black font-bold left-[40px]'>Exclusive Shoes</h1>
                                    <h1 className='absolute bottom-[100px] left-[40px] text-[40px] font-bold text-black font-sans'>50% OFF</h1>
                                    <h3 className='absolute bottom-[70px] left-[40px] text-[15px] text-gray-400 font-bold'>STARTING AT $99</h3>
                                </div>
                            </div>
                        </div>
                        <div className='w-100% h-[260px]'>
                            <div>
                                <div><img src={shopBanner7} alt="" className='w-100% h-[260px]' /></div>
                                <div className='flex relative'>
                                    <div>
                                        <div className='absolute bottom-[120px] '>
                                            <p className='text-[12px] text-gray-600 font-medium ml-[50px] font-sans tracking-[2px]'>CHECK OUR DISCOUNTS</p>
                                            <h1 className='font-bold text-[28px] ml-[50px]'>MORE THAN <br /> <div className='tracking-[2px]'>20 BRANDS</div></h1>
                                        </div>
                                        <div>
                                            <div className='flex items-center absolute bottom-[60px] -rotate-[2deg] left-[60px]'>
                                                <span className='-rotate-[90deg] text-[10px] text-gray-500 font-bold'>UP TO</span>
                                                <span className='px-[12px] text-[20px] text-black bg-gray-100 font-extrabold'>$100</span>
                                                <span className='text-[14px] font-bold'>OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div><button className='absolute px-[30px] py-[14px] bg-gray-900 hover:bg-gray-800 bottom-[110px] text-white left-[310px] font-bold text-[14px]'>CHECK THIS SALE!</button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[270px] h-[885px] flex flex-col gap-4' data-aos='fade-up'>
                        <div className='w-100% h-[250px]'>
                            <div><img src={shopBanner3} alt="" className='w-100% h-[250px]' /></div>

                            <div className='relative'>
                                <h1 className='absolute bottom-[200px] right-4 text-[17px] text-red-400 font-bold'>FLASH SALE</h1>
                                <div>
                                    <h2 className='absolute bottom-[175px] right-4 text-gray-300 text-[14px]'>TOP BRANDS</h2>
                                    <h2 className='absolute bottom-[155px] right-4 text-gray-300 text-[14px]'>SUMMER SUNGLASSES</h2>
                                </div>
                                <div>
                                    <p className='absolute bottom-[120px] right-4 text-white text-[24px] font-bold'>STARTING</p>
                                    <div className='flex'>
                                        <p className='absolute bottom-[90px] right-[85px] text-white text-[24px] font-bold'>AT</p>
                                        <div className='
                                        absolute bottom-[90px] right-4 text-white flex items-center font-[800]'>
                                            <span className='text-[10px]'>$</span>
                                            <span className='text-[24px]'>199</span>
                                            <span className='text-[10px]'>99</span>
                                        </div>
                                        <button className='absolute bottom-[30px] right-4 bg-gray-100 hover:bg-gray-200 px-[25px] py-[12px] text-black text-[10px] font-bold'><a href="">VIEW SALE</a></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='w-100% h-[420px]'>
                            <div><img src={shopBanner6} alt="" className='w-100% h-[420px]' /></div>
                            <div className='flex flex-col relative'>
                                <h4 className='font-bold absolute bottom-[380px] text-[12px] tracking-[2px] left-[90px]'>AMAZING</h4>
                                <h1 className='absolute font-bold text-[24px] bottom-[350px] left-[45px]'>CONNECTION</h1>
                            </div>
                            <div className='relative'>
                                <button className='font-bold text-[12px] bg-gray-900 hover:bg-gray-800 absolute bottom-[40px] text-white px-[20px] py-[10px] left-[74px]'><a href="">SHOP NOW!</a></button>
                            </div>
                        </div>
                        <div className='w-100% h-[180px] border-2'>
                            <div><img src={shopBanner9} alt="" className='w-100% h-[180px] border-[10px] border-gray-900' /></div>
                            <div className='relative'>
                                <div><h1 className='absolute bottom-[110px] left-[50px] font-bold text-[21px]'>DEAL PROMOS</h1></div>
                                <p className='text-[14px] font-bold text-gray-500 absolute bottom-[90px] left-[70px]'>STARTING AT $99</p>
                                <button className='font-bold text-[12px] bg-gray-900 hover:bg-gray-800 absolute bottom-[40px] text-white px-[20px] py-[10px] left-[80px]'><a href="">BUY NOW!</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GridSide
