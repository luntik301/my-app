// src/components/CityDetailsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/slices/citySlice';
import { RootState } from '../store/store';
import { useParams } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import AddToFavorites from '../components/AddToFavorites';
import RemoveFromFavorites from '../components/RemoveFromFavorites';
import '../styles/CityDetailsPage.scss'

const CityDetailsPage: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
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

    const city = cities.find((c) => c.id === Number(id));

    if (!city) {
        return <div>City not found</div>;
    }

    return (
        <div className='city-page'>
            <h1>City: {city.name}</h1>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
            <p>Country Code: {city.countryCode}</p>
            <p>Region: {city.region}</p>
            <p>Region Code: {city.regionCode}</p>
            <div className='footer'>
                <AddToFavorites city={city} />
                <RemoveFromFavorites city={city} />
            </div>

        </div>
    )
};

export default CityDetailsPage;
