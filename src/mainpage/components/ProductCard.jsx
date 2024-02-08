import React, { useState } from 'react';
import AddToCart from '../../assets/CircleIcon.svg'

export default function ProductCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>  
      <div
        className={`flex flex-col w-[386] h-[444px] hover:shadow shadow-slate-400 transition duration-100 ease-in-out ${
          isHovered ? 'relative' : ''
        } my-5 hover: cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
             {isHovered && (
          <img
            src={AddToCart}
            alt="Add to Cart"
            className={`absolute bottom-32 right-0 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer`}
          />
        )}

        <img
          src="https://imgs.search.brave.com/beHaCmQv3SAoUenw-s8BkQD-qY7qK9RlBSoRytfvBnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvQXVk/aS1BNC1QTkctUGhv/dG9zLnBuZw"
          alt=""
          className="w-[354px] h-[330px]"
        />
        
        <div>
          <h3>Apollo Running Short</h3>
          <p>$50.00</p> 
        </div>
      </div>
    </>
  );
}
