import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const credit = useSelector((state) => state.credit.balance);
    const profilename = useSelector((state) => state.profile.firstName);
    return (
        <nav className="py-4 bg-primary text-white flex justify-between m-2 px-4">
            <div>

                <Link to="/" className='font-bold text-2xl'>Tienda de productos</Link>
            </div>
            <div className="flex gap-4">
                <span>{profilename}</span>
                <Link to="/cart">Carrito ({cartItems.length})</Link>
                <span>Crédito: ${credit}</span>
            </div>
        </nav>
    )
}

export default Navbar