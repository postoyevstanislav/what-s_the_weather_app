import React from 'react';

import styles from './hourly-weather.module.css'

export const HourlyWeather = (props) => {
    return (
        props.data.map((el, i) => {
            if(el.weather[0].main === 'Clear') {
                return (
                    <div 
                        key={i} 
                        className={styles.singleInfo}
                    >
                        <h4>{el.dt_txt.slice(11, 16)}</h4>
                        <img src={require('../../img/weather-icons/sun.png')} alt=""/>
                        <p>{el.main.temp}°</p>    
                    </div>
                )
            } else if(el.weather[0].main === 'Rain') {
                return (
                    <div 
                        key={i} 
                        className={styles.singleInfo}
                    >
                        <h4>{el.dt_txt.slice(11, 16)}</h4>
                        <img src={require('../../img/weather-icons/rainy.png')} alt=""/>
                        <p>{el.main.temp}°</p>    
                    </div>
                )
            } else if(el.weather[0].main === 'Snow') {
                return (
                    <div 
                        key={i} 
                        className={styles.singleInfo}
                    >
                        <h4>{el.dt_txt.slice(11, 16)}</h4>
                        <img src={require('../../img/weather-icons/snow.png')} alt=""/>
                        <p>{el.main.temp}°</p>    
                    </div>
                )
            } else if(el.weather[0].main === 'Extreme') {
                return (
                    <div 
                        key={i} 
                        className={styles.singleInfo}
                    >
                        <h4>{el.dt_txt.slice(11, 16)}</h4>
                        <img src={require('../../img/weather-icons/thunder.png')} alt=""/>
                        <p>{el.main.temp}°</p>    
                    </div>
                )
            } else {
                return (
                    <div 
                        key={i} 
                        className={styles.singleInfo}
                    >
                        <h4>{el.dt_txt.slice(11, 16)}</h4>
                        <img src={require('../../img/weather-icons/cloud.png')} alt=""/>
                        <p>{el.main.temp}°</p>    
                    </div>
                )
            }
        })
    )
    
}
// props.data.map((el, i) => {
//     return(
//         <div 
//             key={i} 
//             className={styles.singleInfo}
//         >
//             <h4>{el.dt_txt.slice(11, 16)}</h4>
//             <img src={require('../../img/weather-icons/semi-cloud.png')} alt=""/>
//             <p>{el.main.temp}°</p>    
//         </div>
//     )
        
