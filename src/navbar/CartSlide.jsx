import { Container } from '@mui/material';
import React, { useRef, useState } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import '../css/cartSlide.css'
import '../css/rotate.css'
import img1 from '../images/shop2-product-12-1.jpg'
import img2 from '../images/shop2-product-3-2.jpg'
import img3 from '../images/shop2-product-10-2.jpg'
import img4 from '../images/shop2-product-14-2.jpg'
import img5 from '../images/shop2-product-11-2.jpg'
import Search from '../components/Search';


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
        name: 'HEADPHONE, WATCHES',
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
        name: 'HEADPHONE, WATCHES',
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


const CartSlide = ({ close1, close11 }) => {
    const [cartItem, setCartItem] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
    const addToCart = (id) => {
        setCartItem(cartItem => ({ ...cartItem, [id]: cartItem[id] + 1 }))
    }
    const subFromCart = (id) => {
        setCartItem(cartItem => ({ ...cartItem, [id]: cartItem[id] - 1 }))
    }
    const removeFromCart = (id) => {
        setCartItem(cartItem => ({ ...cartItem, [id]: cartItem[id] = 0 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const key in cartItem) {
            console.log(key);
            
            if (cartItem[key] > 0) {
                let itemInfo = Product.find(product => product.id === Number(key))
                totalAmount += Math.floor(cartItem[key] * itemInfo.price)
            }
        }

        return totalAmount;
    }


    return (

        <div className='w-[100%] bg-gray-100 mt-[50px] box-border '>
            <Container>
                <div className='pt-[40px] border-b-2 text-[15px] font-bold mx-[20px] pb-[10px]'>FEATURED PRODUCTS</div>
                <div className='w-[1100px] h-[450px] pt-[50px] ml-[23px] overflow-hidden'>
                    <div className='flex gap-[20px] mb-[20px]'>
                        {Product.map((product, index) => (
                            <div key={index} className='h-[400px] w-[260px] flex flex-col justify-between items-center border-2 box-border'>
                                <div className='w-[260px] h-[270px] border-2 overflow-hidden'>
                                    <img src={product.image} alt="" className='scaleSide hover:scale-110 hover:transition-transform hover:duration-[1s]  ' />
                                    <div className='relative flex items-center justify-center z-[1000] bottom-2 hoverOpen'>
                                        <button onClick={() => addToCart(product.id)} className='flex items-center justify-center gap-2 bg-blue-600 text-white w-[100%] h-[40px] absolute text-[13px] font-bold hoverNone'><BiShoppingBag className='text-[20px]' />ADD TO CART</button>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center mb-[20px]'>
                                    <div className='text-[10px] text-gray-400 font-bold' >{product.name}</div>
                                    <div>{product.description}</div>
                                    <div className='flex text-[19px] text-gray-400' >
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill />
                                        <RiStarSFill />
                                    </div>
                                    <div className='text-[19px] text-gray-800 font-bold'>{product.price}.00</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <div className='relative transition-all duration-1000'>
                {close1 && <div  className='fixed top-0 right-0 bg-gray-100 w-[300px] h-[100dvh] z-[3000] transition ease-in duration-1000'>
                    <div className='flex flex-col '>
                        <div className='text-[20px] font-bold border-b-2 p-[10px]'>Cart Tab</div>
                        <div className='mt-[19px] font-bold p-[10px]'>TOTAL:{getTotalAmount()} $</div>
                        <div className='relative'>
                            <button onClick={() => close11(close1 == false)} className='absolute top-[600px] ml-[10px] font-bold bg-gray-200 px-4 rounded-sm'>Close</button>
                        </div>
                    </div>
                    {Product.map((product => {
                        if (cartItem[product.id] !== 0) {
                            return <div key={product.id}>
                                <div  className='flex flex-col mt-[20px] px-[10px]'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <img src={product.image} alt="" className='w-[120px] h-[120px]' />
                                            <div className='flex'><p>X</p> <p>{cartItem[product.id]}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <button onClick={() => subFromCart(product.id)} className='text-[20px] text-red-400 font-bold'>-</button>
                                            <button onClick={() => removeFromCart(product.id)}
                                                className='bg-red-500 p-2 text-white font-bold text-[12px] rounded-lg w-[70px] mt-[20px]'>Sil</button>
                                            <button onClick={() => addToCart(product.id)} className='text-green-500 font-bold text-[20px]'>+</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[12px] font-bold'>{product.name}</p>
                                        <p className='text-[15px] font-bold'>-</p>
                                        <p className='text-[13px] font-bold'>{product.price}.99</p>
                                    </div>
                                </div>
                            </div>
                        }
                    }))}
                </div>
                }</div>
        </div>
    )
}

export default CartSlide
