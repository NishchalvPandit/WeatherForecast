import React from "react";

const WeatherCard = ({ weather }) => {
    return (
        <div className="glass-card current-weather-card">
            <h2>{weather.name}</h2>
            <div className="current-details">
                <p className="temp">{Math.round(weather.main.temp)}°C</p>
                <p className="condition">{weather.weather[0].description}</p>
                <p className="humidity">Humidity: {weather.main.humidity}%</p>
            </div>
        </div>
    );
};

export default WeatherCard;
