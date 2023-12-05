// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';
import userReducer from './slices/userSlice';
import favoritesReducer from './slices/favoriteSlice';
import { geoDBApi } from '../api/GeoDBApi';

const store = configureStore({
    reducer: {
        city: cityReducer,
        user: userReducer,
        favorites: favoritesReducer, // Добавлен срез favorites
        [geoDBApi.reducerPath]: geoDBApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geoDBApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
