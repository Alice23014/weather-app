import React from "react";
import SearchSection from "./components/SearchSection";
import CurrentWeather from './components/CurrentWeather'
import HourlyWeatherItem from "./components/HourlyWeatherItem"
import NoResultsDiv from "./components/NoResultsDiv";
import { useState } from "react";
import { useRef } from "react";
import { weatherCodes } from "./constants";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecasts, setHourlyForecasts] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(false);
  const searchInputRef = useRef(null);


  const filterHourlyForecast = (hourlyData) =>{
    const currentHour = new Date().setMinutes(0,0,0);
    const next24Hours =currentHour +24 *60*60*1000;

    const next24HoursData = hourlyData.filter(({time})=>{
      const forecastTime = new Date(time).getTime();
      return forecastTime > currentHour && forecastTime < next24Hours
    })

    setHourlyForecasts(next24HoursData)
  }
  const getWeatherDetails = async (API_URL) =>{
    setWeatherDetails(true); 
    setHasNoResults(false)
    try{
      const response = await fetch(API_URL);
      if(!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon=>weatherCodes[icon].includes(data.current.condition.code));

      setCurrentWeather({temperature, description, weatherIcon})
      const combinedHourlyData = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour];

      searchInputRef.current.value = data.location.name;

      filterHourlyForecast(combinedHourlyData);
      console.log(data)
    }catch{
      setHasNoResults(true)
    }
  }
  console.log(weatherDetails)
  return (
    <div className="container">
      <SearchSection
        getWeatherDetails={getWeatherDetails}
        setWeatherDetails={setWeatherDetails}
        searchInputRef={searchInputRef}
      />
      {weatherDetails && (
        hasNoResults ? (
          <NoResultsDiv />
        ) : (
          <div className="weather-section">
            <CurrentWeather currentWeather={currentWeather} />
            <div className="hourly-forecast">
              <ul className="weather-list">
                {hourlyForecasts.map((hourlyWeather) => (
                  <HourlyWeatherItem
                    setHourlyForecasts={setHourlyForecasts}
                    hourlyWeather={hourlyWeather}
                    key={hourlyWeather.time_epoch}
                  />
                ))}
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App