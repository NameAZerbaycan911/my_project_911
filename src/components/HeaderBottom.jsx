import { Container } from '@mui/material'
import Logo from '../images/logo_ecomwhite1.png'
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { FaPhone, } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { IoBagOutline } from 'react-icons/io5';
import Search from './Search';
import img1 from '../images/shop2-product-12-1.jpg'
import img2 from '../images/shop2-product-3-2.jpg'
import img3 from '../images/shop2-product-10-2.jpg'
import img4 from '../images/shop2-product-14-2.jpg'
import img5 from '../images/shop2-product-11-2.jpg'


const Product = [
    {
        id: 1,
        name: 'HEADPHONE, WATCHES',
        description: 'Sleeveless Viscose Top',
        image: img1,
        price: '$109',
    },
    {
        id: 2,
        name: 'ELECTRONICS,HEADPHONE',
        description: 'Sleeveless Viscose Top',
        image: img2,
        price: '$49',
    },
    {
        id: 3,
        name: 'HEADPHONE, WATCHES',
        description: 'Sleeveless Viscose Top',
        image: img3,
        price: '$289'
    },
    {
        id: 4,
        name: 'TOYS, TROUSERS',
        description: 'Sleeveless Viscose Top',
        image: img4,
        price: '$1699'
    },
    {
        id: 5,
        name: 'HEADPHONE, WATCHES',
        description: 'Sleeveless Viscose Top',
        image: img5,
        price: '$49'
    },
]


const HeaderBottom = ({ close1, close11,set,set1 }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    Search(ref,()=>setOpen(false))
    const [value,setValue] = useState()
    const [data,setData] = useState([])
    const onChange = (e) =>{
        setValue(e.target.value)
        Product
        setData(data)
    }


    return (
        <div className='w-[100%] h-[100px] bg-blue-500 border-t-[1px] border-t-gray-100'>
            <Container>
                <div className='flex gap-[100px] '>
                    <NavbarBs>
                        <Nav >
                            <Nav.Link to='/' as={NavLink}>
                                <div>
                                    <div><img src={Logo} alt="" className='w-[120px] mt-6' /></div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </NavbarBs>
                    <div className='flex justify-between items-center gap-[35px] ml-4'>
                        <div className='flex w-[500px] h-[50px] bg-white rounded-3xl mt-6'>
                            <div>
                                <input type="text" placeholder='Search...' className='pl-2 border-none outline-none w-[300px] mt-3 ml-4' onChange={onChange} value={value}/>
                                <div className='mt-[10px] ml-[20px]'>
                                    { value &&
                                        Product.filter(item=> item.name.startsWith(value)).map(item => 
                                            <div key={item.id} className='w-[300px] h-[200px] bg-blue-100 relative z-50 flex flex-col items-center pt-[20px]'>
                                                <div>
                                                <img src={item.image} alt="" className='w-[100px] h-[100px] ' />
                                                </div>
                                                <div  className='text-[10px] text-gray-400 font-bold pt-[10px]'>{item.name}</div>
                                                <div>{item.description}</div>
                                                <div className='text-[19px] text-gray-800 font-bold'>{item.price}.99</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <form className='w-[130px] border-2' ref={ref}>
                                <div onClick={() => setOpen(!open)} className='flex text-gray-500 items-center pt-3 pl-4 text-[14px] cursor-pointer'>All Categories<FaChevronDown className='text-[15px] pl-1 pt-1 ' />
                                </div>{open &&
                                    <div className='w-[130px] h-[250px] border-2 overflow-y-scroll mt-3 bg-white relative z-50' >
                                        <ul className='text-[14px] text-gray-500'>
                                            <li className='pt-1 pl-2 pb-1 bg-gray-200'>All Categories</li>
                                            <li className='pt-1 pl-2 pb-1 hover:bg-gray-200'>Accessories</li>
                                            <ul><li className='pt-1 pl-5 pb-1 hover:bg-gray-200'>Whatches</li></ul>
                                            <li className='pt-1 pl-2 pb-1 hover:bg-gray-200'>Dress</li>
                                            <li className='pt-1 pl-2 pb-1 hover:bg-gray-200'>Electronics</li>
                                            <ul>
                                                <li className='pt-1 pl-5 pb-1 hover:bg-gray-200'>
                                                    Headphones
                                                </li>
                                                <li className='pt-1 pl-5 pb-1 hover:bg-gray-200'>Toys</li>
                                            </ul>
                                            <li className='pt-1 pl-2 pb-1 hover:bg-gray-200'>Fashion</li>
                                            <ul>
                                                <li className='pt-1 pl-5 pb-1 hover:bg-gray-200'>
                                                    T-shirt
                                                </li>
                                                <li className='pt-1 pl-5 pb-1 hover:bg-gray-200'>Trousers</li>
                                            </ul>
                                            <li className='pt-1 pl-2 pb-1 hover:bg-gray-200'>Blouse</li>
                                        </ul>
                                    </div>}
                            </form>
                            <div>
                                <FaSearch className='mt-4 ml-4 text-[20px] cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='text-white text-[39px] pt-[30px]'><FaPhone /></div>
                            <div className='flex flex-col pt-6'>
                                <span className='font-bold text-[12px] text-gray-200'>CALL US NOW</span>
                                <span className='font-bold text-white text-[20px]'>+123 567 8990</span>
                            </div>
                        </div>
                        <div className='flex gap-4 justify-between items-center text-white text-[26px] mt-6'>
                            <div><FaRegUser /></div>
                            <div><FaRegHeart /></div>
                            <div onClick={() => close11(!close1)} className='flex relative text-white text-[26px]'><IoBagOutline className='' /><FaChevronDown className='text-[13px] mt-[8px] ml-2' /><span className='absolute text-[12px] w-5 h-5 rounded-full bg-red-500  left-[15px] bottom-4 pl-2'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderBottom
