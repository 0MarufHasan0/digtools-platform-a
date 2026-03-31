import React, { useState } from 'react';

const DigitalDataCard = ({ tool, cartItems, setCartItems }) => {
  const [isBuying, setIsBuying] = useState(false);

const handleBuyNow = () => {
  setIsBuying(true);
  setCartItems([...cartItems, tool]);


}



    return (
        <div>

            





<div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
   <div className='flex justify-end'>
     <span className={`badge  badge-soft ${tool.tagType === 'new' ? 'badge-success' : tool.tagType === 'popular' ? 'badge-secondary' : 'badge-warning animate-pulse'}  `}>{tool.tagType}</span>
   </div>
   <div>
    <img src={tool.img} alt={tool.name} />
   </div>
    <div className='space-y-3'>
      <h2 className="text-3xl font-bold text-[#101727]">{tool.name}</h2>
      <p className='text-[#6B7280]'>{tool.description}</p>
      <span   className={`text-[16px]`} >${tool.price}/{tool.period}</span>
    
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">

        {/* future array */}
        {tool.features.map((feature, index) => (
         
         <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[#6B7280]'>{feature}</span>
      </li>
    

))}
    </ul>
    <div className="mt-6">
      <button className={`btn  ${isBuying?'btn-disabled':''} bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full shadow-lg  btn-block `}    onClick={handleBuyNow}>
        {isBuying ? 'Purchased' : 'Buy Now'}
      </button>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default DigitalDataCard;