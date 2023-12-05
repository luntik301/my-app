import { configureStore } from '@reduxjs/toolkit';
import { geoDBApi } from '../api/GeoDBApi';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [geoDBApi.reducerPath]: geoDBApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geoDBApi.middleware),
});