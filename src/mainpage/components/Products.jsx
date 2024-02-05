import React from 'react'
import ProductCard from './ProductCard'

export default function Products() {
  return (
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
  )
}
