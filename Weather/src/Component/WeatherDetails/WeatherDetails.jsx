import React, { useContext } from 'react'
import './WeatherDetails.css'
import { BsSunrise } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";
import { IoIosWater } from "react-icons/io";
import { FaCompressAlt } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { MdOutlineVisibility } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { WeatherContext } from '../../Context/ContextProvider';

const WeatherDetails = () => {
  const { weatherDetails } = useContext(WeatherContext);
  return (
    <div className='w-details'>
      <div className="w-container">
        <p>WEATHER DETAILS</p>
        <div className="w-content">
          <div className="w-condition-container">
            <div className="conditions">
              <p>Sunrise</p>
              <h3>{weatherDetails.forecast.forecastday[0].astro.sunrise}</h3>
            </div>
            <span><BsSunrise /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Sunset</p>
              <h3>{weatherDetails.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <span><FiSunset /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Chance of Rain</p>
              <h3>{weatherDetails.forecast.forecastday[0].day.daily_chance_of_rain}%</h3>
            </div>
            <span><IoIosWater /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Wind</p>
              <h3>{weatherDetails.current.wind_kph} km/h</h3>
            </div>
             <span><FaWind /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Pressure</p>
              <h3>{weatherDetails.current.pressure_mb} mb</h3>
            </div>
            <span><FaCompressAlt /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Uv</p>
              <h3>{weatherDetails.current.uv} of 10</h3>
            </div>
            <span><IoMdSunny /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Humidity</p>
              <h3>{weatherDetails.current.humidity}</h3>
            </div>
            <span><FaTemperatureQuarter /></span>
          </div>
          <div className="w-condition-container">
            <div className="conditions">
              <p>Visibility</p>
              <h3>{weatherDetails.current.vis_km} km</h3>
            </div>
            <span><MdOutlineVisibility /></span>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails