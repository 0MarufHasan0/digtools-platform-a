import React from 'react';

const PricingCard = () => {
    return (
        <div>

             <div className='container mx-auto  bg-white-100  rounded-lg  mt-10 lg:mt-20'>
                {/* Tittle */}
                   <div className='text-center space-y-2'>
                    <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                    <p className='text-[#627382] text-xs'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                   </div>


                   {/* Card 1 */}

                   <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-15'>

                   <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
    <div className=" space-y-2">
       <div className='space-y-2'>
       <h2 className="text-3xl font-bold">Starter</h2>
       <p className='text-xs text-gray-400'>Perfect for getting started</p>
     </div>
     
  <div className="flex items-end gap-1">
    <span className="text-3xl font-bold">$0</span>
    <span className="text-sm text-gray-500">/Month</span>
  </div>
    
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
        <br />
        <br />
        <br />
        <br />
      </li>
     
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started Free</button>
    </div>
  </div>


  
</div>

                   {/* Card 2 */}

                   <div className="card mt-5  w-96 bg-base-100 shadow-sm">
  <div className="card-body bg-linear-to-r relative rounded-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl from-[#4F39F6] to-[#9514FA] text-white">
    <span className="badge badge-xs font-bold text-xs absolute -top-5 right-25 w-50 p-4  badge-warning  ">Most Popular</span>
    <div className=" space-y-2">
     <div className='space-y-2'>
       <h2 className="text-3xl font-bold">Pro</h2>
       <p className='text-xs text-gray-400'>Best for professionals</p>
     </div>
     <div className="flex items-end gap-1">
    <span className="text-3xl font-bold">$29</span>
    <span className="text-sm text-white">/Month</span>
    </div>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
        <br />
        <br />
      </li>
     
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block bg-white  text-[#4F39F6] rounded-full">Start Pro Trial</button>
    </div>
  </div>



</div>

                   {/* Card 3 */}

                   <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
    <div className=" space-y-2">
      <div className='space-y-2'>
       <h2 className="text-3xl font-bold">Enterprise</h2>
       <p className='text-xs text-gray-400'>For teams and businesses</p>
     </div>
     <div className="flex items-end gap-1">
    <span className="text-3xl font-bold">$99</span>
    <span className="text-sm text-gray-500">/Month</span>
    </div>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
     
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Contact Sales</button>
    </div>
  </div>



</div>
</div>

             </div>
            
        </div>
    );
};

export default PricingCard;