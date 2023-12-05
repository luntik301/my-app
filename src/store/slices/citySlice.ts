// src/features/citySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface City {
    id: number;
    name: string;
    country: string;
    population: number;
    countryCode: string;
    regionCode: string;
    region: string;
}

interface CityState {
    cities: City[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CityState = {
    cities: [],
    status: 'idle',
    error: null,
};

export const fetchCities = createAsyncThunk(
    'cities/fetchCities',
    async (minPopulation: number) => {
        try {
            const response = await axios.get(
                'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
                {
                    params: {
                        minPopulation: minPopulation.toString(),
                    },
                    headers: {
                        'X-RapidAPI-Key':
                            'a96545d366msh74c6826b82a940cp107856jsnfa1eb5ea0a32',
                        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
                    },
                }
            );
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
);

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to fetch cities';
            });
    },
});

export default citySlice.reducer;
