import React, {useState} from 'react';

import styles from './city-search.module.css'


export const CitySearch = ({currentWeatherUpdate,dailyWeatherUpdate, cityName}) => {
    
    const [inputValue, setInputValue] = useState('')

    function cleanInput() {
        setInputValue('')
    }
    
    function sendData() {
        currentWeatherUpdate(inputValue)
        dailyWeatherUpdate(inputValue)
        cleanInput()
    }
    
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            sendData()
            cleanInput()
        }
    }

    return(
            <div className={styles.container}>
                <input className={styles.elStyles}
                       type="text" placeholder="Enter your city name"
                       value={inputValue}
                       onChange={e => setInputValue(e.target.value)}
                       onKeyPress={handleKeyPress}
                />
                <button className={styles.searchBtn}
                        onClick={sendData}>
                    Search</button>
                <h3>{cityName}</h3>
            </div>
        )
    }
