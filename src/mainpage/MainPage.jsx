import React from 'react'
import ProductCard from './components/ProductCard'
import Navigation from './components/Navigation'
import { useEffect,useContext } from 'react'
import MyContext from '../contexts/ContextWrapper'

export default function MainPage({setItems}) {
  const { currentCategory, filteredProducts, getProducts, products } = useContext(MyContext)

    useEffect(() => {
        getProducts();
    }, [])
    
    return (
      <>
        <div className='mx-28'>
         <Navigation />
         <div className="my-10"></div>
           <div>
            <h1 className="my-10">{currentCategory}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-items-center align-items-center">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product._id} {...product} setItems={setItems} />
                ))
              ) : products.length ? (
                products.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))
              ) : (
                <p className="col-span-3 text-center font-bold">
                  No Products Found
                </p>
                )}
          </div>
          </div>
        </div>
      </>
    );
  
}

