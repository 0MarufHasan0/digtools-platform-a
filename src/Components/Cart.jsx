import { FileText } from 'lucide-react';
import React from 'react';

const Cart = ({ cartItems ,setCartItems}) => {

    const handleRemoveItem = (id) => {
        const filteredItems = cartItems.filter(item => item.id !== id);
        setCartItems(filteredItems);
    };


const handleCheckout = () => {
    
    setCartItems([]);
}

    console.log(cartItems)
    return (
        <div>
            <div className='container mx-auto bg-white-100 p-6 rounded-lg shadow-lg mt-10 lg:mt-20'>
                <h1 className='text-2xl font-bold'>
                Your Cart 
            </h1>





{
    cartItems.length === 0 ? (
        <div className='text-center py-10'>
            <FileText className='mx-auto text-gray-400' size={50} />
            <p className='text-gray-500 mt-4'>Your cart is empty</p>
        </div>
    ) : (
    <>
    
    
    
    
            {
                cartItems.map (item=> (
                    <div  key={item.id}>
                    <div className='flex items-center gap-4 mt-4'>
                        
                        <img src={item.img} alt={item.name} className='w-5 h-5' />
                       
                            <div>
                                <h2 className='text- font-bold'>{item.name}</h2>
                            <p className='text-gray-600'>${item.price}/{item.period}</p>
                            <button onClick={() => handleRemoveItem(item.id)} className='text-red-500 hover:text-red-700 rounded-full text-sm mt-2' >
                                Remove
                            </button>
                            </div>
                        
                       
                    </div>

                   
                         
                        
                    </div>
                ))

                   
                       
            }

            <div className='flex justify-between items-center mt-6'>
                <h2>Total :</h2>
                    <p>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </div>

           <button onClick={handleCheckout} className='btn p-6 w-full  font-bold rounded-full shadow-lg mt-6 mb-6  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '>Proceed To Checkout</button>
    
    
    
    
    
    
    </>
    )
}


            </div>
            
            
        </div>
    );
};

export default Cart;