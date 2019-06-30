import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
const WeatherContainer = styled.div`
  height: 100%;
`;
const Today = styled.div`
  width: 100%;
  text-align: left;
  font-size: 10px;
  padding: 46px;
`;

const InlineDate = styled.div`
  * {
    display: inline;
  }

  p {
    font-size: 14px;
    color: #848484;
  }

  h2 {
    display: block;
    font-size: 20px;
  }
`;

const TodayDescribe = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  align-items: flex-start;
  h1 {
    font-size: 130px;
    flex: 130px;
    margin: 0;
    padding-left: 60px;
  }
  div {
    flex: 300px;
    padding: 60px 0 0 0;
    margin: 0;
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 17px;
    }
    p {
      text-align: center;
      width: 180px;
      margin: 0 auto;
      color: #848484;
      font-size: 12px;
    }
  }
`;

const Future = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "day day2 day3 day4 day5";
  position: relative;
  justify-items: center;
  height: 100%;
  width: 787px;
  margin: 0;
  transform: translate(-50px, 0px);

  p {
    margin: 0;
    text-align: center;
  }
`;
const FutureDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
  margin-right: 30px;
  background-color: white;
  width: 100px;
  height: 150px;
  padding: 18px;
  grid-area: day;

  &:nth-child(2) {
    grid-area: day2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }

  &:nth-child(3) {
    grid-area: day3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
  &:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    grid-area: day4;
  }
  &:nth-child(5) {
    grid-area: day5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
`;

const FutureTemp = styled.div`
  position: absolute;
  bottom: 20px;
  font-weight: 800;
  width: 80%;
  text-align: center;
`;

class Weather extends React.Component {
  render() {
    const date = new Date();
    return (
      <div>
        {this.props.zip1 && (
          <WeatherContainer>
            <Today>
              <InlineDate>
                <p>
                  <Moment format="MMMM do[, ] YYYY">{date}</Moment>
                </p>
                <h2> {this.props.city}</h2>
              </InlineDate>
              <TodayDescribe>
                <h1>
                  {/* {this.props.temperatureNow} */}
                  {JSON.stringify(this.props.temperatureNow).slice(0, 2)}&#176;
                </h1>
                <div>
                  <h2>{this.props.conditionsToday}</h2>
                  <p>
                    The high today will be {this.props.temperatureNowHigh}° with
                    winds at {this.props.windSpeed} mph
                  </p>
                </div>
              </TodayDescribe>
            </Today>
            <Future>
              <FutureDiv>
                {/* today */}
                <p>Today</p>
                <p>{this.props.conditionsToday}</p>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureNow).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* tomorrow */}
                <p>
                  <Moment add={{ days: 1 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <p>{this.props.conditionsTomorrow}</p>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureTomorrow).slice(0, 2)}
                  &#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* day 3 */}
                <p>
                  {" "}
                  <Moment add={{ days: 2 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <p>{this.props.conditionsDay3}</p>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureDay3).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* day 4 */}
                <p>
                  <Moment add={{ days: 3 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <p>{this.props.conditionsDay4}</p>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureDay4).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* day 5 */}
                <p>
                  <Moment add={{ days: 4 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <p>{this.props.conditionsDay5}</p>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureDay5).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
            </Future>
          </WeatherContainer>
        )}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
