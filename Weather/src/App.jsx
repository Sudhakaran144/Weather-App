import { useContext } from 'react'
import './App.css'
import Forecast from './Component/Forecast/Forecast'
import Navbar from './Component/Navbar/Navbar'
import Weather from './Component/Weather/Weather'
import { WeatherContext } from './Context/ContextProvider'
import WeatherDetails from './Component/WeatherDetails/WeatherDetails'

function App() {
  const {weatherDetails} = useContext(WeatherContext)
  return (
    <div className='app'>
      <Navbar />
      {
        weatherDetails?(
          <div>
            <Weather />
            <Forecast />
            <WeatherDetails />
          </div>
        ):(
          <h1 className='loader'>Loading...</h1>
        )
      }
    </div>
  )
}

export default App
