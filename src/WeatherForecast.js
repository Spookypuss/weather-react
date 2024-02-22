import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
        }

    useEffect(() => {
        setLoaded(false); //reset 'loaded' to false
    }, [props.latitude]) //if latitude changes

if (loaded) {
    return (<div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){ //loops through multiple days
                        if (index < 4 ) {
                        return (
                            <div className="col" key = {index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>);
} else {
    let apiKey= "acbbefb303a70144ef2f13t2a94oef9a";
    let lon = props.longitude;
    let lat = props.latitude;
    let url = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return null;
}
}