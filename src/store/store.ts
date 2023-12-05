//store.ts

import { configureStore } from '@reduxjs/toolkit'
import { geoDBApi } from '../api/GeoDBApi'
import cityReducer from './slices/citySlice'
import userReducer from './slices/userSlice'
import favoritesReducer from './slices/favoriteSlice'


const store = configureStore({
    reducer: {
        city: cityReducer,
        user: userReducer,
        favorites: favoritesReducer,
        [geoDBApi.reducerPath]: geoDBApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(geoDBApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
