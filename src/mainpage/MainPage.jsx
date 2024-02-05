import React from 'react'
import ProductCard from './components/ProductCard'
import Navigation from './components/Navigation'
import Products from './components/Products'
import Details from './components/Details'
import CartDetails from './components/CartDetails'

export default function MainPage() {
  return (
    <div className='mx-32'>
       <Navigation />
       <CartDetails/>
       {/* <Products /> */}
    </div>
  )
}
