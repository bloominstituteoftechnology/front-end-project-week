import React, { Component } from 'react';
import styled from "react-emotion";

import { NavLink } from 'react-router-dom';

const Main = styled("div")`
  margin-left: 25%;
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 43px;
    color: #4A494A;
  }
  .enter-link {
    display: flex;
    margin-top: 20px;
    padding: 18px;
    width: 150px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    background-color: #2AC0C4;
    border: solid 1px #939797;
    &:hover {
        background-color: #23a0a4;
      }
  }
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
        <NavLink className="enter-link" to="/notes">Enter</NavLink>
      </Main>
    );
  }
}

export default Home;