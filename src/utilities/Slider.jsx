import React from 'react'
import Slide1 from '../images/slider/shop2_home_slider1.jpg'
import Slide2 from '../images/slider/shop2_home_slider2.jpg'
import Slide3 from '../images/slider/shop2_home_slider3.jpg'
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../utilities/all.css'


const Slider = () => {

    let settings = {
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (

        <div >
            <div className=' w-[850px] h-[410px] relative'>
                <Sliders {...settings} className='h-[350px]'>
                    <div>
                        <img src={Slide1} alt="" className='w-[100%] h-[410px] object-cover' />
                        <div className='absolute top-[18%] pl-[50px] z-100 leading-[45px]'>
                            <h2 className='boundaries text-gray-700'>Find the Boundaries. Push Thorough!</h2>
                            <h1 className='summerFont'>Summer Sale</h1>
                            <h1 className='thirtyPercentage'>30% OFF</h1>
                            <div className='flex gap-4 mt-[20px]'>
                                <h6 className='text-gray-700 text-[12px] font-medium'>STARTING AT</h6>
                                <div className='flex items-center justify-center bg-red-400 text-white px-2 rotate-[-2deg] mt-4'>
                                    <span className='text-[12px] font-bold'>$</span>
                                    <span className='text-[25px] font-bold'>199</span>
                                    <span className='text-[12px] font-bold'>99</span>
                                </div>
                                <button className='mt-4 bg-gray-900 text-[13px] font-bold text-white w-[150px] py-1 hover:bg-gray-800'>GET YOURS!</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Slide2} alt="" className='w-[100%] h-[410px]' />
                        <div className='absolute top-[28%] pl-[50px] z-100 leading-[40px]'>
                            <h2 className='boundaries1 text-gray-400 uppercase'>Over 200 Products With Discounts</h2>
                            <h1 className='summerFont1 text-gray-900'>GREAT DEALS</h1>
                            <div className='flex gap-4 mt-[20px]'>
                                <h6 className='text-gray-800 text-[13px] font-bold'>STARTING AT</h6>
                                <div className='flex items-center justify-center mb-4 font-bold'>
                                    <span className='text-[12px] font-bold'>$</span>
                                    <span className='text-[25px] font-bold'>299</span>
                                    <span className='text-[12px] font-bold'>99</span>
                                </div>
                                <button className='mt-4 ml-[52px] bg-gray-900 text-[13px] font-bold text-white w-[150px] py-1 hover:bg-gray-800'>GET YOURS!</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Slide3} alt="" className='w-[100%] h-[410px]' />
                        <div className='absolute top-[28%] pl-[50px] z-100 leading-[40px]'>
                            <h2 className='boundaries1 text-gray-400 uppercase'>UP TO 70% OFF</h2>
                            <h1 className='summerFont2 text-gray-900'>NEW ARRIVALS</h1>
                            <div className='flex gap-4 mt-[20px]'>
                                <h6 className='text-gray-800 text-[13px] font-bold'>STARTING AT</h6>
                                <div className='flex items-center justify-center mb-4 font-bold'>
                                    <span className='text-[12px] font-bold'>$</span>
                                    <span className='text-[25px] font-bold'>299</span>
                                    <span className='text-[12px] font-bold'>99</span>
                                </div>
                                <button className='mt-4 ml-[52px] bg-gray-900 text-[13px] font-bold text-white w-[150px] py-1 hover:bg-gray-800'>GET YOURS!</button>
                            </div>
                        </div>
                    </div>
                </Sliders>
            </div>
        </div>
    )
}

export default Slider
