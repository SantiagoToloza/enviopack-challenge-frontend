import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import creditReducer from '../features/credit/creditSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        credit: creditReducer,
        products: productsReducer,
    },
});