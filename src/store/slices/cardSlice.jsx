import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/products';

const initialState = {
    items: products,
    filteredItems: products,
    searchQuery: '',
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        searchProducts: (state, action) => {
            const query = action.payload.toLowerCase().trim();
            state.searchQuery = query;

            if (!query) {
                state.filteredItems = state.items;
            } else {
                state.filteredItems = state.items.filter(product =>
                    product.value.toLowerCase().includes(query) ||
                    product.alt.toLowerCase().includes(query) ||
                    (product.category && product.category.toLowerCase().includes(query))
                );
            }
        },

        clearSearch: (state) => {
            state.searchQuery = '';
            state.filteredItems = state.items;
        },
    },
});

export const { searchProducts, clearSearch } = cardsSlice.actions;
export default cardsSlice.reducer;