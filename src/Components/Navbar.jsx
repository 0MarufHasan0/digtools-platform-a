import { Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = ({ cartCCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
    return (
         <div className=' sticky top-0 z-60 bg-white'>
            <div className="navbar   border-b-gray-400 border-b-2 shadow-lg">
                <div className="navbar-start">
                    <h2 className='text-xl sm:text-2xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-5 font-semibold text-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-5 md:mx-4">

                    <div className=' gap-5  items-center'>
                        
                     {
                        cartCCount > 0 && (
                            <div className=' bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                                {cartCCount}
                            </div>
                        )
                     } <ShoppingCart className=' cursor-pointer' />

                        <a className=' hidden md:flex font-semibold btn-outline text-[#101727] cursor-pointer'>Login</a>
                    </div>

                    
                <btn className="btn hidden md:flex bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</btn>
                    <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {
                menuOpen && (
                    <div className='md:hidden absolute left-0 top-full w-full bg-white shadow-md px-4 py-4 flex flex-col gap-3 font-semibold text-[#101727]'>
                        <a>Products</a>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>Testimonials</a>
                        <a>FAQ</a>
                        <div className='flex flex-col gap-3 mt-3'>
                          <btn className=" w-40 p-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</btn>
                            <a >Login</a>
                        </div>
                    </div>
                )
            }
        </div>
        
    );
};

export default Navbar;
