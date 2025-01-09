import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const credit = useSelector((state) => state.credit.balance);
    const profilename = useSelector((state) => state.profile.username);
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <Link to="/">Catálogo</Link>
            <div className="flex gap-4">
                <span>{profilename}</span>
                <Link to="/cart">Carrito ({cartItems.length})</Link>
                <span>Crédito: ${credit}</span>
            </div>
        </nav>
    )
}

export default Navbar