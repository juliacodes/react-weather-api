import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import styled from "styled-components";

const AppWrapper = styled.div``;

const API_KEY = "b8d5d166fa637e392446c7de40113758";

class App extends React.Component {
  state = {
    date: undefined,
    city: undefined,
    //current
    temperatureNow: undefined,
    temperatureNowHigh: undefined,
    conditionsToday: undefined,
    windSpeed: undefined,
    // tomorrow
    temperatureTomorrow: undefined,
    conditionsTomorrow: undefined,
    // day 3
    temperatureDay3: undefined,
    conditionsDay3: undefined,
    // day 4
    temperatureDay4: undefined,
    conditionsDay4: undefined,
    // day 5
    temperatureDay5: undefined,
    conditionsDay5: undefined,
    // error
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${API_KEY}&units=imperial`
    );
    const list = await api_call.json();

    if (zip) {
      console.log(list);

      this.setState({
        date: list.list[0].dt_txt,
        zip: zip,
        city: list.city.name,
        //  current
        temperatureNow: list.list[0].main.temp,
        temperatureNowHigh: list.list[0].main.temp_max,
        conditionsToday: list.list[0].weather[0].description,
        windSpeed: list.list[0].wind.speed,

        //  tomorrow
        temperatureTomorrow: list.list[7].main.temp,
        conditionsTomorrow: list.list[7].weather[0].description,

        // day 3
        temperatureDay3: list.list[15].main.temp,
        conditionsDay3: list.list[15].weather[0].description,

        // day 4
        temperatureDay4: list.list[23].main.temp,
        conditionsDay4: list.list[23].weather[0].description,

        // day 5
        temperatureDay5: list.list[23].main.temp,
        conditionsDay5: list.list[23].weather[0].description,

        error: ""
      });
    } else {
      this.setState({
        error: "Enter a city and country" // error message
      });
    }
  };
  render() {
    return (
      <AppWrapper>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          // props to pass for all weather information
          date={this.state.date}
          zip={this.state.zip}
          city={this.state.city}
          // current
          temperatureNow={this.state.temperatureNow}
          temperatureNowHigh={this.state.temperatureNowHigh}
          conditionsToday={this.state.conditionsToday}
          windSpeed={this.state.windSpeed}
          // tomorrow
          temperatureTomorrow={this.state.temperatureTomorrow}
          conditionsTomorrow={this.state.conditionsTomorrow}
          // day 3
          temperatureDay3={this.state.temperatureDay3}
          conditionsDay3={this.state.conditionsDay3}
          // day 4
          temperatureDay4={this.state.temperatureDay4}
          conditionsDay4={this.state.conditionsDay4}
          // day 5
          temperatureDay5={this.state.temperatureDay5}
          conditionsDay5={this.state.conditionsDay5}
          // error
          error={this.state.error}
        />
      </AppWrapper>
    );
  }
}

export default App;
