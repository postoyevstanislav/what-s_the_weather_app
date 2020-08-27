import React, {Component} from 'react';
import './App.css'
import {CitySearch} from './components/city-search/city-search';
import {WeatherStatusCurrent} from './components/weather-status-current/weather-status-current';
import {WeatherStatusDaily} from "./components/weather-status-daily/weather-status-daily";
import {CurrentWeatherInfo} from "./components/current-weather-info/current-weather-info";
import WeatherServices from "./services/current-weather-data";


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
            city: ''
        }
        this.currentWeatherData()

        this.WeatherServices.getDailyWeather()
            .then(data => {
                console.log(data)
                
            })
    }


    currentWeatherData = (dataFromInput = 'Lviv') =>  {
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
                    console.log(data)
                })
        }

    }

    dailyWeatherData = () => {
        this.WeatherServices.getDailyWeather()
            .then(data => console.log(data))
    }


    
    render() {
        const {currentWeather, weatherStatus, feelsLike, humidity, pressure, windSpeed, city} = this.state
        return (
            <div className="main-container">
                <h2>What's the weather app</h2>

                <CitySearch
                    weatherUpdate={this.theWeatherData}
                    cityName = {city} 
                />

                <WeatherStatusCurrent 
                    temp={currentWeather} 
                    status={weatherStatus} 
                />
                <WeatherStatusDaily

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
