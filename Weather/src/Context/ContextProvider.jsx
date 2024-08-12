import React, { createContext, useState, useEffect } from 'react';
 
export const WeatherContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [weatherDetails, setWeatherDetails] = useState();
    const [city, setCity] = useState('Thanjavur');
    const [value, setValue] = useState('');


    const getWeatherDetails = async (city) => {
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9614443b91f346cf85551818241302&q=${city}&days=5&aqi=no&alerts=no`)
        const data = await res.json();
        setWeatherDetails(data);
    };


    useEffect(() => {
        if (city) {
            getWeatherDetails(city);
        }
    }, [city]);
 

    useEffect(() => {
        console.log(weatherDetails);  
    }, [weatherDetails]);


    const handleSubmit = async () => {
        setCity(value);
        console.log(city)
        setValue('')
    };

    return (
        <WeatherContext.Provider value={{ handleSubmit, value, setValue,weatherDetails,getWeatherDetails}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default ContextProvider;
