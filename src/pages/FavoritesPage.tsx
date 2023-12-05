// src/pages/FavoritesPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import CityCard from '../components/CityCard';
import { removeFromFavorites } from '../store/slices/favoriteSlice';
import "../styles/FavoritesPage.scss";
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
    const favorites = useSelector((state: RootState) => state.favorites.list);
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
        </div>
    );
};

export default FavoritesPage;
