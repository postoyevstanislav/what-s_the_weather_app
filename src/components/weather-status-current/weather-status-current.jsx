import React from 'react';

import styles from './weather-status-current.module.css'

export const WeatherStatusCurrent = (props) => {
    if(props.status === 'Clear') {
        return (
            <div className={styles.container}>
                <img className={styles.weatherImg} src={require("../../img/weather-icons/sun.png")} alt=""/>
                <p className={styles.temperature}> {props.temp}°</p>
            </div>
        )
    } else if(props.status === 'Rain') {
        return (
            <div className={styles.container}>
                <img className={styles.weatherImg} src={require("../../img/weather-icons/rainy.png")} alt=""/>
                <p className={styles.temperature}> {props.temp}°</p>
            </div>
        )
    } else if (props.status === 'Snow') {
        return (
            <div className={styles.container}>
                <img className={styles.weatherImg} src={require("../../img/weather-icons/snow.png")} alt=""/>
                <p className={styles.temperature}> {props.temp} °</p>
            </div>
        )
    } else if (props.status === 'Extreme') {
        return (
            <div className={styles.container}>
                <img className={styles.weatherImg} src={require("../../img/weather-icons/thunder.png")} alt=""/>
                <p className={styles.temperature}> {props.temp}°</p>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <img className={styles.weatherImg} src={require("../../img/weather-icons/cloud.png")} alt=""/>
                <p className={styles.temperature}> {props.temp}°</p>
            </div>
        )
    }

}