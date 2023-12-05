// src/store/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
    list: Array<{
        id: number;
        name: string;
        country: string;
        population: number;
    }>;
}

const loadFavoritesFromLocalStorage = (): FavoritesState => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : { list: [] };
};

const saveFavoritesToLocalStorage = (favorites: FavoritesState) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const initialState: FavoritesState = loadFavoritesFromLocalStorage();

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<{ id: number, name: string, country: string, population: number }>) => {
            const { id, name, country, population } = action.payload;
            if (!state.list.some(city => city.id === id)) {
                state.list.push({ id, name, country, population });
                saveFavoritesToLocalStorage(state);
            }
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(city => city.id !== action.payload);
            saveFavoritesToLocalStorage(state);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
