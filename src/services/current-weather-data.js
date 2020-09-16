export default class WeatherServices {
    constructor() {
        this._currentWeatherApi = 'https://api.openweathermap.org/data/2.5/'
    }

    getCurrentWeather = async (data = 'Lviv') => {
       const res = await fetch(`${this._currentWeatherApi}weather?q=${data}&units=metric&appid=04a821abadc2707ae3ea7ba96b0287e4`)
        return await res.json()
    }

    getDailyWeather = async (data = 'Lviv') => {
        const res = await fetch(`${this._currentWeatherApi}forecast?q=${data}&units=metric&appid=04a821abadc2707ae3ea7ba96b0287e4`)
        return await res.json()
    }

    setCurrentWeatherState = (data) => {
        return {
            currentWeather: Math.floor(data.main.temp),
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            weatherStatus: data.weather[0].main,
            city: data.name
        }
    }
    setHourlyWeatherState = (data) => {
        return{
            weatherData: data.list.slice(0, 5),
            // feelsLike: data.list.feels_like,
            // humidity: data.list.humidity,
            // pressure: data.list.pressure,
            // windSpeed: data.wind.speed
        }
    }
}