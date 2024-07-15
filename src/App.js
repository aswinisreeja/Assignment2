import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WeatherProvider } from './contexts/WeatherContext';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import './styles.css';
const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:city" element={<DetailsPage />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
};

export default App;


