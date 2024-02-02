import React from 'react'
import ProductCard from './components/ProductCard'
import LogoIcon from '../assets/logo.png'
import CartIcon from '../assets/EmptyCart.svg'

export default function MainPage() {
  return (
    <div>
        <navbar className="flex">
            <p>Women</p>
            <p>Men</p>
            <p>Kids</p>
            <img src={LogoIcon} alt="" />
            <img src={CartIcon} alt="" />
        </navbar>
        <div className='flex'>
            <h2>Category name</h2>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}
