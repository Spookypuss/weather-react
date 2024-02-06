import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.startCity);
  let [weather, setWeather] = useState({ready: false});

  function getWeather(response) {
    setWeather({
        ready: true,
        city: response.data.city,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        time: new Date(response.data.time * 1000),
        icon: response.data.condition.icon,
    });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={updateCity} className="search-input" placeholder="Enter a city" autoFocus="on"/>
            <input type="submit" value="Search" className="search-button"/>
        </form>
    );

   function search() {
        let apiKey = "acbbefb303a70144ef2f13t2a94oef9a";
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        axios.get(url).then(getWeather);
   }

  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather}/>
      </div>
    );
  } else {
    search();
    return ("Loading...");
  }
}