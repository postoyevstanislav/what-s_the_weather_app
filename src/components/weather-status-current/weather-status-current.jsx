// import { render } from '@testing-library/react';
import React from 'react';

import styles from './weather-status-current.module.css'

export const WeatherStatusCurrent = ({status, temp}) => { 
    const renderData = (imageName) => {
        return(
            <div className={styles.container}>
                <img className={styles.weatherImg} src={require(`../../img/weather-icons/${imageName}.png`)} alt=""/>
                <p className={styles.temperature}> {temp}°</p>
            </div>
        )}
        switch(status) {
                case('Clear'):
                    return renderData('sun')   
                case ('Rain'):
                    return renderData('rainy')   
                case  ('Snow'):
                    return renderData('snow')       
                case ('Extreme'):
                    return renderData('thunder')    
                default: return renderData('cloud')
            }
        
            }
