import React, { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircleIcon from '../../assets/CircleIcon.svg'
import MyContext from '../../contexts/ContextWrapper'

export default function ProductCard({id}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { currency, convertCurrency,getProductById,addToCart } = useContext(MyContext);
  const [product, setProduct] = useState({});
  const [selectedImage,setSelectedImage]= useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);
        setProduct(product.product);
        setSelectedImage(product.product?.gallery[0])
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);


  const handleAddToCart = () => {
    addToCart(product);
    console.log(product)
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

      <img onClick={handleClick} src={selectedImage} alt={product.brand + ' image'} className="w-[354px] h-[330px]" />

      <div>
        <button>{product.brand}</button>
        <p>{convertCurrency(product.price).toFixed(2)} {currency == 'dollar' ? '$' : '₼'}</p>
      </div>
    </div>
  );
}
