import React, { useState } from 'react'
import './HourForecast.css'

const HourForecast = ({item}) => {
    const d = new Date(item.time)
  return (
    <div className='hourForecast'>
        <div className="h-container">
            <p>{d.getHours()<=9?`0${d.getHours()}`:d.getHours()}:00</p>
            <img src={item.condition.icon} alt="" />
            <h3>{Math.floor(item.temp_c)}°</h3>
        </div>
    </div>
  )
}

export default HourForecast