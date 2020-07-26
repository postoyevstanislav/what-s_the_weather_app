import React from 'react';

import styles from './current-weather-info.module.css'

export const CurrentWeatherInfo = (props) => {
    return (
        <div>
            <ul>
                <li>Feels like: <span className={styles.infoData}>{props.feelsLike}°</span></li>
                <li>Humidity: <span className={styles.infoData}>{props.humidity}%</span></li>
                <li>Pressure: <span className={styles.infoData}>{props.pressure}hPa</span></li>
                <li>Wind speed: <span className={styles.infoData}>{props.windSpeed}m/s</span></li>
            </ul>
        </div>
    )
}