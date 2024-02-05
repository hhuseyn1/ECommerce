import React from 'react'
import ProductCard from './components/ProductCard'
import Navigation from './components/Navigation'

export default function MainPage() {
  return (
    <div className='mx-32'>
       <Navigation />
        <div className='mt-10 justify-center'>
            <h2>Category name</h2>
            <div className='my-5 w-full grid grid-cols-3'>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>  
              <ProductCard/>
            </div>  
        </div>  
    </div>
  )
}
