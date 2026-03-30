import React, { use } from 'react';
import DigitalDataCard from './DigitalDataCard';

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

                    <DigitalDataCard key={tool.id} tool={tool} />
                   
                ))}

          </div>

            </div>
        </div>

    );
};

export default DigitalToolsData;