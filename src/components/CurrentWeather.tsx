import React, {FC} from 'react';
interface CurrentWeatherProps {
    currentWeather: {
        temperature: number;
        description: string;
        weatherIcon: string;
    }
}

const CurrentWeather: FC<CurrentWeatherProps> = ({currentWeather}) => {
    return (
        <div className="current-weather">
        <img src={`icons/${currentWeather.weatherIcon}.svg`} className='weather-icon'></img>
        <h2 className="temperature">{currentWeather.temperature}<span className="deg">°C</span></h2>
        <p className="description">{currentWeather.description}</p>
    </div>
    );
};

export default CurrentWeather;