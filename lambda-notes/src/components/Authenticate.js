import React from "react";

const Authenticate = (App, Login) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: localStorage.getItem("username")
      };
    }

    componentDidMount = () => {
      let name = localStorage.getItem("note_token");
      if (name) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    };

    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;
