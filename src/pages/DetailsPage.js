import React, { useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { useWeather } from '../contexts/WeatherContext';
import './DetailsPage.css'; 
import WeatherIcon from '../assets/weather-news.png';

const DetailsPage = () => {
  const { city } = useParams();
  const { weatherData, fetchWeather } = useWeather();
  const navigate = useNavigate();

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  if (!weatherData) {
    return <h1 className="details-page">Results not found</h1>;
  }
  const handleBack = () => {
    navigate(-1); 
  };
  return (
    <div className="details-page">
      <div className="weather-card">
        <div className="search-box">
          <input type="text" value={city} readOnly />
          <button>🔍</button>
        </div>
        <div className="weather-icon">
          <img src={WeatherIcon} alt="Weather icon" />
        </div>
        <div className="temperature">
          <h1>{weatherData.main.temp}°C</h1>
        </div>
        <div className="city-name">
          <h2>{weatherData.name}</h2>
        </div>
        <div className="weather-details">
        <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} Km/h</p>
        </div>
        <button onClick={handleBack} className="back-button">Back</button> {/* Back Button */}
      </div>
    </div>
  );
};

export default DetailsPage;
