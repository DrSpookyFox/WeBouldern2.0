import { useState } from "react";
import React from "react";
import Navigation from "./Navigation";
import Footie from "./Footie";
import axios from "axios";

// process.env.REACT_APP_WEATHER_API
const cragLocations = [
  { cragName: "Gunks", lat: 41.747532, lon: 74.086891 },
  { cragName: "Acadia", lat: 44.338974, lon: 68.2733 },
  { cragName: "Smugglers Notch", lat: 44.5905, lon: 72.7844 },
];

const openWeatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=41.747532&lon=74.086891&units=imperial&appid=${process.env.WEATHER_API}`;

const Home = () => {
  const [weather, setWeather] = useState(null);

  // React.useEffect(() => {
  //   axios.get(openWeatherURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!weather) return null;
  // console.log(JSON.parse(weather));
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-9"></div>
          <div className="jumbotron jumbotron-fluid col-12">
            <div className="container">
              <h1 className="display-4">Sup Boulderers!</h1>
              <ul className="lead">
                <li data-temperature>
                  The current weather in The Gunks is: 85°F
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footie />
    </>
  );
};

export default Home;
