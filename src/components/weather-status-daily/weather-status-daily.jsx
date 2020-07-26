import React from 'react';

import styles from './weather-status-daily.module.css'
export const WeatherStatusDaily = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.singleInfo}>
                <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
                <p>20°</p>
            </div>
            <div className={styles.singleInfo}>
                <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
                <p>20°</p>
            </div>
            <div className={styles.singleInfo}>
                <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
                <p>20°</p>
            </div>
            <div className={styles.singleInfo}>
                <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
                <p>20°</p>
            </div>
            <div className={styles.singleInfo}>
                <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
                <p>20°</p>
            </div>

        </div>
    )
}