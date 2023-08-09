import { useState } from "react";
import React from "react";

import axios from "axios";

const cragLocations = [
  { cragName: "Gunks", lat: 41.747532, lon: 74.086891 },
  { cragName: "Acadia", lat: 44.338974, lon: 68.2733 },
  { cragName: "Smugglers Notch", lat: 44.5905, lon: 72.7844 },
];
const weatherApiKey = process.env.REACT_APP_WEATHER_API;
const openWeatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=41.747532&lon=-74.086891&units=imperial&appid=${weatherApiKey}`;

const Home = () => {
  const [weather, setWeather] = useState(null);

  React.useEffect(() => {
    axios.get(openWeatherURL).then((response) => {
      setWeather(response.data);
    });
  }, []);
  if (!weather) return null;
  console.log(weather);

  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-9"></div>
          <div className="jumbotron jumbotron-fluid col-12">
            <div className="container">
              <h1 className="display-4">Sup Boulderers!</h1>
              <ul className="lead">
                <li data-temperature>
                  The current weather in The Gunks is: {weather.current.temp}°F
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
