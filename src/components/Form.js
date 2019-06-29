import React, { Component } from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="city"></input>
    <input type="text" name="country" placeholder="country"></input>
    <button>Get Weather</button>
  </form>
);

export default Form;
