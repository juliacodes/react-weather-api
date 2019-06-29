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

class Form extends React.Componenet {
  constructor(props) {}
  Autotab(current, to) {
    if (
      current.getAttribute &&
      current.value.length == current.getAttribute("maxlength")
    ) {
      to.focus();
    }
  }
  render() {
    return (
      <FormDiv onSubmit={props.getWeather}>
        <h1>forecast</h1>
        <InputDiv>
          <input
            onInput="Autotab(this, document.formName.inputName)"
            type="text"
            maxLength="1"
            placeholder="5"
            name="zip1"
          ></input>
          <input
            onInput="Autotab(this, document.formName.inputName)"
            type="text"
            maxLength="1"
            placeholder="5"
            name="zip2"
          ></input>
          <input
            onInput="Autotab(this, document.formName.inputName)"
            type="text"
            maxLength="1"
            placeholder="5"
            name="zip3"
          ></input>
          <input
            onInput="Autotab(this, document.formName.inputName)"
            type="text"
            maxLength="1"
            placeholder="5"
            name="zip4"
          ></input>
          <input
            onInput={(this.Autotab, document.formName.inputName)}
            type="text"
            maxLength="1"
            placeholder="5"
            name="zip5"
          ></input>
        </InputDiv>
        <button>submit</button>
        <p>Input your Zipcode to begin</p>
      </FormDiv>
    );
  }
}

export default Form;
