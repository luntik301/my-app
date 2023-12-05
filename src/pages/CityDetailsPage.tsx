// src/components/CityDetailsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/slices/citySlice';
import { RootState } from '../store/store';
import { removeUser } from '../store/slices/userSlice';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import "../styles/HomePage.scss";
import "../styles/CityCard.scss";

const CityDetailsPage: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const { cities, status, error } = useSelector(
        (state: RootState) => state.city
    );

    const { email, isAuth } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(removeUser());
        window.location.reload();
    };

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

    return isAuth ? (
        <div className='city-page'>
            <h1>{city.name}</h1>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
            <p>Country Code: {city.countryCode}</p>
            <p>Region: {city.region}</p>
            <p>Region Code: {city.regionCode}</p>
            <button onClick={handleLogout}>Выйти из {email}</button>
        </div>
    ) : (
        <div>Unauthorized access</div>
    );
};

export default CityDetailsPage;
