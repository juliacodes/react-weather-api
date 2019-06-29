import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
const Today = styled.div``;
const Future = styled.div``;
const FutureDiv = styled.div``;

class Weather extends React.Component {
  render() {
    const date = new Date();
    return (
      <div>
        {this.props.zip1 && (
          <div>
            <Today>
              <Moment format="dddd">{date}</Moment>
              <p>Date: {this.props.date}</p>
              <p>Location: {this.props.city}</p>
              <p>Temperature: {this.props.temperatureNow}</p>
              <p>Description: {this.props.conditionsToday}</p>
              <p>High: {this.props.temperatureNowHigh}</p>
              <p>Wind Speed: {this.props.windSpeed}</p>
            </Today>
            <Future>
              <FutureDiv>
                <p>Today</p>
                <Moment format="dddd">{date}</Moment>
                <p>Temperature: {this.props.temperatureNow}</p>
                <p>Description: {this.props.conditionsToday}</p>
              </FutureDiv>
              <FutureDiv>
                <p>Tomorrow</p>
                <Moment add={{ days: 1 }} format="dddd">
                  {date}
                </Moment>

                <p>Temperature: {this.props.temperatureTomorrow}</p>
                <p>Description: {this.props.conditionsTomorrow}</p>
              </FutureDiv>
              <FutureDiv>
                <p>Day 3</p>
                <Moment add={{ days: 2 }} format="dddd">
                  {date}
                </Moment>
                <p>Temperature: {this.props.temperatureDay3}</p>
                <p>Description: {this.props.conditionsDay3}</p>
              </FutureDiv>
              <FutureDiv>
                <p>Day 4</p>
                <Moment add={{ days: 3 }} format="dddd">
                  {date}
                </Moment>
                <p>Temperature: {this.props.temperatureDay4}</p>
                <p>Description: {this.props.conditionsDay4}</p>
              </FutureDiv>
              <FutureDiv>
                <p>Day 5</p>
                <Moment add={{ days: 4 }} format="dddd">
                  {date}
                </Moment>
                <p>Temperature: {this.props.temperatureDay5}</p>
                <p>Description: {this.props.conditionsDay5}</p>
              </FutureDiv>
            </Future>
          </div>
        )}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
