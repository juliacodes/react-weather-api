import React from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  padding: 15% 0 20% 0;
  background-image: url("https://images.unsplash.com/photo-1547558848-82d9f5e9641a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3792&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
`;
const MainContent = styled.div`
  width: 650px;
  height: 477px;
  background-color: rgba(250, 250, 250, 0.88);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  margin: 0 auto;
  display: block;
`;

const API_KEY = "b8d5d166fa637e392446c7de40113758";

class App extends React.Component {
  state = {
    zip1: undefined,
    zip2: undefined,
    zip3: undefined,
    zip4: undefined,
    zip5: undefined,

    day: undefined,
    date: undefined,
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
    const zip1 = e.target.elements.zip1.value;
    const zip2 = e.target.elements.zip2.value;
    const zip3 = e.target.elements.zip3.value;
    const zip4 = e.target.elements.zip4.value;
    const zip5 = e.target.elements.zip5.value;

    //const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?zip=${zip1}${zip2}${zip3}${zip4}${zip5}&appid=${API_KEY}&units=imperial`
    );
    const list = await api_call.json();

    if (zip1) {
      console.log(list);

      this.setState({
        date: list.list[0].dt_txt,
        zip1: zip1,
        //country: country,
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
        <MainContent>
          <Form getWeather={this.getWeather} />
          <Weather
            zip1={this.state.zip1}
            zip2={this.zip2}
            zip3={this.zip3}
            zip4={this.zip4}
            zip5={this.zip5}
            // props to pass for all weather information
            date={this.state.date}
            //country={this.state.country}
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
        </MainContent>
      </AppWrapper>
    );
  }
}

export default App;
