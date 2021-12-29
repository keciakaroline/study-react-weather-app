import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";

export default function Weather() {
  const [city, setCity] = useState();
  // const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    // console.log(response.data);
    // setLoaded(true)
    console.log(response.data);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(APIurl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  // if (loaded) {
  return (
    <div className="container d-none d-sm-block Weather">
      <div className="weather-app ">
        <div>
          <Form updateCity={updateCity} handleSubmit={handleSubmit} />
          <div className="overview">
            <h1>{city}</h1>
            {/* <h3>Last updated:</h3> */}
          </div>
          <div className="row">
            <div className="col-7">
              <div className="clearfix weather-temperature">
                <img
                  src={weather.icon}
                  alt="weather icon"
                  className="float-left"
                  id="icon"
                />
                <div className="float-left">
                  <strong id="temperature">{weather.temperature}</strong>
                  <span className="units">°C </span>
                </div>
              </div>
            </div>
            <div className="col-5">
              <ul>
                <li>Description: {weather.description}</li>
                <li>Temperature: {weather.temperature} Celsius</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // } else {
  //   return form;
  // }
}
