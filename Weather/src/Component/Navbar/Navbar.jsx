import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/weather_icons/02d.png';
import { WeatherContext } from '../../Context/ContextProvider';
import { HiSearchCircle } from "react-icons/hi";

const Navbar = () => {
    const { value,setValue,handleSubmit } = useContext(WeatherContext);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    return (
        <div className='navbar'>
            <nav>
                <div className="nav-items">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h1>Weather</h1>
                    </div>
                    <div className="nav-input">
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} placeholder='Search for Cities' />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
