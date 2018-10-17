import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

export default class MainButton extends React.Component {
  render() {
    const StyledButton = styled(Button)`
      font-color: #ffffff;
      background-color: #2bc1c4;
      border-radius: 0px;
    `;
    return (
      <div>
        <StyledButton block>{this.props.name}</StyledButton>
      </div>
    );
  }
}
