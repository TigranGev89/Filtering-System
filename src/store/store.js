import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/productsApi';


const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;