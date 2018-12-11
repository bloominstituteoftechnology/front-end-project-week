import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, NavLink } from "react-router-dom";
import { getNotes } from "./actions";
import "./App.css";

import NavigationBar from "./components/Navigation/NavigationBar";
import SingleNoteView from "./views/SingleNoteView";
import NewNoteView from "./views/NewNoteView";
import ListView from "./views/ListView";
import EditNoteView from "./views/EditNoteView";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import axios from "axios";

class App extends Component {
  state = {
    loggedIn: false,
    users: []
  };

  componentDidMount() {
    this.authenticate();
    // this.props.getNotes();
  }

  authenticate = () => {
    const url = "https://api-lambda-notes.herokuapp.com/api/notes";
    const token = localStorage.getItem("jwtToken");
    const options = {
      headers: {
        Authorization: token
      }
    };

    if (token) {
      axios
        .get(url, options)
        .then(res => {
          if (res.status === 200 && res.data) {
            this.setState({ loggedIn: true, users: res.data });
          } else {
            throw new Error();
          }
        })
        .catch(err => this.props.history.push("/login"));
    } else {
      this.props.history.push("/login");
    }
  };

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    console.log(this.props);
    console.log(prevProps);
    if (pathname === "/" && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
  }

  logOut = () => {
    localStorage.removeItem("jwtToken");
    this.setState({ loggedIn: false });
    this.props.history.push("/login");
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="app-container">
          <NavigationBar logOut={this.logOut} />

          <div className="content-container">
            <div className="content-wrapper">
              <Route exact path="/" component={ListView} />
              <Route path="/notes/:id" component={SingleNoteView} />
              <Route path="/create" component={NewNoteView} />
              <Route path="/edit/:id" component={EditNoteView} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app-container auth-container">
          <nav>
            <NavLink
              to="/register"
              activeStyle={{ textDecoration: "underline" }}
            >
              Register
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login" activeStyle={{ textDecoration: "underline" }}>
              Login
            </NavLink>
          </nav>
          <section>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </section>
        </div>
      );
    }
  }
}

export default withRouter(
  connect(
    null,
    { getNotes }
  )(App)
);
