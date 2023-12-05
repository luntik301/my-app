// src/pages/CityListPage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/slices/citySlice';
import { RootState } from '../store/store';
import CityCard from '../components/CityCard';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { cities, status, error } = useSelector(
        (state: RootState) => state.city
    );

    useEffect(() => {
        dispatch(fetchCities(1000000) as any);
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>City Cards</h1>
            {cities.map((city) => (
                <CityCard key={city.id} city={city} />
            ))}
        </div>
    );
};

export default HomePage;
