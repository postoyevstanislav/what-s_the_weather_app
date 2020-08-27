import React, {Component} from 'react';
import WeatherServices from '../../services/current-weather-data'

import styles from './weather-status-daily.module.css'
export class WeatherStatusDaily extends Component {
    constructor(props) {
        super(props)

        this.WeatherServices = new WeatherServices()
        this.state = {
            temp: ''
        }
        this.getDailyWeatherData()
    }

    getDailyWeatherData = () => {
        this.WeatherServices.getDailyWeather()
            .then(data => {
                this.setState({
                    temp: data.list[0].main.temp
                })
            })
    }

    render() {
        const {temp} = this.state
        return (
            <div className={styles.mainContainer}>
                <div className={styles.singleInfo}>
                    <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
                    <p>{temp}°</p>
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
    
}