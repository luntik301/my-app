// src/pages/CityListPage.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/slices/citySlice';
import { RootState } from '../store/store';
import { removeUser } from '../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import CityCard from '../components/CityCard';

const HomePage = () => {
    const dispatch = useDispatch();
    const { cities, status, error } = useSelector(
        (state: RootState) => state.city
    );

    const { email, isAuth } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(removeUser());
        return <Navigate to='/signUp' />;
    };

    //После перезагрузки страницы перестает работать кнопка выхода из аккаунта

    useEffect(() => {
        dispatch(fetchCities(1000000) as any);
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return isAuth ? (
        <div>
            <h1>City Cards</h1>
            {cities.map((city) => (
                <CityCard key={city.id} city={city} />
            ))}
            <button onClick={handleLogout}>Выйти из {email}</button>
        </div>
    ) : (
        <Navigate to='/signUp' />
    );
};

export default HomePage;
