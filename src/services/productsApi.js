import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import productsData from '../mockData/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return { data: productsData };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;