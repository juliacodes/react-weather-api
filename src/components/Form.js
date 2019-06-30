import React from "react";
import styled from "styled-components";

const FormDiv = styled.form`
  width: 100%;
  padding: 60px 0;

  & > h1 {
    width: 100%;
    text-align: center;
    font-weight: 100;
    letter-spacing: 0.26em;
  }

  & > p {
    font-weight: 100;
    letter-spacing: 0.1em;
    font-size: 14px;
    text-align: center;
    padding-top: 40px;
  }
`;

const InputDiv = styled.div`
  width: 510px;
  margin: 70px auto 30px auto;
  display: block;

  & > input {
    border: none;
    border-radius: 9px;
    outline: none;
    font-family: "Montserrat", sans-serif;
    color: #3f3f3f;
    box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
    margin: 0 10px;
    font-size: 80px;
    width: 80px;
    text-align: center;
    height: 76px;
    padding: 10px 0 10px 0px;
  }
`;

class Form extends React.Component {
  render() {
    return (
      <div>
        {!this.props.zip1 && (
          <FormDiv onSubmit={this.props.getWeather}>
            <h1>forecast</h1>
            <InputDiv>
              <input
                type="text"
                maxLength="1"
                placeholder="5"
                name="zip1"
              ></input>
              <input
                type="text"
                maxLength="1"
                placeholder="5"
                name="zip2"
              ></input>
              <input
                type="text"
                maxLength="1"
                placeholder="5"
                name="zip3"
              ></input>
              <input
                type="text"
                maxLength="1"
                placeholder="5"
                name="zip4"
              ></input>
              <input
                type="text"
                maxLength="1"
                placeholder="5"
                name="zip5"
              ></input>
            </InputDiv>
            <button style={{ display: "none" }}></button>
            <p>Input your zipcode to begin</p>
          </FormDiv>
        )}
      </div>
    );
  }
}

export default Form;
