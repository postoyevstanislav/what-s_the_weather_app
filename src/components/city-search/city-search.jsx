import React, {Component} from 'react';

import styles from './city-search.module.css'


export class CitySearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
        this.sendData = this.sendData.bind(this)
    }

    sendData() {
        this.props.weatherUpdate(this.state.inputValue)
    }

    updateInputValue(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.sendData()
        }
    }

    render() {
        const {inputValue} = this.state
        return(
            <div className={styles.container}>
                <input className={styles.elStyles}
                       type="text" placeholder="Enter your city name"
                       value={inputValue}
                       onChange={event => this.updateInputValue(event)}
                       onKeyPress={this.handleKeyPress}
                />
                <button className={styles.searchBtn}
                        onClick={() => {
                            this.sendData()
                        }}>
                    Search</button>
                <h3>{this.props.cityName}</h3>
            </div>
        )
    }

}