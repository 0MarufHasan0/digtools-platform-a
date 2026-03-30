import React, { use } from 'react';

const DigitalToolsData = ({digitalTools}) => {
    const toolsData = use(digitalTools)
    console.log(toolsData)
    return (
        <div>
            <div>
        <h1 className='text-bold text-4xl text-[#101727] text-center mt-10 lg:mt-20'>Premium Digital Tools</h1>
            <p className='text-lg text-[#6B7280] text-center mt-2'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className='container mx-auto mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {toolsData.map((tool) => (
                    <div key={tool.id}>
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
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full shadow-lg  btn-block">Buy Now</button>
    </div>
  </div>
</div>

                    </div>
                    </div>
                ))}

          </div>

            </div>
        </div>

    );
};

export default DigitalToolsData;