import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../contexts/ContextWrapper';
import LogoIcon from '../../assets/logo.png'
import CartIcon from '../../assets/EmptyCart.svg'


export default function Navigation() {
  const [selectedOption, setSelectedOption] = useState('dollar');
  const { currency,setCurrency,cartItems,categories, getCategories, setCurrentCategory, filterProducts } = useContext(MyContext);


  useEffect(() => {
    getCategories();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setCurrency(event.target.value);
  };


  return (
    <nav className="flex justify-between items-center">
      <ul className="flex mx-4">
        {categories.map((c) => (
          <li key={c} className="flex flex-col text-center w-[70px] h-[56px]">
            <Link to='/mainpage' onClick={() => {
              setCurrentCategory(c);
              filterProducts(c);
            }} className="py-6 border-b-2 mt-3 border-transparent hover:text-green-400 hover:border-green-400">
              {c}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex items-center hover:cursor-pointer'>
        <Link to="/mainpage">
          <img src={LogoIcon} alt="Logo" />
        </Link>
      </div>
      <div className='flex items-center'>
        <select value={currency} onChange={handleOptionChange}>
          <option value="dollar">$</option>
          <option value="manat">₼</option>
        </select>
        <Link to="/cart">
          <img src={CartIcon} alt="Cart Icon" className='hover: cursor-pointer' />
        </Link>
          <p className='mx-1 mb-5'>{cartItems?.length ? cartItems.length : ''}</p>
      </div>
    </nav>
  );
}
