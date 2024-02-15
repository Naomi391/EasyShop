import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion"
import { IoIosCloseCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import SideNavContent from './SideNavContent';
import { Link } from 'react-router-dom';


const HeaderBottom = () => {
    const ref=useRef();
    const [sidebar,setSidebar]= useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
         if(e.target.contains(ref.current)){
            setSidebar(false)
         }
        })
    },[ref,sidebar])
  return (
    <div className="w-full px-4 h-[36px] bg-primary text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm font-light  tracking-wide justify-center">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-4 text-lg font-medium"
        >
          <GiHamburgerMenu />
          All
        </li>
        <li className="headerHover text-amber-400 ml-72 hover:text-white"><a href="#">Today's Deals</a></li>
        <li className="headerHover text-amber-400 ml-8 hover:text-white"><a href="#">Customer Service</a></li>
        <li className="headerHover text-amber-400 ml-8 hover:text-white"><a href="#">Gift Cards</a></li>
      </ul>
      {/* sidebar */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="w-[350px] h-full bg-white border border-black">
              <Link to={"/Login"} className="w-full bg-primary text-white py-2 px-6 flex items-center gap-4">
                <MdAccountCircle />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </Link>
              
              <SideNavContent
                title="Shop By Department"
                one="Phones"
                two="Laptops"
                three="Clothes"
              />
              <SideNavContent
                title="Our Deals"
                one="Gift Cards"
                two="Discounts"
                three="Top sales"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
            <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-0 left-[300px] w-10 h-10 text-amber-400 flex items-center justify-center bg-transparent text-3xl hover:text-white duration-300">
                <IoIosCloseCircle />
            </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBottom