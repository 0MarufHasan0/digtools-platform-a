import React from 'react';
import GetStartImg1 from "../assets/user.png"
import GetStartImg2 from "../assets/package.png"
import GetStartImg3 from "../assets/rocket.png"

import countImg from "../assets/01.png"
import countImg2 from "../assets/02.png"
import countImg3 from "../assets/03.png"

const GetStart = () => {
    return (
        <div>
            <div className='container mx-auto bg-white-100  rounded-lg shadow-lg mt-10 lg:mt-20'>
                <div className='text-center'>
                    
                <h1 className='text-[#101727] font font-extrabold text-4xl'>Get Started in 3 Steps</h1>
                <p className='text-xs text-[#6B7280]'>Start using premium digital tools in minutes, not hours.</p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-30 '>
                    {/* 1st Card */}
                 <div className='relative   p-15 rounded-lg shadow-lg flex flex-col items-center text-center space-y-3'>
                 <div >
                     <img src={countImg} alt="Step 1" className='absolute top-0 right-30' />
                 </div>


                  
                        
                    <img src={GetStartImg1} alt="user " className='bg-linear-to-r from-[#4F39F6]/30 p-3 to-[#9514FA]/30 h-20 w-20 rounded-full' />

                    <h1 className='text-xl font-bold'>Create Account</h1>
                    <p className='text-[#627382] text-[16px]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                  
                
                </div>
                {/* 2nd Card */}
                 <div className='relative  p-15 rounded-lg shadow-lg flex flex-col items-center text-center  space-y-3' >
                 <div >
                     <img src={countImg2} alt="Step 1" className='absolute top-0 right-30' />
                 </div>


                  
                        
                    <img src={GetStartImg2} alt="user" className='bg-linear-to-r from-[#4F39F6]/30 p-3 to-[#9514FA]/30 h-20 w-20 rounded-full' />

                    <h1 className='text-xl font-bold'>Choose Products</h1>
                    <p className='text-[#627382] text-[16px]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                  
                
                </div>
                {/* 3rd Card */}




                <div className='relative  p-15 rounded-lg shadow-lg flex flex-col items-center text-center  space-y-3'>
                 <div >
                     <img src={countImg3} alt="Step 1" className='absolute top-0 right-30' />
                 </div>


                  
                        
                    <img src={GetStartImg3} alt="user" className='bg-linear-to-r from-[#4F39F6]/30 p-3 to-[#9514FA]/30 h-20 w-20 rounded-full' />

                    <h1 className='text-xl font-bold'>Start Creating</h1>
                    <p className='text-[#627382] text-[16px]'> Download and start using your premium <br /> tools immediately.</p>
                  
                
                </div>



</div>

                </div>


            
        </div>
    );
};

export default GetStart;