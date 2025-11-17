import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => 'products',
            providesTags: ['Products'],
        }),


        getProductsByCategory: builder.query({
            query: (category) => `products/category/${category}`,
            providesTags: ['Products'],
        }),


        searchProducts: builder.query({
            query: (query) => `products/search?q=${query}`,
            providesTags: ['Products'],
        }),


        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),


        getCategories: builder.query({
            query: () => 'products/categories',
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductsByCategoryQuery,
    useSearchProductsQuery,
    useGetProductByIdQuery,
    useGetCategoriesQuery,
} = productsApi;