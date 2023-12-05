// src/components/AddToFavorites.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../store/slices/favoriteSlice';

interface CityCardProps {
    city: {
        id: number;
        name: string;
        country: string;
        population: number;
    };
}

const AddToFavorites: React.FC<CityCardProps> = ({ city }) => {
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(city));
    };

    return (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
    );
};

export default AddToFavorites;
