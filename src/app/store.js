import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlide';
import creditReducer from '../features/credit/creditSlice';
import productsReducer from '../features/products/productSlide';
import profileReducer from '../features/profile/profileSlide';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        credit: creditReducer,
        products: productsReducer,
        profile: profileReducer,
    },
});