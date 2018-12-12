import React from "react";
import Login from "./Login";
import axios from "axios";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        login: false,
        username: "",
        password: ""
      };
    }

    componentDidMount() {
      console.log("\nRunning");
      localStorage.setItem("username", "shawn");
      localStorage.setItem("password", "cat");
      if (localStorage.getItem("loggedIn")) {
        this.setState({ login: true });
      }

      axios
        .get("/api/current_user")
        .then(res => {
          console.log(res);
          if (res.data._id) {
            this.setState({ login: true });
          }
        })
        .catch(err => console.log(err));
    }

    fetchNote = id => {
      // console.log(this.state.id);
      axios
        .get(`http://localhost:5000/notes/${id}`)
        .then(response => {
          this.setState(() => ({ note: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
    };

    handleUsername = event => {
      this.setState({ username: event.target.value });
    };

    handlePassword = event => {
      this.setState({ password: event.target.value });
    };

    loginEvent = event => {
      event.preventDefault();
      if (
        this.state.username === localStorage.getItem("username") &&
        this.state.password === localStorage.getItem("password")
      ) {
        this.setState({ login: true });
        localStorage.setItem("loggedIn", "shawn");
      } else {
        this.setState({ login: false });
      }
    };

    signOut = event => {
      event.preventDefault();
      if (localStorage.getItem("loggedIn")) {
        localStorage.removeItem("loggedIn");
        this.setState({ login: false });
      }

      axios
        .get("/api/logout")
        .then(res => {
          this.setState({ login: false });
        })
        .catch(err => console.log(err));
    };

    render() {
      if (this.state.login) {
        return <App signOut={this.signOut} />;
      } else {
        return (
          <Login
            handleUsername={this.handleUsername}
            handlePassword={this.handlePassword}
            loginEvent={this.loginEvent}
          />
        );
      }
    }
  };

export default Authenticate;
