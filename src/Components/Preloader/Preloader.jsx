import React from "react";
import "./Preloader.css";
const Preloader = () => {
  return (
    <section className="Preloader">
      <div id="loop" class="center">
        <div className="loaderHead">
          <h1>moooi</h1>
        </div>
      </div>
      <div id="bike-wrapper" class="center">
        <div id="bike" class="centerBike"></div>
      </div>
      <div className="loadingText">
        <h3>Loading...</h3>
      </div>
    </section>
  );
};

export default Preloader;
