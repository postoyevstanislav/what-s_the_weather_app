import React, {Component} from 'react';
import './App.css'
import {CitySearch} from '../city-search/city-search';
import {WeatherStatusCurrent} from '../weather-status-current/weather-status-current';
import {WeatherStatusDaily} from "../weather-status-daily/weather-status-daily";
import {CurrentWeatherInfo} from "../current-weather-info/current-weather-info";
import WeatherServices from "../../services/current-weather-data";


class App extends Component {
    constructor(props) {
        super(props)
        this.WeatherServices = new WeatherServices()
        
        this.state = {
            currentWeather: '',
            feelsLike: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            weatherStatus: '',
            weatherData: [],
            city: '',
            error: false
        }
        this.currentWeatherData()
        this.getDailyWeatherData()
        this.dailyWeatherData()

    }


    currentWeatherData = (dataFromInput) =>  {
        if(dataFromInput === '') {
            dataFromInput = 'Catania'
            this.WeatherServices.getCurrentWeather(dataFromInput)
                .then(data => {
                    console.log(data)
                    this.setState(this.WeatherServices.setCurrentWeatherState(data))
                })
        } else {
            this.WeatherServices.getCurrentWeather(dataFromInput)
                .then(data => {
                    this.setState(this.WeatherServices.setCurrentWeatherState(data))
                    console.log('currentWeatherData: ', data)
                })
                .catch(() => {
                    this.setState({
                        error: true
                    })
                })
        }

    }

    dailyWeatherData = () => {
        this.WeatherServices.getDailyWeather()
            .then(data => console.log('fiveDaysApi: ', data))
    }

    getDailyWeatherData = (dataFromInput) => {
        if(dataFromInput === '') {
            dataFromInput = 'Catania'
            this.WeatherServices.getDailyWeather(dataFromInput)
            .then(data => {
                this.setState(this.WeatherServices.setHourlyWeatherState(data))
            })
        } else {
            this.WeatherServices.getDailyWeather(dataFromInput)
            .then(data => {
                this.setState(this.WeatherServices.setHourlyWeatherState(data))
            })
            .catch(err => console.log('daily err: ', err))
        }

    }


    
    render() {
        const {currentWeather, weatherStatus, feelsLike, humidity, pressure, windSpeed, weatherData, city, error} = this.state
        if(error === true) {
            return(
                <h3>Oops.. seems like your city does not exist,<br/> please reload the page and try again</h3> 
            )
        }

        return (
            <div className="main-container">
                <h2>What's the weather app</h2>
                
                <CitySearch
                    currentWeatherUpdate={this.currentWeatherData}
                    dailyWeatherUpdate={this.getDailyWeatherData}
                    cityName = {city} 
                />

                <WeatherStatusCurrent 
                    temp={currentWeather} 
                    status={weatherStatus} 
                />
                <WeatherStatusDaily
                    data={weatherData}
                    status={weatherStatus} 
                />
                <CurrentWeatherInfo
                    feelsLike={feelsLike}
                    humidity={humidity}
                    pressure={pressure}
                    windSpeed={windSpeed}
                    
                />

            </div>)
    }
}

export default App;
