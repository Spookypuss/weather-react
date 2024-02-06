import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({ready: false});

  function getWeather(response) {
    setWeather({
        ready: true,
        name: response.data.city,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
    });
  }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "acbbefb303a70144ef2f13t2a94oef9a";
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        axios.get(url).then(getWeather);
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

  if (weather.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather}/>
      </div>
    );
  } else {
    return form;
  }
}
