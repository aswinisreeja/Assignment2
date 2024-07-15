import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../contexts/WeatherContext';

const HomePage = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();
  const navigate = useNavigate();

  const handleSearch = async () => {
    const encodedCity = encodeURIComponent(city); 
    await fetchWeather(encodedCity);
    navigate(`/details/${encodedCity}`);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch} disabled={!city}>
        Search
      </button>
      
    </div>
  );
};

export default HomePage;
