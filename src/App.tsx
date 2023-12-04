// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from './features/citySlice';
import { RootState } from './app/store';
import CityCard from './components/CityCard';
import './App.css'; // Создайте App.css для стилей App компонента

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { cities, status, error } = useSelector(
    (state: RootState) => state.city
  );

  useEffect(() => {
    // Пример: Получаем города с населением более 1 миллиона
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

export default App;
