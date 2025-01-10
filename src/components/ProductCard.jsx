import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlide';
import productImage from '../../src/assets/image-product.jpg';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = Array.isArray(cartItems) && cartItems.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col h-full">
            <div className="relative w-full aspect-square mb-4">
                <img
                    src={productImage}
                    alt={product.title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex-grow text-center">
                <h2 className=" font-semibold line-clamp-3 mb-2">{product.title}</h2>
                <p className="font-semibold text-primary  mb-4">${product.price}</p>
            </div>
            {isInCart ? (
                <button
                    className="bg-primary text-white px-4 py-2 mt-2 rounded"
                    onClick={() => navigate('/cart')}
                >
                    Ver carrito
                </button>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className="bg-primary text-white px-4 py-2 mt-2 rounded"
                >
                    Agregar al carrito
                </button>
            )}
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;