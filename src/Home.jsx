import React from "react";
import Navigation from "./Navigation";
import Footie from "./Footie";

const Home = () => {
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
