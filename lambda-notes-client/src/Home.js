import React, { Component } from 'react';
import styled from "react-emotion";

import Register from './components/forms/user/Register';
import Login from './components/forms/user/Login';


const Main = styled("div")`
  margin-left: 25%;
  width: 75%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 43px;
    color: #4A494A;
    margin-top: 20%;
  }
  div {
    display: flex;
    margin-top: 100px;
  }
`;

class Home extends Component {

  componentDidMount() {
    this.props.atHomeToggle()
  }

  componentWillUnmount() {
    this.props.atHomeToggle();
  }

  render() {
    return (
      <Main>
        <h1>Welcome</h1>
        <div>
          <Login {...this.props} />
          <Register {...this.props} />
        </div>
      </Main>
    );
  }
}

export default Home;