import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Search from './Search';
import MyCart from './MyCart'; // Import MyCart component
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import HeaderBottom from "./HeaderBottom";

const NavBar = () => {
  const [cart, setCart] = useState(0);

  // Function to handle adding items to the cart
  const handleAddToCart = () => {
    // Implement your logic to add items to the cart
    // For now, let's just increment the cart count
    setCart(cart + 1);
  };

  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-primary text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <h2><span className="text-amber-400"><strong className="text-xl">e</strong>asy</span>Shop</h2>
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Nairobi</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <p className="text-xs xl:text-sm ">Hello, sign in</p>
            <Link to={"/Login"} className="text-sm xl:text-base font-bold cursor-pointer">
              Account
            </Link>
          </div>
          {/* Wrap ShoppingCartIcon with Link and set to prop to the cart page */}
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3" onClick={handleAddToCart}>
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export default NavBar;
