const Search = () => {
    return (
        <div className="search-section">
            <form action="#" className="search-form">
                <input
                    type="search"
                    className="search-input"
                    placeholder="Enter a city name"
                    required
                />
            </form>
            <button className="location-button">
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    );
};

export default Search;