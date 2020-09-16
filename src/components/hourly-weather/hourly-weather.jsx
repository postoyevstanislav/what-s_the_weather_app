import React from 'react';

import styles from './hourly-weather.module.css'

const WeatherIcon = {
    Clear: 'sun',
    Rain: 'rainy',
    Snow: 'snow',
    Extreme: 'thunder',
    Clouds: 'cloud'
}



export const HourlyWeather = (props) => {
    const {data} = props
    return (
        data.map((el, i) => {
            return (
                <div 
                    key={i} 
                    className={styles.singleInfo} 
                    // onClick={clickHandler}
                    // style={{cursor: 'pointer', backgroundColor: bgColor}}
                >
                    <h4>{el.dt_txt.slice(11, 16)}</h4>
                    <img src={require(`../../img/weather-icons/${WeatherIcon[el.weather[0].main]}.png`)} alt=""/>
                    <p>{el.main.temp}°</p>    
                </div>
            )
            
        })
    )
    
}


        
