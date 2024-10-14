import React, { Dispatch, FC, RefObject, SetStateAction } from "react";

interface CurrentWeatherProps {
  getWeatherDetails: (API_URL: string) => void;
  searchInputRef: RefObject<HTMLInputElement>;
  setWeatherDetails: Dispatch<SetStateAction<boolean>>;
}

const SearchSection: FC<CurrentWeatherProps> = ({
  getWeatherDetails,
  searchInputRef,
}) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleCitySearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL);
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL);
      },
      () => {
        alert("Please allow location access to get weather details");
      }
    );
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <input
          type="search"
          className="search-input"
          placeholder="Enter a city name"
          ref={searchInputRef}
        />
      </form>
      <button onClick={handleLocationSearch} className="location-button">
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
