import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deductCredit, resetCredit } from '../features/credit/creditSlice';
import ShopCard from '../components/ShopCard';
const Carrito = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const credit = useSelector((state) => state.credit.balance);
    const navigate = useNavigate();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


    const handleCheckout = () => {
        if (credit >= total) {
            dispatch(deductCredit(total));
            navigate('/success');
        } else {
            navigate('/error');
        }
    };

    return (
        <div className='w-full '>
            <div className='max-w-6xl mx-auto '>
                <h1 className='text-center text-3xl font-bold m-4'>Carrito</h1>
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} >
                            <ShopCard item={item} />
                        </div>
                    ))}
                </div>
                <div className=''>

                    <div className='rounded pr-4 py-5 mr-4 ml-3  shadow-xl flex justify-between border p-4 '>
                        <p className='font-bold'>
                            Total
                        </p>
                        <p className='font-bold'>
                            ${total}
                        </p>
                    </div>
                    <div className='flex justify-between  mt-10 mx-3'>
                        <button className='bg-black text-white p-1.5 rounded-[5px] ' onClick={() => navigate('/')}>Volver al catálogo</button>
                        <button className='bg-black text-white p-1.5 rounded-[5px] ' onClick={handleCheckout}> Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito