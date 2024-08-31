import React from 'react'
import { Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { Container } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import CategoriesHover from './CategoriesHover'
import '../components/navside.css'
import FeaturesHover from './FeaturesHover'
import ProductsHover from './ProductsHover'

const NavSide = () => {
  return (
    <div>
      <NavbarBs className='w-[100%] h-[60px] border-2'>
        <Container>
          <div className='flex justify-between flex-row'>
            <div>
              <Nav style={{ display: "flex", gap: "30px", fontSize: "12px", fontWeight: "800", paddingTop: "19px", cursor: "pointer" }}>
                <Nav.Link to='/' as={NavLink} className='text-blue-600'>HOME</Nav.Link>
                <div className='openIt'><Nav.Link to='/categories' as={NavLink} className='flex hover:text-blue-600'>CATEGORIES<FaChevronDown className=' pt-[6px] text-[16px]' /></Nav.Link><CategoriesHover /></div>
                <div className='productHover'>
                  <Nav.Link to='/products' as={NavLink} className='flex hover:text-blue-600'>PRODUCTS<FaChevronDown className='pt-[6px] text-[16px]' /></Nav.Link> <ProductsHover />
                </div>
                <div className='openIt2'><Nav.Link to='/features' as={NavLink} className='flex hover:text-blue-600'>FEATURES<FaChevronDown className='pt-[6px] text-[16px]' /></Nav.Link><FeaturesHover /></div>
                <Nav.Link to='/blog' as={NavLink} className='hover:text-blue-600'>BLOG</Nav.Link>
                <Nav.Link to='/aboutUs' as={NavLink} className='hover:text-blue-600'>ABOUT US</Nav.Link>
                <Nav.Link to='https://www.portotheme.com/wordpress/porto/shortcodes/headers/' as={NavLink} className='hover:text-blue-600'>ELEMENTS</Nav.Link>
              </Nav>
            </div>
            <div className='relative'>
              <Nav className='flex gap-10 text-[12px] font-extrabold pt-[19px] cursor-pointer mr-4'>
                <Nav.Link to='/specialOffer' as={NavLink} >SPECIAL OFFER</Nav.Link>
                <a href="https://themeforest.net/item/porto-responsive-wordpress-ecommerce-theme/9207399?irgwc=1&clickid=yXP25kXgnxyPRCnTgCXpz0ADUkCwf-z25RRc2o0&iradid=275988&irpid=4104293&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=0&utm_campaign=af_impact_radius_4104293&utm_medium=affiliate&utm_source=impact_radius"><span className='bg-green-400 absolute top-1 right-6 
               text-[8px] text-[white] px-[2px]'>NEW</span>BUY PORTO!</a>
              </Nav>
            </div>

          </div>
        </Container>
      </NavbarBs>
    </div>
  )
}

export default NavSide
