import React, { FC } from "react";
import { CurrentWeatherProps } from "./CurrentWeatherType";

const CurrentWeather: FC<CurrentWeatherProps> = ({ currentWeather }) => {
  return (
    currentWeather && (
      <div className="current-weather">
        <img
          src={`icons/${currentWeather.weatherIcon}.svg`}
          className="weather-icon"
        ></img>
        <h2 className="temperature">
          {currentWeather.temperature}
          <span className="deg">°C</span>
        </h2>
        <p className="description">{currentWeather.description}</p>
      </div>
    )
  );
};

export default CurrentWeather;
