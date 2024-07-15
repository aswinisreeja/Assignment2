import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '2041012694479abd9175c81d17f1503d';
    const encodedCity = encodeURIComponent(city); 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null); 
    }
  };
  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
