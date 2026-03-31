import React, { Suspense, use, useState  } from 'react';
import DigitalDataCard from './DigitalDataCard';
import Cart from './Cart';

const DigitalToolsData = ({digitalTools}) => {

   
    const toolsData = use(digitalTools)
    const [activeTab, setActiveTab] = useState('Products')
    const [cartItems, setCartItems] = useState([])
    console.log(toolsData)
    console.log(activeTab)
    console.log(cartItems)

    
    return (
        <div>
            <div>
        <h1 className='text-bold text-4xl text-[#101727] text-center mt-10 lg:mt-20'>Premium Digital Tools</h1>
            <p className='text-lg text-[#6B7280] text-center mt-2'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            
                    {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center mt-10 lg:mt-20">

                <input
                 type="radio"
                 name="my_tabs_1" 
                 className={`tab rounded-full w-40   ${activeTab === 'Products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white-100 text-[16px]  font-bold'}`} 
                 aria-label="Products" 
                 onClick={() => setActiveTab('Products')}
                 defaultChecked
                 />

                <input 
                type="radio"
                 name="my_tabs_1"
                  className={`tab rounded-full w-40  ${activeTab === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white-100 text-[16px]  font-bold'}`} 
                  aria-label={`Cart (${cartItems    .length})`}
                  onClick={() => setActiveTab('Cart')}
                />

                </div>

            <div className='container mx-auto mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

               {
                activeTab === 'Products' && (
                    toolsData.map((tool) => (
                        <DigitalDataCard key={tool.id} tool={tool} cartItems={cartItems} setCartItems={setCartItems} />
                    ))
                )
               }

          </div>
           <Suspense>
            {
                activeTab === 'Cart' && (
                    <Cart activeTab={activeTab} cartItems={cartItems} setCartItems={setCartItems} setActiveTab={setActiveTab} />
                )
            }

           </Suspense>
            </div>
           
        </div>

    );
};

export default DigitalToolsData;