import axios from "axios";

export default function Weather(props) {
    function showWeather(response) {
        alert(`The current temperature in ${response.data.city} is ${Math.round(response.data.temperature.current)}°C`)
    }
    
    let apiKey = "acbbefb303a70144ef2f13t2a94oef9a";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(url).then(showWeather);
}
