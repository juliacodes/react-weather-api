import React, { Component } from "react";
import styled from "styled-components";

const CreditSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;

  p {
    margin: 0;
    color: lightgrey;
  }

  a {
    color: lightgrey;
  }
`;
class Credit extends Component {
  render() {
    return (
      <CreditSection>
        <p>
          Designed and Developed by <a href="http://juliacodes.com">Julia</a>
        </p>
      </CreditSection>
    );
  }
}

export default Credit;
