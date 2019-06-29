import React, { Component } from "react";

const Weather = props => (
  <div>
    {/* {props.city && props.country && ( */}
    <div>
      <p>
        Location: {props.city}, {props.country}
      </p>
      <p>Temperature: {props.temperature}</p>
      <p>Humidity: {props.humidity}</p>
      <p>Conditions: {props.description}</p>
    </div>
    {/* )} */}

    {props.error && <p>Error: {props.error}</p>}
  </div>
);

export default Weather;
