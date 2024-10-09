const HourlyWeather = () => {
    return (
        <li className="weather-item">
            <p className="time">
              00:00
            </p>
            <img src='icons/clouds.svg' className='weather-icon'></img>
            <p className="temperature">
              20°C
            </p>
          </li>
    )
}

export default HourlyWeather;