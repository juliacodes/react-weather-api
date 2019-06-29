import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

import styled from "styled-components";

const AppWrapper = styled.div``;

const API_KEY = "b8d5d166fa637e392446c7de40113758";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <AppWrapper>
        <Titles />
        <Form />
        <Weather />
      </AppWrapper>
    );
  }
}

export default App;
