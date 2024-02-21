import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CircleIcon from '../../assets/CircleIcon.svg'
import MyContext from '../../contexts/ContextWrapper'

export default function ProductCard({id, brand, price, gallery,size, colors,setItems}) {

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { currency, convertCurrency } = useContext(MyContext);

  const handleClick = () => {
    navigate(`/product/${id}`); 
  };

  const handleAddToCart = () => {
    setItems(prevItems => [...prevItems, { id, brand, price, gallery, size ,colors}]); 
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
          handleAddToCart()
          navigate("/mainpage")
        }}
          src={CircleIcon}
          alt="Add to Cart"
          className={`absolute bottom-32 right-0 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer`}
        />
      )}

      <img  onClick={handleClick} src={gallery} alt="" className="w-[354px] h-[330px]" />

      <div>
        <button>{brand}</button>
        <p>{convertCurrency(price).toFixed(2)} {currency == 'dollar' ? '$' : '₼'}</p>
      </div>
    </div>
  );
}
