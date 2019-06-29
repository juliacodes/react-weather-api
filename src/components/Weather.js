import React from "react";
import styled from "styled-components";

const Today = styled.div``;
const Future = styled.div``;
const FutureDiv = styled.div``;

const Weather = props => (
  <div>
    {props.zip && (
      <div>
        <Today>
          <p>Date: {props.date}</p>
          <p>Location: {props.city}</p>
          <p>Temperature: {props.temperatureNow}</p>
          <p>Description: {props.conditionsToday}</p>
          <p>High: {props.temperatureNowHigh}</p>
          <p>Wind Speed: {props.windSpeed}</p>
        </Today>
        <Future>
          <FutureDiv>
            <p>Today</p>
            <p>Temperature: {props.temperatureNow}</p>
            <p>Description: {props.conditionsToday}</p>
          </FutureDiv>
          <FutureDiv>
            <p>Tomorrow</p>
            <p>Temperature: {props.temperatureTomorrow}</p>
            <p>Description: {props.conditionsTomorrow}</p>
          </FutureDiv>
          <FutureDiv>
            <p>Day 3</p>
            <p>Temperature: {props.temperatureDay3}</p>
            <p>Description: {props.conditionsDay3}</p>
          </FutureDiv>
          <FutureDiv>
            <p>Day 4</p>
            <p>Temperature: {props.temperatureDay4}</p>
            <p>Description: {props.conditionsDay4}</p>
          </FutureDiv>
          <FutureDiv>
            <p>Day 5</p>
            <p>Temperature: {props.temperatureDay5}</p>
            <p>Description: {props.conditionsDay5}</p>
          </FutureDiv>
        </Future>
      </div>
    )}
    {props.error && <p>Error: {props.error}</p>}
  </div>
);

export default Weather;
