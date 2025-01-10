import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom';
import ShopCard from '../components/ShopCard';
const Carrito = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className='w-full '>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-center text-3xl font-bold m-4'>Carrito</h1>
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} >
                            <ShopCard item={item} />
                        </div>
                    ))}
                </div>
                <div className='rounded pr-4 py-2 mr-4 ml-3 shadow-xl flex justify-between border p-4 '>
                    <p className='font-bold'>
                        Total
                    </p>
                    <p className='font-bold'>
                        ${total}
                    </p>
                </div>

                <div className='flex justify-between text-xs mt-10 mx-3'>
                    <button className='bg-black text-white p-2 rounded-sm'>Volver al catálogo</button>
                    <button className='bg-black text-white p-2 rounded-sm'> Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito