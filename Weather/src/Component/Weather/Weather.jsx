import React, { useContext } from 'react'
import './Weather.css'
import { WeatherContext } from '../../Context/ContextProvider'

const Weather = () => {
    const {weatherDetails} = useContext(WeatherContext)
    
  return (
    <>
      {
        weatherDetails?(
          <div className='weather'>
             <div className="weather-details">
              <div className="location">
                <h1>{weatherDetails.location.name}</h1>
                <p>{weatherDetails.current.temp_c}°</p> 
              </div>
              <div className="w-icon">
                <img src={weatherDetails.current.condition.icon} alt="" />  
              </div>  
             </div>
          </div>
        ):(
          <div>Loading...</div>
        )
      }
    </>
  )
}

export default Weather