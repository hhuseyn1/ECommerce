import React from 'react'
import LogoIcon from '../../assets/logo.png'
import CartIcon from '../../assets/EmptyCart.svg'
import { useState } from 'react';

export default function Navigation() {

  const [selectedOption, setSelectedOption] = useState('dollar');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <nav className="flex justify-between items-center">
      <div className='flex'>
        <button className='hover:border-b-2 border-b border-transparent hover:border-green-500 mr-5'>Women</button>
        <button className='hover:border-b-2 border-b border-transparent hover:border-green-500 mr-5'>Men</button>
        <button className='hover:border-b-2 border-b border-transparent hover:border-green-500'>Kids</button>
      </div>  
      <div className='flex items-center'>
        <img src={LogoIcon} alt="" />
      </div>
      <div className='flex items-center'>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="dollar">$</option>
          <option value="manat">₼</option>
        </select>
        <img src={CartIcon} alt="Cart Icon" className='hover: cursor-pointer' />
      </div>
    </nav>
  )
}
