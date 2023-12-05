// src/pages/FavoritesPage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CityCard from '../components/CityCard';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/FavoritesPage.scss";


const FavoritesPage = () => {
    const favorites = useSelector((state: RootState) => state.favorites.list);
    const navigate = useNavigate();

    const GoHome = () => {
        navigate('/')
    };
    return (
        <div className='favorites-page'>

            <h1>Favorites</h1>

            {favorites.map((city) => (
                <div key={city.id} className="favorite-city">
                    <Link key={city.id} to={`/city/${city.id}`}>
                        <CityCard city={city} />
                    </Link>
                </div>
            ))}
            <button onClick={GoHome}>Main Page</button>

        </div>
    );
};

export default FavoritesPage;
