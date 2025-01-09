import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlide';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            {isInCart ? (
                <button
                    onClick={() => (window.location.href = '/cart')}
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                >
                    Ver carrito
                </button>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
                >
                    Agregar al carrito
                </button>
            )}
        </div>
    );
};

export default ProductCard;