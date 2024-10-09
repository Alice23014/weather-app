const CurrentWeather = () => {
    return (
        <div className="current-weather">
        <img src='icons/clouds.svg' className='weather-icon'></img>
        <h2 className="temperature">23<span className="deg">°C</span></h2>
        <p className="description">Partly Cloudly</p>
    </div>
    );
};

export default CurrentWeather;