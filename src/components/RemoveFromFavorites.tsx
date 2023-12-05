// src/pages/RemoveFromFavorites.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/slices/favoriteSlice';
import "../styles/FavoritesPage.scss";


interface CityCardProps {
    city: {
        id: number;
        name: string;
        country: string;
        population: number;
    };
}


const RemoveFromFavorites: React.FC<CityCardProps> = ({ city }) => {
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = (cityId: number) => {
        dispatch(removeFromFavorites(cityId));
    };

    return (
        <button onClick={() => handleRemoveFromFavorites(city.id)}>Remove from Favorites</button>
    );
};

export default RemoveFromFavorites;
