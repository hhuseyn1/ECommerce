import React from 'react'
import ProductCard from './components/ProductCard'
import Navigation from './components/Navigation'
import Products from './components/Products'
import Details from './components/Details'

export default function MainPage() {
  return (
    <div className='mx-32'>
       <Navigation />
       <Details/>
       {/* <Products /> */}
    </div>
  )
}
