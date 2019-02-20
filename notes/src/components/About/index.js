import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  min-width: 100vw;
  overflow: hidden;
`;

export default class About extends Component {
  render() {
    return (
      <Container>
        <h2>About</h2>
        <p>
          Lambda Notes is a React-based note taking app that uses Redux for
          state management and Google's Firebase for authentication.
        </p>
        <p>
          It was built as part of Lambda School's frontend and backend project
          weeks to showcase the skills that we have learned.
        </p>
      </Container>
    );
  }
}
