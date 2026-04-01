import { Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
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

                    <div className='hidden md:flex gap-5  items-center'>
                        
                        <ShoppingCart className=' cursor-pointer' />

                        <a className='font-semibold btn-outline text-[#101727] cursor-pointer'>Login</a>
                    </div>

                    
                <btn className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</btn>
                    <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {
                menuOpen && (
                    <div className='md:hidden flex flex-col gap-3 pb-4 font-semibold text-[#101727]'>
                        <a>Products</a>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>Testimonials</a>
                        <a>FAQ</a>
                        <div className='flex gap-5 items-center mt-2'>
                            <ShoppingCart />
                            <a>Login</a>
                        </div>
                    </div>
                )
            }
        </div>
        
    );
};

export default Navbar;