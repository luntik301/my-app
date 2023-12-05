// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import userReducer from './slices/userSlice';
import { geoDBApi } from '../api/GeoDBApi';

const store = configureStore({
    reducer: {
        city: cityReducer,
        user: userReducer,
        [geoDBApi.reducerPath]: geoDBApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geoDBApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
