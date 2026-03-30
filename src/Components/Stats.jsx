import React from 'react';

const Stats = () => {
    return (
        <div>
<div className="stats stats-horizontal bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white shadow w-full text-center mt-20">
  <div className="stat border-r p-6 border-white/30 ">
    
   <div>
     <div className="stat-value">50K</div>
    <div className="stat-title text-white">Active Users</div>
   </div>
    
  </div>
 

  <div className="stat  border-r border-white/30">
       <div className="stat-value">200+</div>
    <div className="stat-title text-white">Premium Tools</div>
  </div>

  <div className="stat  border-r border-white/30">
       <div className="stat-value">4.9</div>
    <div className="stat-title text-white">Rating</div>
  </div>
</div>
            
        </div>
    );
};

export default Stats;