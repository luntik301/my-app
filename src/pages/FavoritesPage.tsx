// src/pages/FavoritesPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import CityCard from '../components/CityCard';
import { removeFromFavorites } from '../store/slices/favoriteSlice';
import "../styles/FavoritesPage.scss";

const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.list);

    const handleRemoveFromFavorites = (cityId: number) => {
        dispatch(removeFromFavorites(cityId));
    };

    return (
        <div className='favorites-page'>
            <h1>Favorites</h1>
            {favorites.map((city) => (
                <div key={city.id} className="favorite-city">
                    <CityCard city={city} />
                    <button onClick={() => handleRemoveFromFavorites(city.id)}>Remove from Favorites</button>
                </div>
            ))}
        </div>
    );
};

export default FavoritesPage;
