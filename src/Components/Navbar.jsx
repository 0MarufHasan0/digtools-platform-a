import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div>
           <div className="navbar container mx-auto">
      <div className="navbar-start">
        <a className="  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-2xl  md:text-4xl">DigTools</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="  md:navbar-end gap-5">

         <a className="btn border-none">  <ShoppingCart /></a>
        
        <a className="btn border-none hidden md:flex">Login</a>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"> Get in Touch</a>
      </div>
    </div>
        </div>
    );
};

export default Navbar;