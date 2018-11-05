import React, { Component } from "react";
import styled from "styled-components";

const styHeader = styled.nav`
  background-color: rgb(7.3%, 6.6%, 6.4%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 500;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
`;

class Header extends Component {
  render() {
    return (
      <div>
        <styHeader>Lambda Notes</styHeader>
      </div>
    );
  }
}

export default Header;
