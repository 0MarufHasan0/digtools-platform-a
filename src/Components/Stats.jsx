import React from 'react';

const Stats = () => {
    return (
        <div>
<div class="stats stats-horizontal bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white shadow w-full text-center mt-20">
  <div class="stat border-r border-white/30 ">
    
   <div>
     <div class="stat-value">50K</div>
    <div class="stat-title text-white">Active Users</div>
   </div>
    
  </div>
 

  <div class="stat  border-r border-white/30">
       <div class="stat-value">200+</div>
    <div class="stat-title text-white">Premium Tools</div>
  </div>

  <div class="stat  border-r border-white/30">
       <div class="stat-value">4.9</div>
    <div class="stat-title text-white">Rating</div>
  </div>
</div>
            
        </div>
    );
};

export default Stats;