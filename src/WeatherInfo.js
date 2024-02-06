import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.name}</h1>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li className="current-description highlight">{props.data.description}</li>
                            <li>Humidity: <span className="highlight">{props.data.humidity}%</span></li>
                            <li>Wind: <span className="highlight">{props.data.wind}m/s</span></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="d-flex current-weather">
                            <span className="current-temperature">{Math.round(props.data.temperature)}</span>
                            <span className="units">°C</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}