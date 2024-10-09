import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import HourlyWeather from './components/HourlyWeatherItem'

const App = () => {
  return (
  <div className="container">
    <Search/>
    <div className="weather-section">
      <CurrentWeather/>
      <div className="hourly-forecast">
        <ul className="weather-list">
          <HourlyWeather></HourlyWeather>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default App