import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cardSlice';
import { productsApi } from './api/productsApi';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});