import { HourlyWeatherType } from "../App";
import { weatherCodes } from "../constants";
import React, { Dispatch, FC, SetStateAction } from "react";

interface HourlyWeatherItemProps {
  hourlyWeather: {
    temp_c: number;
    time: string;
    condition: {
      code: number;
    };
  };
  setHourlyForecasts: Dispatch<SetStateAction<HourlyWeatherType[]>>;
}
const HourlyWeatherItem: FC<HourlyWeatherItemProps> = ({ hourlyWeather }) => {
  const temperature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(hourlyWeather.condition.code)
  );
  console.log(hourlyWeather);
  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src={`icons/${weatherIcon}.svg`} className="weather-icon"></img>
      <p className="temperature">{temperature}°C</p>
    </li>
  );
};

export default HourlyWeatherItem;
