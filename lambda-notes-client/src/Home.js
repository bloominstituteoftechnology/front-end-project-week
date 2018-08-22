import React, { Component } from 'react';
import styled from "react-emotion";

import { NavLink } from 'react-router-dom';

const Main = styled("div")`
  margin-left: 25%;
  background-color: red;
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {

  componentDidMount() {
    this.props.atHomeToggle()
  }

  componentWillUnmount() {
    this.props.atHomeToggle()
  }

  render() {
    return (
      <Main>
        <h1>Welcome</h1>
        <NavLink to="/notes">Enter</NavLink>
      </Main>
    );
  }
}

export default Home;