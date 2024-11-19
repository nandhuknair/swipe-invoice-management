import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from './invoicesSlice';
import productsReducer from './productSlice';
import customersReducer from './customersSlice';

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    products: productsReducer,
    customers: customersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;