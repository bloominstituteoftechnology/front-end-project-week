import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
