import React, {Component} from 'react';
import './App.css'

import {CitySearch} from './components/city-search/city-search';
import {WeatherStatusCurrent} from './components/weather-status-current/weather-status-current';
// import {WeatherStatusDaily} from "./components/weather-status-daily/weather-status-daily";
import {CurrentWeatherInfo} from "./components/current-weather-info/current-weather-info";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeather: '',
            feelsLike: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            weatherStatus: '',
            city: ''
        }
        this.theWeatherData()
    }

    theWeatherData = (dataFromInput = 'Catania') =>  {
        if(dataFromInput === '') {
            dataFromInput = 'Catania'
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataFromInput}&units=metric&appid=04a821abadc2707ae3ea7ba96b0287e4`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        currentWeather: Math.floor(data.main.temp),
                        feelsLike: data.main.feels_like,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        windSpeed: data.wind.speed,
                        weatherStatus: data.weather[0].main,
                        city: data.name
                    })
                })
        } else {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dataFromInput}&units=metric&appid=04a821abadc2707ae3ea7ba96b0287e4`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        currentWeather: Math.floor(data.main.temp),
                        feelsLike: data.main.feels_like,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        windSpeed: data.wind.speed,
                        weatherStatus: data.weather[0].main,
                        city: data.name
                    })
                    console.log(data)
                })
        }

    }



    render() {
        const {currentWeather, weatherStatus, feelsLike, humidity, pressure, windSpeed, city} = this.state
        return (
            <div className="main-container">
                <h2>What's the weather app</h2>

                <CitySearch
                    weatherUpdate={this.theWeatherData}
                    cityName = {city} />

                <WeatherStatusCurrent temp={currentWeather} status={weatherStatus}/>
                <CurrentWeatherInfo
                    feelsLike={feelsLike}
                    humidity={humidity}
                    pressure={pressure}
                    windSpeed={windSpeed} />
            </div>)
    }
}

export default App;
