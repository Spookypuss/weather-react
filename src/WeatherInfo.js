import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import FormattedTime from "./FormattedTime";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

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
                                <WeatherIcon icon={props.data.icon}/>
                            </div>
                            <span className="current-temperature">{Math.round(props.data.temperature)}</span>
                            <span className="units">°C</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}