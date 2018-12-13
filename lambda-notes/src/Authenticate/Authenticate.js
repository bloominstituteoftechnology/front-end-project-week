import React, { Component } from "react";
import Login from "./Login";

const Authenticate = (App) =>

class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }

  componentDidMount = () => {
    if (!localStorage.getItem("user")) {
      this.setState({ loggedIn: false })
    } else {
      this.setState({ loggedIn: true })
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <App />
    } else {
      return <Login status={this.state.loggedIn}/>
    }
  }
}

export default Authenticate;