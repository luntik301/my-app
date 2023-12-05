// CityDetailsPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Ваш код для получения данных о городе по ID и отображения подробной информации

    return (
        <div>
            <h1>Details for City {id}</h1>
        </div>
    );
};

export default CityDetailsPage;
