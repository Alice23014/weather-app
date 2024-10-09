const SearchSection = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleCitySearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
    getWeatherDetails(API_URL);
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <input
          type="search"
          className="search-input"
          placeholder="Enter a city name"
        />
      </form>
      <button className="location-button">
        <span className="material-symbols-rounded">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
