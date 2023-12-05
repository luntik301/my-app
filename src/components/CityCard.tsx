// src/components/CityCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../store/slices/favoriteSlice';
import "../styles/CityCard.scss"

interface CityCardProps {
    city: {
        id: number;
        name: string;
        country: string;
        population: number;
    };
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(city));
    };

    return (
        <div className="city-card">
            <h2>{city.name}</h2>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
    );
};

export default CityCard;
