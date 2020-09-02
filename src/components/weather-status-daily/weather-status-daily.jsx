import React, {Component} from 'react';
import {HourlyWeather} from '../hourly-weather/hourly-weather'

import styles from './weather-status-daily.module.css'
export class WeatherStatusDaily extends Component {

    render() {
        const {data} = this.props
        return (
            <div className={styles.mainContainer}>
                <HourlyWeather data={data}/>
            </div>
        )
    }
    
}