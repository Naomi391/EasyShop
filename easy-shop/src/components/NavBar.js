import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import Search from "./Search";

const NavBar = () => {
  const [cart, setCart] = useState(0);

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
            <a className="text-sm xl:text-base font-bold cursor-pointer">
              Account
            </a>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
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
      <div className="flex bg-primary text-amber-400 space-x-3 text-xs xl:text-sm p-2 pl-6 justify-center space-x-6">
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </header>
  );
};

export default NavBar;
