import React from 'react';
import bannerImg from '../assets/banner.png';
import badgeImg from '../assets/badge.png';
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div>
            <div className=" container mt-30 mx-auto flex items-center overflow-hidden">
      <div className=" mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        
        {/* Left Content */}

        <div className="space-y-4 lg:order-1 order-2">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-none text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
            <img src={badgeImg} alt="New" className='animate-pulse' />New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your Digital <br /> Workflow
           
          </h1>

          <p className="text-[18px] text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 pt-4">

            <button 

            className="btn font-bold text-[14px] p-6 rounded-full 
            bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
            
            </button>

            <button 
            
            className="btn btn-outline font-bold text-[14px] p-6 
             bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  border-[#4F39F6]  rounded-full "> 
             <Play color="#4F39F6" />
             
              Watch Demo
              
              </button>
        
            
          </div>

        </div>

        {/* Right Image */}

        <div className=" lg:order-2 order-1 flex justify-center lg:justify-end">
          <div >
            <img
              className="h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={bannerImg}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;