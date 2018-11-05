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

class Navbar extends Component {
  render() {
    return (
      <nav>
        <styHeader>Lambda Notes</styHeader>
      </nav>
    );
  }
}

export default Navbar;
