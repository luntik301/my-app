// src/pages/HomePage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/slices/citySlice';
import { RootState } from '../store/store';
import CityCard from '../components/CityCard';
import { Link } from 'react-router-dom';
import "../styles/HomePage.scss"
import LogoutButton from '../components/LogoutButton';

const HomePage = () => {
    const dispatch = useDispatch();
    const { cities, status, error } = useSelector(
        (state: RootState) => state.city
    );

    useEffect(() => {
        dispatch(fetchCities(1000000) as any);
    }, []);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    return (
        <div className='home-page'>
            <h1>City Cards</h1>
            {cities.map((city) => (
                <Link key={city.id} to={`/city/${city.id}`}>
                    <CityCard city={city} />
                </Link>
            ))}
            <Link to="/favorites">Favorites</Link>
            <LogoutButton />
        </div>
    )
};

export default HomePage;