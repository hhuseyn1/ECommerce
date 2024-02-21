import React, { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircleIcon from '../../assets/CircleIcon.svg'
import MyContext from '../../contexts/ContextWrapper'

export default function ProductCard({id, brand, price, gallery}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { currency, convertCurrency } = useContext(MyContext);
  const { getProductById } = useContext(MyContext);
  const [product, setProduct] = useState({});
  const {addToCart} = useContext(MyContext)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(params.id);
        setProduct(product.product);
        setSelectedImage(product.product?.gallery?.[0])
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);


  const handleAddToCart = (product) => {
    addToCart(prevItems => [...prevItems, { ...product}]); 
    console.log('1')
  };  
  
    const handleClick = () => {
      navigate(`/product/${id}`); 
    };
    

  return (
    <div
      className={`flex flex-col w-[386px] h-[444px] m-3 hover:cursor-pointer hover:shadow shadow-slate-400 transition duration-100 ease-in-out ${
        isHovered ? 'relative' : ''
      } my-5`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <img 
        onClick={()=>{
          navigate("/mainpage")
          handleAddToCart(product)
        }}
          src={CircleIcon}
          alt="Add to Cart"
          className={`absolute bottom-32 right-0 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer`}
        />
      )}

      <img onClick={handleClick} src={gallery} alt="" className="w-[354px] h-[330px]" />

      <div>
        <button>{brand}</button>
        <p>{convertCurrency(price).toFixed(2)} {currency == 'dollar' ? '$' : '₼'}</p>
      </div>
    </div>
  );
}
