import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import FormattedTime from "./FormattedTime";
import "./WeatherInfo.css";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
    
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li><FormattedTime time={props.data.time} /></li>
                            <li className="current-description highlighter text-capitalize">{props.data.description}</li>
                            <li>Humidity: <span className="highlighter">{props.data.humidity}%</span></li>
                            <li>Wind: <span className="highlighter">{props.data.wind}m/s</span></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="d-flex current-weather">
                            <div className="current-icon">      
                            <img src={props.data.icon} alt={props.data.description} className="current-icon" />               
                            </div>
                            <WeatherUnits celcius={props.data.temperature} />
                        </div>
                    </div>
                </div>
        </div>
    )
}