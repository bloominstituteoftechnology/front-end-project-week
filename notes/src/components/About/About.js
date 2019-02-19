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
          Lambda Notes utilizes Blockstack's innovative technology which allows
          developers to build dApps (decentralized apps) and users to access
          them throught the Blockstack browser. With Blockstack, the data
          generated in an app is owned by the user and privacy, security, and
          freedom are maintained. Blockstack provides key tools and
          infrastructure for enabling decentralized storage and decentralized
          authentication and identity. After logging in using Blockstack's
          identity verificatiion, the user's notes are stored in decentralized
          multi-player Gaia storage.
        </p>
      </Container>
    );
  }
}
