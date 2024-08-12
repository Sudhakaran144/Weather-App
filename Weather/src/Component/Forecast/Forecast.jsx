import React, { useContext, useState, useEffect } from 'react';
import './Forecast.css';
import { WeatherContext } from '../../Context/ContextProvider';
import HourForecast from '../HourForecast/HourForecast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Forecast = () => {
    const { weatherDetails } = useContext(WeatherContext);
     
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        360: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 9,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 11,
            spaceBetween: 50,
        },
        1920: {
            slidesPerView: 15,
            spaceBetween: 60,
        },
    };

    return (
        <div className='forecast'>
            <div className="f-container">
                <p>Today Forecast</p>
                <div className="hour-forecast">
                    {weatherDetails ? (
                        <Swiper
                            breakpoints={breakpoints}
                            spaceBetween={40}
                            slidesPerView={14}
                        >
                            <div className='h-forecast'>
                                {weatherDetails.forecast.forecastday[0].hour.map(
                                    (item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <HourForecast item={item} />
                                            </SwiperSlide>
                                        );
                                    }
                                )}
                            </div>
                        </Swiper>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};

export default Forecast;
