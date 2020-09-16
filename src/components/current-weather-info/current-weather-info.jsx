import React from 'react';

import styles from './current-weather-info.module.css'

export const CurrentWeatherInfo = ({feelsLike, humidity, pressure, windSpeed}) => {
    return (
        <div>
            <ul>
                <li>Feels like: <span className={styles.infoData}>{feelsLike}°</span></li>
                <li>Humidity: <span className={styles.infoData}>{humidity}%</span></li>
                <li>Pressure: <span className={styles.infoData}>{pressure}hPa</span></li>
                <li>Wind speed: <span className={styles.infoData}>{windSpeed}m/s</span></li>
            </ul>
        </div>
    )
}