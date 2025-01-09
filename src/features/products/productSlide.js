import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/products.json';

const initialState = {
    products: productsData.productos,
    filteredProducts: productsData.productos,
    currentPage: 1,
    itemsPerPage: 6,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm)
            );
        },
        sortProducts: (state, action) => {
            const sortType = action.payload;
            if (sortType === 'cheapest') {
                state.filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortType === 'mostExpensive') {
                state.filteredProducts.sort((a, b) => b.price - a.price);
            }
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { filterProducts, sortProducts, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;