import React, { Component } from 'react';
import Signin from './Signin'
import Signup from './Signup'
import styled from 'styled-components'

const SplitScreen = styled.div`
    width: 100vw
    height: 100vh
    background: linear-gradient(to right, grey, white);
    display: flex
    flex-flow: row
    justify-content: space-around
    align-items: center
    font-size: 2rem
`

class AuthContainer extends Component {
  render() {
    return (
      <SplitScreen >
        <Signup />
        <p>or</p>
        <Signin />
      </SplitScreen>
    );
  }
}

export default AuthContainer;
