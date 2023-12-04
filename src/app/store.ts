// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../features/citySlice';

const store = configureStore({
    reducer: {
        city: cityReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
