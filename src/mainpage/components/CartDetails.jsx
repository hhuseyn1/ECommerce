import React from "react"; 
import { useState, useEffect } from "react"; 
import Navigation from "./Navigation";

function CartCard({items}) { 
  const[total, setTotal]=useState(0)

  useEffect(() => {
    const totalPrice = items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    setTotal(totalPrice);
  }, [items]);
  return ( 
    <> 
    <div className="mx-32">

    <Navigation/>
      <div className="border border-x-0 border-y-slate-300 py-4 mt-10 flex justify-between flex-col sm:flex-row"> 
        { items.length>0 ? (
            <>
            {cartItems.map((item, index) => (
            <CartCard key={index} item={item} />
          ))
          }
          <h5 className="font-[Raleway] text-[24px]">
            Quantity: <span className="font-bold">{cartItems.length}</span>
          </h5>
          <h5 className="font-[Raleway] text-[24px]">
            Total: <span className="font-bold">${total}</span>
          </h5>
          <button className="w-[279px] h-[43px] bg-[#5ECE7B] text-white border-0">
            ORDER
          </button>
            </>
        ): (
          <p className="col-span-3 text-center font-bold">Cart Empty!
          </p>
        )
        }
      </div>  
        </div>
    </> 
  ); 
} 
 
export default CartCard;