import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlide';
import creditReducer from '../features/credit/creditSlice';
import productsReducer from '../features/products/productSlide';
import profileReducer from '../features/profile/profileSlide';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'credit'],
};

const rootReducer = combineReducers({
    credit: creditReducer,
    cart: cartReducer,
    products: productsReducer,
    profile: profileReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
