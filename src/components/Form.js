import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="zip" placeholder="city"></input>
    <button>Get Weather</button>
  </form>
);

export default Form;
