// src/components/CityCard.tsx
import React from 'react';
import './CityCard.css';

interface CityCardProps {
    city: {
        id: number;
        name: string;
        country: string;
        population: number;
    };
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
    return (
        <div className="city-card">
            <h2>{city.name}</h2>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
            {/* Add other city details as needed */}
        </div>
    );
};

export default CityCard;
